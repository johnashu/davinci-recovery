// 2021.04.22

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import '../exchange/TransferProxy.sol';
import '../lib/contracts/ERC721.sol';
import '../lib/contracts/ERC1155.sol';


contract Auctions {
    using SafeMath for uint;

    event logBid(address indexed orderId, uint indexed tokenId, address bidder, uint price, uint time);
    event logCancel(address indexed orderId, uint indexed tokenId, uint time);
    event logClaim(address indexed orderId, uint indexed tokenId, address buyer, uint price, uint fees, uint royalties, uint time);
    event logClose(address indexed orderId, uint indexed tokenId, uint time);
    event logForfeit(address indexed orderId, uint indexed tokenId, address bidder, uint price, uint time);
    event logInvalid(address indexed orderId, uint indexed tokenId, uint time);
    event logModify(address indexed orderId, uint indexed tokenId, uint time);
    event logOrder(address indexed orderId, uint indexed tokenId, uint price, uint time);
    event logRemove(address indexed orderId, uint indexed tokenId, uint time);

    address         public  operator;  // Auction operator
    address payable public  treasury;  // Fee collector
    uint            public  sellerFees;
    uint            public  buyerFees;
    TransferProxy   public  transferProxy;

    enum TokenType  {ERC721, ERC1155}
    enum OrderState {DRAFT, OPEN, PAUSED, CANCELLED, INVALID, CLOSED, PAID}
    enum BidState   {INVALID, VALID, FORFEIT, PAID}


    struct Bid {
        address         bidder;
        uint            price;
        uint            time;
        BidState        state;       // invalid, valid, forfeit, paid
    }

    struct Order {
        address         orderId;
        address payable owner;
        TokenType       tokenType;
        address         collection;
        uint            tokenId;
        uint            fees;
        uint            royalties;
        address payable beneficiary;
        uint            price;       // starting price
        uint            reserve;     // reserve price
        uint            lastbid;     // last price
        uint            endtime;     // epoch
        uint            count;       // bid counter     
        OrderState      state;       // draft, open, paused, cancelled, invalid, closed, paid
    }

    bool private _mutex; // reentry check
    mapping(address => Order) internal orders;     // orders by orderid
    mapping(address => Bid[]) internal orderBids;  // bids by orderid

    modifier _lock_() {
        require(!_mutex, "ERR_INVALIDREENTRY");
        _mutex = true;
        _;
        _mutex = false;
    }

    modifier _viewlock_() {
        require(!_mutex, "ERR_INVALIDREENTRY");
        _;
    }

    modifier authorized() {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        _;
    }

    constructor() public {
        address payable caller = payable(msg.sender);
        operator   = caller;
        treasury   = caller;
        sellerFees = 2;
        buyerFees  = 2;
    }


    //---- ORDERS

    function newOrder(address orderId, address payable owner, TokenType tokenType, address collection, uint tokenId, uint price, uint reserve, uint fees, uint royalties, address payable beneficiary, uint endtime) external authorized _lock_ {
        require(orders[orderId].orderId==address(0x0), 'ERR_ORDEREXISTS');
        Order storage order = orders[orderId];
        order.orderId     = orderId;
        order.owner       = owner;
        order.tokenType   = tokenType;
        order.collection  = collection;
        order.tokenId     = tokenId;
        order.fees        = fees;
        order.royalties   = royalties;
        order.beneficiary = beneficiary;
        order.price       = price;
        order.reserve     = reserve;
        order.endtime     = endtime;
        order.lastbid     = 0;
        order.count       = 0;
        order.state       = OrderState.OPEN;
        emit logOrder(orderId, tokenId, price, block.timestamp);
    }

    function getOrder(address orderId) external view returns (Order memory) {
        return orders[orderId];
    }

    function modifyOrder(address orderId, uint price, uint reserve, uint fees, uint royalties, address payable beneficiary, uint endtime) external authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        order.price       = price;
        order.reserve     = reserve;
        order.endtime     = endtime;
        order.fees        = fees;
        order.royalties   = royalties;
        order.beneficiary = beneficiary;
        emit logModify(orderId, order.tokenId, block.timestamp);
    }

    function closeOrder(address orderId) public authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        order.state = OrderState.CLOSED;
        emit logClose(orderId, order.tokenId, block.timestamp);
    }

    function cancelOrder(address orderId) public authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        order.state = OrderState.CANCELLED;
        emit logCancel(orderId, order.tokenId, block.timestamp);
    }
    
    // Invalidate if winner didn't claim and bidders didn't match reserve price
    function invalidOrder(address orderId) public authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        order.state = OrderState.INVALID;
        emit logInvalid(orderId, order.tokenId, block.timestamp);
    }
    
    function removeOrder(address orderId) public authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        uint tokenId = order.tokenId;
        delete orders[orderId];
        // TODO: remove bids?
        emit logRemove(orderId, tokenId, block.timestamp);
    }


    //---- BIDS

    // Money won't get collected until after auction ends
    // If buyer doesn't claim in time, bid will be forfeited and next bidder will be able to claim up to reserve price
    // Modifications only allowed before first bid
    // Cancellations allowed any time

    function getBid(address orderId, uint8 index) external view returns (Bid memory) {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        Bid[] memory bids = orderBids[orderId];
        require(bids.length > 0, 'ERR_NOBIDS');
        require(index < bids.length, 'ERR_OUTOFBOUNDS');
        return bids[index];
    }

    function getLastBid(address orderId) external view returns (Bid memory) {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        Bid[] memory bids = orderBids[orderId];
        require(bids.length > 0, 'ERR_NOBIDS');
        return bids[bids.length-1];
    }

    function getLastValidBid(address orderId) public view returns (Bid memory) {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        Bid[] memory bids  = orderBids[orderId];
        require(bids.length > 0, 'ERR_NOBIDS');
        uint index = bids.length-1;
        while (index>=0){
            if(bids[index].state==BidState.VALID){ return bids[index]; }
            if(index>0){ index--; } else { break; }
        }
        return Bid(address(0),0,0,BidState.INVALID);
    }

    function getLastValidIndex(address orderId) public view returns (uint) {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        Bid[] memory bids  = orderBids[orderId];
        require(bids.length > 0, 'ERR_NOBIDS');
        uint index = bids.length; // Unfortunately uints can't go below zero so we won't know if no valid bids so lets count from max instead of max-1 and use 0 as no valid bids
        while (index>0){
            if(bids[index-1].state==BidState.VALID){ return index; }
            index--;
        }
        return index; // check index-1 for correct index, 0 for not found
    }

    function getBids(address orderId) external view returns (Bid[] memory) {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        return orderBids[orderId];
    }

    // Anybody can bid, but this contract has to be approved by the token seller
    // Buyer sends money to this contract then fees and royalties are deducted from payment
    // Money is then transferred to treasury, beneficiary and seller
    // Token is transferred from seller to buyer
    function placeBid(address orderId, uint price) external {
        require(orderId != address(0), "ERR_INVALIDORDERID");
        require(price > 0, 'ERR_INVALIDPRICE');

        // Verify order exists
        Order storage order = orders[orderId];
        require(order.orderId != address(0), 'ERR_ORDERNOTFOUND');

        address seller = address(order.owner);
        address bidder = address(msg.sender);
        uint tokenId   = order.tokenId;

        require(order.state == OrderState.OPEN, 'ERR_ORDERNOTOPEN'); // Verify token is for sale
        require(msg.sender != seller, 'ERR_SELLERCANTBID');          // Seller can not bid
        require(price > order.lastbid, 'ERR_UNDERBID');  // Verify price is greater than latest bid

        // Set status closed if reached end block and reject bid
        if(block.timestamp > order.endtime) {
            order.state = OrderState.CLOSED;
            return;
        }

        // Save bid
        Bid memory bid = Bid(bidder, price, block.timestamp, BidState.VALID);
        orderBids[orderId].push(bid);

        // Update order
        order.lastbid = price;
        order.count = order.count + 1;

        emit logBid(orderId, tokenId, bidder, price, block.timestamp);
    }

    // If buyer doesn't pay, forfeit and get next bidder up to reserve price else declare auction invalid
    function forfeit(address orderId, uint index) public authorized _lock_ {
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        Bid[] storage bids = orderBids[orderId];
        require(bids.length > 0, 'ERR_NOBIDS');           // Verify bids exist
        require(index < bids.length, 'ERR_OUTOFBOUNDS');  // Verify bid[index] in bounds
        Bid storage bid = bids[index];
        //orderBids[orderId][index].state = BidState.FORFEIT;
        bid.state = BidState.FORFEIT;
        emit logForfeit(orderId, order.tokenId, bid.bidder, order.price, block.timestamp);
    }
    
    // Winner must pay highest bid amount to claim the asset
    // We may approve amount to transfer beforehand
    function claim(address orderId) public payable _lock_ {
        // Get Order
        Order storage order = orders[orderId];
        require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');   // verify order exists
        require(order.state!=OrderState.PAID, 'ERR_ALREADYPAID');    // verify order is not paid
        require(order.state==OrderState.CLOSED, 'ERR_MUSTBECLOSED'); // verify order is closed

        // Get winning bid, index 0 no winning bid
        uint index = getLastValidIndex(orderId);
        require(index > 0, 'ERR_INVALIDBIDS');
        Bid storage bid = orderBids[orderId][index-1];

        // Seller/buyer
        address sender = address(msg.sender);
        address bidder = address(bid.bidder);
        address payable seller = payable(order.owner);

        require(bidder    != address(0x0),  'ERR_BIDNOTFOUND');   // verify bid exists
        require(sender    == bidder,        'ERR_USERNOTWINNER'); // verify user is highest bidder
        require(bid.price >= order.reserve, 'ERR_UNDERRESERVE');  // verify payment greater than reserve
        require(msg.value == bid.price,     'ERR_INVALIDAMOUNT'); // verify payment in valid auction

        // Pay fees to treasury
        uint total = bid.price;
        uint fees  = 0;
        if(sellerFees > 0) {
            fees = fees.add(total.mul(sellerFees).div(100));
        }
        if(buyerFees > 0) {
            fees = fees.add(total.mul(buyerFees).div(100));
        }
        if(fees>0) { 
            treasury.transfer(fees);
        }

        // Pay royalties to author
        uint royalties = 0;
        if(order.royalties > 0 && order.beneficiary != address(0)) {
            royalties = total.mul(order.royalties).div(100);
            if(royalties>0) { 
                order.beneficiary.transfer(royalties);
            }
        }

        // Transfer money left to seller
        uint amount = total.sub(fees).sub(royalties);
        if(amount > 0) {
            seller.transfer(amount);
        }

        // Transfer token to new owner
        transferProxy.transferToken(uint(order.tokenType), order.collection, order.owner, bidder, order.tokenId, 1);

        // Order state
        bid.state = BidState.PAID;
        order.state = OrderState.PAID;
        emit logClaim(orderId, order.tokenId, bid.bidder, order.price, order.fees, order.royalties, block.timestamp);
    }


    //---- ADMIN
    
    function getOperator() external view returns (address) {
        return operator;
    }

    function setOperator(address payable any) external authorized {
        operator = any;
    }

    function getTreasury() external view returns (address) {
        return treasury;
    }

    function setTreasury(address payable any) external authorized {
        treasury = any;
    }

    function getSellerFees() external view returns (uint) {
        return sellerFees;
    }

    function setSellerFees(uint fee) external authorized {
        sellerFees = fee;
    }

    function getBuyerFees() external view returns (uint) {
        return buyerFees;
    }

    function setBuyerFees(uint fee) external authorized {
        buyerFees = fee;
    }

    function getTransferProxy() external view returns (address) {
        return address(transferProxy);
    }

    function setTransferProxy(TransferProxy proxy) external authorized {
        transferProxy = proxy;
    }

    function gulp() external authorized _lock_ {
        address self = address(this);
        if(self.balance > 0) {
            treasury.transfer(self.balance);
        }
    }
}


// END
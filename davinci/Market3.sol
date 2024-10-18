// 2021.03.31

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import '../exchange/TransferProxy.sol';
import '../lib/contracts/ERC721.sol';
import '../lib/contracts/ERC1155.sol';


contract Market3 {
    using SafeMath for uint;

    event logSale(address sender, address orderId, uint tokenId, address buyer, uint price, uint qty, uint payment, uint fees, uint royalties);

	address         public  operator;  // Market operator
	address payable public  treasury;  // Fee collector
	uint            public  sellerFees;
	uint            public  buyerFees;
	TransferProxy   public  transferProxy;

    enum OrderType  {SALE, AUCTION}
    enum TokenType  {ERC721, ERC1155}
    enum OrderState {DRAFT, OPEN, CLOSED, PAUSED, CANCELLED}

    struct Order {
        address         orderId;
        address payable owner;
        TokenType       tokenType;
        address         token;
        uint            tokenId;
        uint            amount;
        uint            price;
        uint            fees;
        uint            royalties;
        address payable beneficiary;
        uint            enddate;
        OrderState      state;
    }
    
    bool private _mutex; // reentry check
	mapping(address => Order) internal orders; // orders by orderid

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

	function newOrder(address orderId, address payable owner, TokenType tokenType, address token, uint tokenId, uint amount, uint price, uint fees, uint royalties, address payable beneficiary, uint enddate) external _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        require(orders[orderId].orderId==address(0x0), 'ERR_ORDEREXISTS');
        Order memory order = Order(orderId, owner, tokenType, token, tokenId, amount, price, fees, royalties, beneficiary, enddate, OrderState.OPEN);
        orders[orderId] = order;
	}

	function getOrder(address orderId) external view returns (Order memory) {
		return orders[orderId];
	}

	function modOrder(address orderId, uint amount, uint price, uint fees, uint royalties, address payable beneficiary, uint enddate) external _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        require(orders[orderId].orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
        orders[orderId].amount = amount;
        orders[orderId].price = price;
        orders[orderId].fees = fees;
        orders[orderId].royalties = royalties;
        orders[orderId].beneficiary = beneficiary;
        orders[orderId].enddate = enddate;
	}

	function closeOrder(address orderId) public _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
		Order storage order = orders[orderId];
		require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
		order.state = OrderState.CLOSED;
	}

	function cancelOrder(address orderId) public _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
		Order storage order = orders[orderId];
		require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
		order.state = OrderState.CANCELLED;
		// Remove from orders?
	}
	
	function removeOrder(address orderId) public _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
		Order storage order = orders[orderId];
		require(order.orderId!=address(0x0), 'ERR_ORDERNOTFOUND');
		delete orders[orderId];
	}
	
	// Anybody can buy, but this contract has to be approved by the token seller
	// Buyer sends money to this contract then fees and royalties are deducted from payment
	// Money is then transferred to treasury, beneficiary and seller
	// Token is transferred from seller to buyer
	function buy(address orderId, address buyer, uint qty) public payable _lock_ {
        require(orderId != address(0), "ERR_INVALIDORDERID");
		require(qty > 0, 'ERR_INVALIDQUANTITY');

		// Verify order exists
		Order storage order = orders[orderId];
		require(order.orderId != address(0), 'ERR_ORDERNOTFOUND');

		// verify token is for sale
		require(order.state == OrderState.OPEN, 'ERR_ORDERNOTOPEN');

		address payable seller = payable(order.owner);
		//address buyer = address(msg.sender);
        uint payment = uint(msg.value);
        //require(payment > 0, "ERR_INVALIDPAYMENT");  // Free stuff allowed?
		
		// verify copies available
		uint copies = 0;
		if(order.tokenType==TokenType.ERC721) {
	    	require(IERC721(order.token).isApprovedForAll(seller, address(transferProxy)), 'ERR_NOTOPERATOR');
			if(seller==IERC721(order.token).ownerOf(order.tokenId)) {
				copies = 1;
			}
		} else {
	    	require(IERC1155(order.token).isApprovedForAll(seller, address(transferProxy)), 'ERR_NOTOPERATOR');
			copies = IERC1155(order.token).balanceOf(order.owner, order.tokenId);
		}

		require(copies >= qty, 'ERR_COPIESNOTAVAILABLE');
		require(order.amount >= qty, 'ERR_QTYNOTAVAILABLE');

		// verify money received is equal to qty*price
		uint total = qty.mul(order.price);
		require(payment >= total, 'ERR_INSUFFICIENTFUNDS');

		// pay fees to treasury
		uint fees = 0;
		if(sellerFees > 0) {
			fees = fees.add(total.mul(sellerFees).div(100));
		}
		if(buyerFees > 0) {
			fees = fees.add(total.mul(buyerFees).div(100));
		}
		if(fees>0) { 
			treasury.transfer(fees);
		}

		// pay royalties to author
		uint royalties = 0;
		if(order.royalties > 0 && order.beneficiary != address(0)) {
			royalties = total.mul(order.royalties).div(100);
			if(royalties>0) { 
				order.beneficiary.transfer(royalties);
			}
		}

		// transfer money left to seller
		uint amount = total.sub(fees).sub(royalties);
		if(amount > 0) {
			seller.transfer(amount);
		}

		// transfer token to new owner
		transferProxy.transferToken(uint(order.tokenType), order.token, order.owner, buyer, order.tokenId, qty);

		// check if copies sold externally
		order.amount = order.amount.sub(qty);
		copies = copies.sub(qty);
		if(order.amount>copies) { 
			order.amount = copies; 
		}

		// set status closed if no copies left
		if(order.amount == 0) {
			order.state = OrderState.CLOSED;
		}

    	emit logSale(msg.sender, orderId, order.tokenId, buyer, order.price, qty, payment, fees, royalties);
	}

    function getOperator() external view returns (address) {
        return operator;
    }

    function setOperator(address payable any) external {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        operator = any;
    }

    function getTreasury() external view returns (address) {
        return treasury;
    }

    function setTreasury(address payable any) external {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        treasury = any;
    }

    function getSellerFees() external view returns (uint) {
        return sellerFees;
    }

    function setSellerFees(uint fee) external {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        sellerFees = fee;
    }

    function getBuyerFees() external view returns (uint) {
        return buyerFees;
    }

    function setBuyerFees(uint fee) external {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        buyerFees = fee;
    }

    function getTransferProxy() external view returns (address) {
        return address(transferProxy);
    }

    function setTransferProxy(TransferProxy proxy) external {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        transferProxy = proxy;
    }

    function gulp() external _lock_ {
        require(msg.sender==operator, 'ERR_UNAUTHORIZED');
        address self = address(this);
        if(self.balance > 0) {
        	treasury.transfer(self.balance);
        }
    }
}


// END
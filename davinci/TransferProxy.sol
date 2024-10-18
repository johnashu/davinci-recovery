pragma solidity ^0.6.12;

import "../lib/interface/IERC721.sol";
import "../lib/interface/IERC1155.sol";
import "./OwnableOperatorRole.sol";

contract TransferProxy is OwnableOperatorRole {

    function erc721safeTransferFrom(IERC721 token, address from, address to, uint256 tokenId) public onlyOperator {
        token.safeTransferFrom(from, to, tokenId);
    }

    function erc1155safeTransferFrom(IERC1155 token, address from, address to, uint256 id, uint256 value, bytes calldata data) public onlyOperator {
        token.safeTransferFrom(from, to, id, value, data);
    }

    function transferToken(uint tokenType, address tokenAddress, address from, address to, uint id, uint amount) public onlyOperator {
		if(tokenType==0) {
        	IERC721(tokenAddress).safeTransferFrom(from, to, id);
		} else {
        	IERC1155(tokenAddress).safeTransferFrom(from, to, id, amount, "");
		}
    }

}

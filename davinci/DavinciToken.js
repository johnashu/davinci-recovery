const DavinciToken = {
  "contractName": "DavinciToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "contractURI",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenURIPrefix",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "recipients",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "bps",
          "type": "uint256[]"
        }
      ],
      "name": "SecondarySaleFees",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fees",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getFeeBps",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getFeeRecipients",
      "outputs": [
        {
          "internalType": "address payable[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenURIPrefix",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct ERC721Base.Fee[]",
          "name": "_fees",
          "type": "tuple[]"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURIPrefix",
          "type": "string"
        }
      ],
      "name": "setTokenURIPrefix",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "contractURI",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"contractURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenURIPrefix\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"recipients\",\"type\":\"address[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"bps\",\"type\":\"uint256[]\"}],\"name\":\"SecondarySaleFees\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fees\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getFeeBps\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getFeeRecipients\",\"outputs\":[{\"internalType\":\"address payable[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address payable\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct ERC721Base.Fee[]\",\"name\":\"_fees\",\"type\":\"tuple[]\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"contractURI\",\"type\":\"string\"}],\"name\":\"setContractURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"tokenURIPrefix\",\"type\":\"string\"}],\"name\":\"setTokenURIPrefix\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenURIPrefix\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"anyone can mint token.\",\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"returns\":{\"_0\":\"uint256 representing the amount owned by the passed address\"}},\"burn(uint256)\":{\"details\":\"Burns a specific ERC721 token.\",\"params\":{\"tokenId\":\"uint256 id of the ERC721 token to be burned.\"}},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"returns\":{\"_0\":\"address currently approved for the given token ID\"}},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"returns\":{\"_0\":\"bool whether the given operator is approved by the given owner\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"returns\":{\"_0\":\"address currently marked as the owner of the given token ID\"}},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"returns\":{\"_0\":\"uint256 token ID at the given index of the tokens list\"}},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"returns\":{\"_0\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"}},\"tokenURI(uint256)\":{\"details\":\"Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query\"}},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"returns\":{\"_0\":\"uint256 representing the total amount of tokens\"}},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"title\":\"DavinciToken\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciToken.sol\":\"DavinciToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC165.sol\":{\"keccak256\":\"0x22d052c0d5b45f041d556896ef7592011361d4b6f854191bb00d7e8ef6c030d9\",\"urls\":[\"bzz-raw://d3d19bf368d3e0d25ae4d779508242fd08c976dbb49dec63f3e8151278f5a8c9\",\"dweb:/ipfs/QmQ5RWSr91yhaK9qybHkKHsdygpBtjabwxuaeMiJWvnuw8\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC721.sol\":{\"keccak256\":\"0x494b729b0d3f076b9ab99109e8571a5bb951f43fb1e8a4c3554d1f44dc12f6bc\",\"urls\":[\"bzz-raw://d8d78a73c9a7556f1a09435f2b3f1000cd50cbc604642f8ec3d001cd6b582490\",\"dweb:/ipfs/QmS8wr6G6vbHfZhbhV3NQXUk6LB1qsTZuNgZszdGN1UD7J\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC721Base.sol\":{\"keccak256\":\"0xacaca1584455eb781fbd254690bb067e4783f9cc5fcae0bcb049ea8dd0912acc\",\"urls\":[\"bzz-raw://f7c33bf954f1c076cc2f1f3fc89fe82f755909363d943df11fe942e378835e5a\",\"dweb:/ipfs/QmbAttSsxaxjEAdhsZMdC8oY5YFXiC1ykzFiDQkKPMEuXi\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC721Enumerable.sol\":{\"keccak256\":\"0x312cfb6a8b5b545dba1b9a6532e3e5104c17537129402a49eb8075fb53496a6e\",\"urls\":[\"bzz-raw://bf014f505e615cea28c3d57130b890d9dfeb118efa7cf30cc18bf4d692b70a89\",\"dweb:/ipfs/QmZ98KGPUHikWGoDNCaTGEqBvsbka5aznVERg6SygL86v3\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasContractURI.sol\":{\"keccak256\":\"0x2b7f23d3e395e328fb75160e409d2c7fcb804b881513fbe7ab6d9a58e26998dd\",\"urls\":[\"bzz-raw://c5a0ce0d795368d68ce6405bc701a68cc7f704bbd114eb82f949280672a62a0b\",\"dweb:/ipfs/Qmew57iRJC9eAL2u1RNofFPzpuy4xnjaTDVdqd9ph9Q7yD\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasSecondarySaleFees.sol\":{\"keccak256\":\"0x71b91263c4c4775dc5fc4046d8777039c223b3ece584e997ec1a32e85de1bf1f\",\"urls\":[\"bzz-raw://a6dadabed0b4bfc854839415cd918402e47f93e9041dc31153cc6b650f48ee98\",\"dweb:/ipfs/QmPTMBBoUVrtirPjnTgBbqAoDcRBMRVH7oZQyFKk51Bdsp\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasTokenURI.sol\":{\"keccak256\":\"0xf8691e795fc9cb04d3d501eca489a4e790b81c40d20fbc08952509452eb285fb\",\"urls\":[\"bzz-raw://4ffc15b8099e7981cdb5a45c346affd7c20a4222cee651af2fa2d0e82a8abe62\",\"dweb:/ipfs/QmZNyShUPSxyqCksfdtgiangG4k1kb53C9oaRBz5Xvy5qp\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC165.sol\":{\"keccak256\":\"0xd733b0a4f0cbff05a0e7366c9059e0f3bc4a27930a3dea93dc8054adf7a1e053\",\"urls\":[\"bzz-raw://daeaca3827b4df16041b007a045fedd75a3d15e4a75050c83ca53877dfa30aec\",\"dweb:/ipfs/QmSgGXbMNmgPpLZDXpcyEDqvm7QAYTxtmxJpi7KpbBspzh\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC721.sol\":{\"keccak256\":\"0x23e6b33e3acf61d6d10386c1c27e5b9f208a69a0bde3b8c4bb1197a2375b2921\",\"urls\":[\"bzz-raw://db757b8bdbbd1ec8d6368e8a729902b36abab4e59a63be1539ddcbd12cafc988\",\"dweb:/ipfs/QmaWQAzUkNH3FfbeuSW8toSzVYw7eL2vdzTYCcenPQjvi6\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC721Enumerable.sol\":{\"keccak256\":\"0xb6fe90ef9ec88eee6c7c56fd8d032a7f42a6dd1e194c2a6dd92861c706103c40\",\"urls\":[\"bzz-raw://75116234994f0d89d38675a6ee304d6b118e6d4fada0018d128f503a6e47a06d\",\"dweb:/ipfs/QmNVZF3CTw3vyo26FZWwHj32tb5b1eSvRYsL4KQHnBVepn\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC721Receiver.sol\":{\"keccak256\":\"0x6f66512c9a3e6c77ca51387fcbd845947e176910d89e466ce1154ea706848adb\",\"urls\":[\"bzz-raw://d51d0cdf855de52ec54db8a5180929add9ae6e4e745c156d27a9bad1359f5344\",\"dweb:/ipfs/QmST7zy289AespBjp5HRt6as6PoDwgivwzgwB4YWTGGLZH\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/StringLibrary.sol\":{\"keccak256\":\"0x008a9399d6eb91ebd6ea7e1ebb1d5468b5d3effca17f4ee0ed10d48287129135\",\"urls\":[\"bzz-raw://740e8472ef707d1e2d080e3e1156d3eb6b26b8246694f29993df0871a74b9349\",\"dweb:/ipfs/QmcizT75DUqQroA6pv3LK1F5uay99WPvtHUUG8bSEiVeEE\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciToken.sol\":{\"keccak256\":\"0xad331af2e9d8c09b55a6ddda8aa3903b569c928396025a3cd4469a282f1fe5fd\",\"urls\":[\"bzz-raw://b7dfd254dd1fd1b89a26b1c94af2c9cbd66b7ae0ec2366c2893fc3087d259145\",\"dweb:/ipfs/QmRK5VEbPoJonsBBYir71K7rmfvKQ7MabXcAQXDqVrq8vL\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x9486045e189facd2e868ece35249872598ef03f1087fb6fa4d1161842daa2287\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://77c3a04ef8453788b14b1ebbc24dd3f0a18ceb2615cd156aac949a611e552af8\",\"dweb:/ipfs/QmcmqWGguRM3iLuF57tcyrN3F6EA63kzeNkDfQuteBnurr\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x15e2d5bd4c28a88548074c54d220e8086f638a71ed07e6b3ba5a70066fcf458d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://90faf5851c02f9bd42c5bfb54d4f0421a2612f50ab80b2c4fa24fa3792071cc2\",\"dweb:/ipfs/QmRGM4F2PcGVF85aTfaA9YBhCHHDqrMhRjyp6fGeBTtirb\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x21662e4254ce4ac8570b30cc7ab31435966b3cb778a56ba4d09276881cfb2437\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://acce8fe6adc670f9987a8b6aedc4cc0abcd0dcd2e152d649a12099d735bd7bad\",\"dweb:/ipfs/QmXAk17oK3daBmA8CGyVcU56L496jW3U6Ef1WkfHyB1JAV\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002fea38038062002fea8339810160408190526200003491620003fe565b84848383808260006200004662000191565b600080546001600160a01b0319166001600160a01b03831690811782556040519293509160008051602062002fca833981519152908290a350620000916301ffc9a760e01b62000195565b620000a3632dde656160e21b62000195565b8051620000b8906002906020840190620002bb565b50620000cb63e8a3d48560e01b62000195565b508051620000e1906003906020840190620002bb565b50620000f690506380ac58cd60e01b62000195565b6200010863780e9d6360e01b62000195565b83516200011d90600d906020870190620002bb565b5082516200013390600e906020860190620002bb565b5062000146635b5e139f60e01b62000195565b505050506200017b7fe37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf6200019560201b60201c565b6200018683620001f3565b505050505062000585565b3390565b6001600160e01b03198082161415620001cb5760405162461bcd60e51b8152600401620001c29062000519565b60405180910390fd5b6001600160e01b0319166000908152600160208190526040909120805460ff19169091179055565b620001fd62000191565b6001600160a01b031662000210620002ac565b6001600160a01b031614620002395760405162461bcd60e51b8152600401620001c29062000550565b6001600160a01b038116620002625760405162461bcd60e51b8152600401620001c290620004d3565b600080546040516001600160a01b038085169392169160008051602062002fca83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002fe57805160ff19168380011785556200032e565b828001600101855582156200032e579182015b828111156200032e57825182559160200191906001019062000311565b506200033c92915062000340565b5090565b5b808211156200033c576000815560010162000341565b600082601f83011262000368578081fd5b81516001600160401b03808211156200037f578283fd5b6040516020601f8401601f1916820181018381118382101715620003a1578586fd5b80604052508194508382528681858801011115620003be57600080fd5b600092505b83831015620003e25785830181015182840182015291820191620003c3565b83831115620003f45760008185840101525b5050505092915050565b600080600080600060a0868803121562000416578081fd5b85516001600160401b03808211156200042d578283fd5b6200043b89838a0162000357565b9650602088015191508082111562000451578283fd5b6200045f89838a0162000357565b604089015190965091506001600160a01b03821682146200047e578283fd5b60608801519194508082111562000493578283fd5b620004a189838a0162000357565b93506080880151915080821115620004b7578283fd5b50620004c68882890162000357565b9150509295509295909350565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b612a3580620005956000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063715018a6116100f9578063b9c4d9fb11610097578063c87b56dd11610071578063c87b56dd146103b6578063e8a3d485146103c9578063e985e9c5146103d1578063f2fde38b146103e4576101c4565b8063b9c4d9fb1461037b578063bd442c3b1461039b578063c0ac9983146103ae576101c4565b806395d89b41116100d357806395d89b411461033a57806399e0dd7c14610342578063a22cb46514610355578063b88d4fde14610368576101c4565b8063715018a6146103175780638da5cb5b1461031f578063938e3d7b14610327576101c4565b80632f745c59116101665780634f6ccce7116101405780634f6ccce7146102bd5780636308f1cd146102d05780636352211e146102f157806370a0823114610304576101c4565b80632f745c591461028457806342842e0e1461029757806342966c68146102aa576101c4565b8063095ea7b3116101a2578063095ea7b3146102275780630ebd4c7f1461023c57806318160ddd1461025c57806323b872dd14610271576101c4565b806301ffc9a7146101c957806306fdde03146101f2578063081812fc14610207575b600080fd5b6101dc6101d7366004611ea5565b6103f7565b6040516101e9919061215a565b60405180910390f35b6101fa610416565b6040516101e99190612165565b61021a610215366004611f10565b6104a4565b6040516101e9919061209d565b61023a610235366004611e7a565b6104f0565b005b61024f61024a366004611f10565b6105d5565b6040516101e99190612147565b6102646106df565b6040516101e991906128ef565b61023a61027f366004611d9f565b6106e5565b610264610292366004611e7a565b610722565b61023a6102a5366004611d9f565b610782565b61023a6102b8366004611f10565b61079d565b6102646102cb366004611f10565b6107d0565b6102e36102de366004611ffa565b610817565b6040516101e99291906120ed565b61021a6102ff366004611f10565b61085a565b610264610312366004611d44565b610895565b61023a6108de565b61021a610967565b61023a610335366004611edd565b610976565b6101fa6109be565b61023a610350366004611edd565b610a19565b61023a610363366004611e49565b610a61565b61023a610376366004611ddf565b610b2f565b61038e610389366004611f10565b610b6e565b6040516101e99190612106565b61023a6103a9366004611f28565b610c7d565b6101fa610c92565b6101fa6103c4366004611f10565b610ced565b6101fa610d1d565b6101dc6103df366004611d67565b610d75565b61023a6103f2366004611d44565b610da3565b6001600160e01b03191660009081526001602052604090205460ff1690565b600d805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600020905b81548152906001019060200180831161047f57829003601f168201915b505050505081565b60006104af82610e63565b6104d45760405162461bcd60e51b81526004016104cb90612560565b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006104fb8261085a565b9050806001600160a01b0316836001600160a01b0316141561052f5760405162461bcd60e51b81526004016104cb906126e7565b806001600160a01b0316610541610e80565b6001600160a01b0316148061055d575061055d816103df610e80565b6105795760405162461bcd60e51b81526004016104cb90612414565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152600f602090815260408083208054825181850281018501909352808352606094859484015b82821015610647576000848152602090819020604080518082019091526002850290910180546001600160a01b031682526001908101548284015290835290920191016105ff565b5050505090506060815167ffffffffffffffff8111801561066757600080fd5b50604051908082528060200260200182016040528015610691578160200160208202803683370190505b50905060005b82518110156106d7578281815181106106ac57fe5b6020026020010151602001518282815181106106c457fe5b6020908102919091010152600101610697565b509392505050565b600b5490565b6106f66106f0610e80565b82610e84565b6107125760405162461bcd60e51b81526004016104cb90612744565b61071d838383610f09565b505050565b600061072d83610895565b821061074b5760405162461bcd60e51b81526004016104cb906121af565b6001600160a01b038316600090815260096020526040902080548390811061076f57fe5b9060005260206000200154905092915050565b61071d83838360405180602001604052806000815250610b2f565b6107a86106f0610e80565b6107c45760405162461bcd60e51b81526004016104cb90612892565b6107cd81610f28565b50565b60006107da6106df565b82106107f85760405162461bcd60e51b81526004016104cb906127a1565b600b828154811061080557fe5b90600052602060002001549050919050565b600f602052816000526040600020818154811061083057fe5b6000918252602090912060029091020180546001909101546001600160a01b039091169250905082565b6000818152600560205260408120546001600160a01b03168061088f5760405162461bcd60e51b81526004016104cb906124ce565b92915050565b60006001600160a01b0382166108bd5760405162461bcd60e51b81526004016104cb90612471565b6001600160a01b038216600090815260076020526040902061088f90610f3a565b6108e6610e80565b6001600160a01b03166108f7610967565b6001600160a01b03161461091d5760405162461bcd60e51b81526004016104cb906125f8565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61097e610e80565b6001600160a01b031661098f610967565b6001600160a01b0316146109b55760405162461bcd60e51b81526004016104cb906125f8565b6107cd81610f3e565b600e805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b610a21610e80565b6001600160a01b0316610a32610967565b6001600160a01b031614610a585760405162461bcd60e51b81526004016104cb906125f8565b6107cd81610f55565b610a69610e80565b6001600160a01b0316826001600160a01b03161415610a9a5760405162461bcd60e51b81526004016104cb9061235a565b8060086000610aa7610e80565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610aeb610e80565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b23919061215a565b60405180910390a35050565b610b40610b3a610e80565b83610e84565b610b5c5760405162461bcd60e51b81526004016104cb90612744565b610b6884848484610f68565b50505050565b6000818152600f602090815260408083208054825181850281018501909352808352606094859484015b82821015610be0576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101610b98565b5050505090506060815167ffffffffffffffff81118015610c0057600080fd5b50604051908082528060200260200182016040528015610c2a578160200160208202803683370190505b50905060005b82518110156106d757828181518110610c4557fe5b602002602001015160000151828281518110610c5d57fe5b6001600160a01b0390921660209283029190910190910152600101610c30565b610c88338484610f9b565b61071d83826111ee565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b6060610cf882610e63565b610d145760405162461bcd60e51b81526004016104cb9061268a565b61088f8261121d565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b610dab610e80565b6001600160a01b0316610dbc610967565b6001600160a01b031614610de25760405162461bcd60e51b81526004016104cb906125f8565b6001600160a01b038116610e085760405162461bcd60e51b81526004016104cb90612269565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000908152600560205260409020546001600160a01b0316151590565b3390565b6000610e8f82610e63565b610eab5760405162461bcd60e51b81526004016104cb906123c8565b6000610eb68361085a565b9050806001600160a01b0316846001600160a01b03161480610ef15750836001600160a01b0316610ee6846104a4565b6001600160a01b0316145b80610f015750610f018185610d75565b949350505050565b610f14838383611358565b610f1e838261145e565b61071d828261155a565b6107cd610f348261085a565b82611598565b5490565b8051610f51906002906020840190611bcc565b5050565b8051610f51906003906020840190611bcc565b610f73848484610f09565b610f7f848484846115ab565b610b685760405162461bcd60e51b81526004016104cb9061220c565b610fa583836116fa565b6060815167ffffffffffffffff81118015610fbf57600080fd5b50604051908082528060200260200182016040528015610fe9578160200160208202803683370190505b5090506060825167ffffffffffffffff8111801561100657600080fd5b50604051908082528060200260200182016040528015611030578160200160208202803683370190505b50905060005b83518110156111a35760006001600160a01b031684828151811061105657fe5b6020026020010151600001516001600160a01b031614156110895760405162461bcd60e51b81526004016104cb9061285b565b83818151811061109557fe5b602002602001015160200151600014156110c15760405162461bcd60e51b81526004016104cb90612178565b6000858152600f6020526040902084518590839081106110dd57fe5b602090810291909101810151825460018082018555600094855293839020825160029092020180546001600160a01b0319166001600160a01b03909216919091178155910151910155835184908290811061113457fe5b60200260200101516000015183828151811061114c57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505083818151811061117857fe5b60200260200101516020015182828151811061119057fe5b6020908102919091010152600101611036565b508251156111e7577f99aba1d63749cfd5ad1afda7c4663840924d54eb5f005bbbeadedc6ec13674b28483836040516111de939291906128f8565b60405180910390a15b5050505050565b6111f782610e63565b6112135760405162461bcd60e51b81526004016104cb906125ac565b610f518282611717565b6000818152600460209081526040918290208054835160026001831615610100026000190190921691909104601f810184900484028201840190945283815260609361088f939192918301828280156112b75780601f1061128c576101008083540402835291602001916112b7565b820191906000526020600020905b81548152906001019060200180831161129a57829003601f168201915b505060038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152955091935091508301828280156113455780601f1061131a57610100808354040283529160200191611345565b820191906000526020600020905b81548152906001019060200180831161132857829003601f168201915b505050505061173690919063ffffffff16565b826001600160a01b031661136b8261085a565b6001600160a01b0316146113915760405162461bcd60e51b81526004016104cb9061262d565b6001600160a01b0382166113b75760405162461bcd60e51b81526004016104cb906122fd565b6113c08161186e565b6001600160a01b03831660009081526007602052604090206113e1906118a9565b6001600160a01b0382166000908152600760205260409020611402906118ba565b60008181526005602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166000908152600960205260408120546114829060016118c3565b6000838152600a602052604090205490915080821461151d576001600160a01b03841660009081526009602052604081208054849081106114bf57fe5b906000526020600020015490508060096000876001600160a01b03166001600160a01b0316815260200190815260200160002083815481106114fd57fe5b6000918252602080832090910192909255918252600a9052604090208190555b6001600160a01b038416600090815260096020526040902080548061153e57fe5b6001900381819060005260206000200160009055905550505050565b6001600160a01b0390911660009081526009602081815260408084208054868652600a84529185208290559282526001810183559183529091200155565b6115a282826118eb565b610f5181611917565b60006115bf846001600160a01b0316611955565b6115cb57506001610f01565b600060606001600160a01b038616630a85bd0160e11b6115e9610e80565b8988886040516024016115ff94939291906120b1565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199094169390931790925290516116529190612081565b6000604051808303816000865af19150503d806000811461168f576040519150601f19603f3d011682016040523d82523d6000602084013e611694565b606091505b5091509150816116c6578051156116ae5780518082602001fd5b60405162461bcd60e51b81526004016104cb9061220c565b6000818060200190518101906116dc9190611ec1565b6001600160e01b031916630a85bd0160e11b149350610f0192505050565b611704828261195b565b61170e828261155a565b610f5181611a22565b6000828152600460209081526040909120825161071d92840190611bcc565b805182516060918491849184910167ffffffffffffffff8111801561175a57600080fd5b506040519080825280601f01601f191660200182016040528015611785576020820181803683370190505b5090506000805b84518110156117f5578481815181106117a157fe5b602001015160f81c60f81b8383806001019450815181106117be57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060010161178c565b5060005b83518110156118625783818151811061180e57fe5b602001015160f81c60f81b83838060010194508151811061182b57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016117f9565b50909695505050505050565b6000818152600660205260409020546001600160a01b0316156107cd57600090815260066020526040902080546001600160a01b0319169055565b80546118b69060016118c3565b9055565b80546001019055565b6000828211156118e55760405162461bcd60e51b81526004016104cb90612391565b50900390565b6118f58282611a66565b6118ff828261145e565b6000818152600a6020526040812055610f5181611b1e565b60008181526004602052604090205460026000196101006001841615020190911604156107cd5760008181526004602052604081206107cd91611c4a565b3b151590565b6001600160a01b0382166119815760405162461bcd60e51b81526004016104cb9061252b565b61198a81610e63565b156119a75760405162461bcd60e51b81526004016104cb906122c6565b600081815260056020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558352600790915290206119e6906118ba565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b816001600160a01b0316611a798261085a565b6001600160a01b031614611a9f5760405162461bcd60e51b81526004016104cb906127fe565b611aa88161186e565b6001600160a01b0382166000908152600760205260409020611ac9906118a9565b60008181526005602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600b54600090611b2f9060016118c3565b6000838152600c6020526040812054600b8054939450909284908110611b5157fe5b9060005260206000200154905080600b8381548110611b6c57fe5b6000918252602080832090910192909255828152600c90915260409020829055600b805480611b9757fe5b600190038181906000526020600020016000905590556000600c60008681526020019081526020016000208190555050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c0d57805160ff1916838001178555611c3a565b82800160010185558215611c3a579182015b82811115611c3a578251825591602001919060010190611c1f565b50611c46929150611c8a565b5090565b50805460018160011615610100020316600290046000825580601f10611c7057506107cd565b601f0160209004906000526020600020908101906107cd91905b5b80821115611c465760008155600101611c8b565b600082601f830112611caf578081fd5b813567ffffffffffffffff811115611cc5578182fd5b611cd8601f8201601f1916602001612961565b9150808252836020828501011115611cef57600080fd5b8060208401602084013760009082016020015292915050565b600060408284031215611d19578081fd5b611d236040612961565b90508135611d30816129d4565b808252506020820135602082015292915050565b600060208284031215611d55578081fd5b8135611d60816129d4565b9392505050565b60008060408385031215611d79578081fd5b8235611d84816129d4565b91506020830135611d94816129d4565b809150509250929050565b600080600060608486031215611db3578081fd5b8335611dbe816129d4565b92506020840135611dce816129d4565b929592945050506040919091013590565b60008060008060808587031215611df4578081fd5b8435611dff816129d4565b93506020850135611e0f816129d4565b925060408501359150606085013567ffffffffffffffff811115611e31578182fd5b611e3d87828801611c9f565b91505092959194509250565b60008060408385031215611e5b578182fd5b8235611e66816129d4565b915060208301358015158114611d94578182fd5b60008060408385031215611e8c578182fd5b8235611e97816129d4565b946020939093013593505050565b600060208284031215611eb6578081fd5b8135611d60816129e9565b600060208284031215611ed2578081fd5b8151611d60816129e9565b600060208284031215611eee578081fd5b813567ffffffffffffffff811115611f04578182fd5b610f0184828501611c9f565b600060208284031215611f21578081fd5b5035919050565b600080600060608486031215611f3c578283fd5b8335925060208085013567ffffffffffffffff80821115611f5b578485fd5b818701915087601f830112611f6e578485fd5b8135611f81611f7c82612988565b612961565b818152848101908486016040808502870188018d1015611f9f57898afd5b8996505b84871015611fcb57611fb58d83611d08565b8452600196909601959287019290810190611fa3565b919850508901359450505080831115611fe2578384fd5b5050611ff086828701611c9f565b9150509250925092565b6000806040838503121561200c578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b8381101561204a5781518752958201959082019060010161202e565b509495945050505050565b6000815180845261206d8160208601602086016129a8565b601f01601f19169290920160200192915050565b600082516120938184602087016129a8565b9190910192915050565b6001600160a01b0391909116815260200190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526120e36080830184612055565b9695505050505050565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156118625783516001600160a01b031683529284019291840191600101612122565b600060208252611d60602083018461201b565b901515815260200190565b600060208252611d606020830184612055565b6020808252601c908201527f4665652076616c75652073686f756c6420626520706f73697469766500000000604082015260600190565b6020808252602b908201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201527f74206f6620626f756e6473000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252602c908201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b6020808252602c908201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201527f7574206f6620626f756e64730000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f4552433732313a206275726e206f6620746f6b656e2074686174206973206e6f60408201527f74206f776e000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f526563697069656e742073686f756c642062652070726573656e740000000000604082015260600190565b60208082526030908201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000606082015260800190565b90815260200190565b60006060820185835260206060818501528186518084526080860191508288019350845b818110156129415784516001600160a01b03168352938301939183019160010161291c565b50508481036040860152612955818761201b565b98975050505050505050565b60405181810167ffffffffffffffff8111828210171561298057600080fd5b604052919050565b600067ffffffffffffffff82111561299e578081fd5b5060209081020190565b60005b838110156129c35781810151838201526020016129ab565b83811115610b685750506000910152565b6001600160a01b03811681146107cd57600080fd5b6001600160e01b0319811681146107cd57600080fdfea264697066735822122053c25d27358c1af2f6026984738f8d480e4965f5f0dc74f92ef8ed7a5f5e08b164736f6c634300060c00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101c45760003560e01c8063715018a6116100f9578063b9c4d9fb11610097578063c87b56dd11610071578063c87b56dd146103b6578063e8a3d485146103c9578063e985e9c5146103d1578063f2fde38b146103e4576101c4565b8063b9c4d9fb1461037b578063bd442c3b1461039b578063c0ac9983146103ae576101c4565b806395d89b41116100d357806395d89b411461033a57806399e0dd7c14610342578063a22cb46514610355578063b88d4fde14610368576101c4565b8063715018a6146103175780638da5cb5b1461031f578063938e3d7b14610327576101c4565b80632f745c59116101665780634f6ccce7116101405780634f6ccce7146102bd5780636308f1cd146102d05780636352211e146102f157806370a0823114610304576101c4565b80632f745c591461028457806342842e0e1461029757806342966c68146102aa576101c4565b8063095ea7b3116101a2578063095ea7b3146102275780630ebd4c7f1461023c57806318160ddd1461025c57806323b872dd14610271576101c4565b806301ffc9a7146101c957806306fdde03146101f2578063081812fc14610207575b600080fd5b6101dc6101d7366004611ea5565b6103f7565b6040516101e9919061215a565b60405180910390f35b6101fa610416565b6040516101e99190612165565b61021a610215366004611f10565b6104a4565b6040516101e9919061209d565b61023a610235366004611e7a565b6104f0565b005b61024f61024a366004611f10565b6105d5565b6040516101e99190612147565b6102646106df565b6040516101e991906128ef565b61023a61027f366004611d9f565b6106e5565b610264610292366004611e7a565b610722565b61023a6102a5366004611d9f565b610782565b61023a6102b8366004611f10565b61079d565b6102646102cb366004611f10565b6107d0565b6102e36102de366004611ffa565b610817565b6040516101e99291906120ed565b61021a6102ff366004611f10565b61085a565b610264610312366004611d44565b610895565b61023a6108de565b61021a610967565b61023a610335366004611edd565b610976565b6101fa6109be565b61023a610350366004611edd565b610a19565b61023a610363366004611e49565b610a61565b61023a610376366004611ddf565b610b2f565b61038e610389366004611f10565b610b6e565b6040516101e99190612106565b61023a6103a9366004611f28565b610c7d565b6101fa610c92565b6101fa6103c4366004611f10565b610ced565b6101fa610d1d565b6101dc6103df366004611d67565b610d75565b61023a6103f2366004611d44565b610da3565b6001600160e01b03191660009081526001602052604090205460ff1690565b600d805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b820191906000526020600020905b81548152906001019060200180831161047f57829003601f168201915b505050505081565b60006104af82610e63565b6104d45760405162461bcd60e51b81526004016104cb90612560565b60405180910390fd5b506000908152600660205260409020546001600160a01b031690565b60006104fb8261085a565b9050806001600160a01b0316836001600160a01b0316141561052f5760405162461bcd60e51b81526004016104cb906126e7565b806001600160a01b0316610541610e80565b6001600160a01b0316148061055d575061055d816103df610e80565b6105795760405162461bcd60e51b81526004016104cb90612414565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6000818152600f602090815260408083208054825181850281018501909352808352606094859484015b82821015610647576000848152602090819020604080518082019091526002850290910180546001600160a01b031682526001908101548284015290835290920191016105ff565b5050505090506060815167ffffffffffffffff8111801561066757600080fd5b50604051908082528060200260200182016040528015610691578160200160208202803683370190505b50905060005b82518110156106d7578281815181106106ac57fe5b6020026020010151602001518282815181106106c457fe5b6020908102919091010152600101610697565b509392505050565b600b5490565b6106f66106f0610e80565b82610e84565b6107125760405162461bcd60e51b81526004016104cb90612744565b61071d838383610f09565b505050565b600061072d83610895565b821061074b5760405162461bcd60e51b81526004016104cb906121af565b6001600160a01b038316600090815260096020526040902080548390811061076f57fe5b9060005260206000200154905092915050565b61071d83838360405180602001604052806000815250610b2f565b6107a86106f0610e80565b6107c45760405162461bcd60e51b81526004016104cb90612892565b6107cd81610f28565b50565b60006107da6106df565b82106107f85760405162461bcd60e51b81526004016104cb906127a1565b600b828154811061080557fe5b90600052602060002001549050919050565b600f602052816000526040600020818154811061083057fe5b6000918252602090912060029091020180546001909101546001600160a01b039091169250905082565b6000818152600560205260408120546001600160a01b03168061088f5760405162461bcd60e51b81526004016104cb906124ce565b92915050565b60006001600160a01b0382166108bd5760405162461bcd60e51b81526004016104cb90612471565b6001600160a01b038216600090815260076020526040902061088f90610f3a565b6108e6610e80565b6001600160a01b03166108f7610967565b6001600160a01b03161461091d5760405162461bcd60e51b81526004016104cb906125f8565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61097e610e80565b6001600160a01b031661098f610967565b6001600160a01b0316146109b55760405162461bcd60e51b81526004016104cb906125f8565b6107cd81610f3e565b600e805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b610a21610e80565b6001600160a01b0316610a32610967565b6001600160a01b031614610a585760405162461bcd60e51b81526004016104cb906125f8565b6107cd81610f55565b610a69610e80565b6001600160a01b0316826001600160a01b03161415610a9a5760405162461bcd60e51b81526004016104cb9061235a565b8060086000610aa7610e80565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610aeb610e80565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610b23919061215a565b60405180910390a35050565b610b40610b3a610e80565b83610e84565b610b5c5760405162461bcd60e51b81526004016104cb90612744565b610b6884848484610f68565b50505050565b6000818152600f602090815260408083208054825181850281018501909352808352606094859484015b82821015610be0576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101610b98565b5050505090506060815167ffffffffffffffff81118015610c0057600080fd5b50604051908082528060200260200182016040528015610c2a578160200160208202803683370190505b50905060005b82518110156106d757828181518110610c4557fe5b602002602001015160000151828281518110610c5d57fe5b6001600160a01b0390921660209283029190910190910152600101610c30565b610c88338484610f9b565b61071d83826111ee565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b6060610cf882610e63565b610d145760405162461bcd60e51b81526004016104cb9061268a565b61088f8261121d565b6002805460408051602060018416156101000260001901909316849004601f8101849004840282018401909252818152929183018282801561049c5780601f106104715761010080835404028352916020019161049c565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b610dab610e80565b6001600160a01b0316610dbc610967565b6001600160a01b031614610de25760405162461bcd60e51b81526004016104cb906125f8565b6001600160a01b038116610e085760405162461bcd60e51b81526004016104cb90612269565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000908152600560205260409020546001600160a01b0316151590565b3390565b6000610e8f82610e63565b610eab5760405162461bcd60e51b81526004016104cb906123c8565b6000610eb68361085a565b9050806001600160a01b0316846001600160a01b03161480610ef15750836001600160a01b0316610ee6846104a4565b6001600160a01b0316145b80610f015750610f018185610d75565b949350505050565b610f14838383611358565b610f1e838261145e565b61071d828261155a565b6107cd610f348261085a565b82611598565b5490565b8051610f51906002906020840190611bcc565b5050565b8051610f51906003906020840190611bcc565b610f73848484610f09565b610f7f848484846115ab565b610b685760405162461bcd60e51b81526004016104cb9061220c565b610fa583836116fa565b6060815167ffffffffffffffff81118015610fbf57600080fd5b50604051908082528060200260200182016040528015610fe9578160200160208202803683370190505b5090506060825167ffffffffffffffff8111801561100657600080fd5b50604051908082528060200260200182016040528015611030578160200160208202803683370190505b50905060005b83518110156111a35760006001600160a01b031684828151811061105657fe5b6020026020010151600001516001600160a01b031614156110895760405162461bcd60e51b81526004016104cb9061285b565b83818151811061109557fe5b602002602001015160200151600014156110c15760405162461bcd60e51b81526004016104cb90612178565b6000858152600f6020526040902084518590839081106110dd57fe5b602090810291909101810151825460018082018555600094855293839020825160029092020180546001600160a01b0319166001600160a01b03909216919091178155910151910155835184908290811061113457fe5b60200260200101516000015183828151811061114c57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505083818151811061117857fe5b60200260200101516020015182828151811061119057fe5b6020908102919091010152600101611036565b508251156111e7577f99aba1d63749cfd5ad1afda7c4663840924d54eb5f005bbbeadedc6ec13674b28483836040516111de939291906128f8565b60405180910390a15b5050505050565b6111f782610e63565b6112135760405162461bcd60e51b81526004016104cb906125ac565b610f518282611717565b6000818152600460209081526040918290208054835160026001831615610100026000190190921691909104601f810184900484028201840190945283815260609361088f939192918301828280156112b75780601f1061128c576101008083540402835291602001916112b7565b820191906000526020600020905b81548152906001019060200180831161129a57829003601f168201915b505060038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152955091935091508301828280156113455780601f1061131a57610100808354040283529160200191611345565b820191906000526020600020905b81548152906001019060200180831161132857829003601f168201915b505050505061173690919063ffffffff16565b826001600160a01b031661136b8261085a565b6001600160a01b0316146113915760405162461bcd60e51b81526004016104cb9061262d565b6001600160a01b0382166113b75760405162461bcd60e51b81526004016104cb906122fd565b6113c08161186e565b6001600160a01b03831660009081526007602052604090206113e1906118a9565b6001600160a01b0382166000908152600760205260409020611402906118ba565b60008181526005602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166000908152600960205260408120546114829060016118c3565b6000838152600a602052604090205490915080821461151d576001600160a01b03841660009081526009602052604081208054849081106114bf57fe5b906000526020600020015490508060096000876001600160a01b03166001600160a01b0316815260200190815260200160002083815481106114fd57fe5b6000918252602080832090910192909255918252600a9052604090208190555b6001600160a01b038416600090815260096020526040902080548061153e57fe5b6001900381819060005260206000200160009055905550505050565b6001600160a01b0390911660009081526009602081815260408084208054868652600a84529185208290559282526001810183559183529091200155565b6115a282826118eb565b610f5181611917565b60006115bf846001600160a01b0316611955565b6115cb57506001610f01565b600060606001600160a01b038616630a85bd0160e11b6115e9610e80565b8988886040516024016115ff94939291906120b1565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166001600160e01b03199094169390931790925290516116529190612081565b6000604051808303816000865af19150503d806000811461168f576040519150601f19603f3d011682016040523d82523d6000602084013e611694565b606091505b5091509150816116c6578051156116ae5780518082602001fd5b60405162461bcd60e51b81526004016104cb9061220c565b6000818060200190518101906116dc9190611ec1565b6001600160e01b031916630a85bd0160e11b149350610f0192505050565b611704828261195b565b61170e828261155a565b610f5181611a22565b6000828152600460209081526040909120825161071d92840190611bcc565b805182516060918491849184910167ffffffffffffffff8111801561175a57600080fd5b506040519080825280601f01601f191660200182016040528015611785576020820181803683370190505b5090506000805b84518110156117f5578481815181106117a157fe5b602001015160f81c60f81b8383806001019450815181106117be57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060010161178c565b5060005b83518110156118625783818151811061180e57fe5b602001015160f81c60f81b83838060010194508151811061182b57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001016117f9565b50909695505050505050565b6000818152600660205260409020546001600160a01b0316156107cd57600090815260066020526040902080546001600160a01b0319169055565b80546118b69060016118c3565b9055565b80546001019055565b6000828211156118e55760405162461bcd60e51b81526004016104cb90612391565b50900390565b6118f58282611a66565b6118ff828261145e565b6000818152600a6020526040812055610f5181611b1e565b60008181526004602052604090205460026000196101006001841615020190911604156107cd5760008181526004602052604081206107cd91611c4a565b3b151590565b6001600160a01b0382166119815760405162461bcd60e51b81526004016104cb9061252b565b61198a81610e63565b156119a75760405162461bcd60e51b81526004016104cb906122c6565b600081815260056020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558352600790915290206119e6906118ba565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600b80546000838152600c60205260408120829055600182018355919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db90155565b816001600160a01b0316611a798261085a565b6001600160a01b031614611a9f5760405162461bcd60e51b81526004016104cb906127fe565b611aa88161186e565b6001600160a01b0382166000908152600760205260409020611ac9906118a9565b60008181526005602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600b54600090611b2f9060016118c3565b6000838152600c6020526040812054600b8054939450909284908110611b5157fe5b9060005260206000200154905080600b8381548110611b6c57fe5b6000918252602080832090910192909255828152600c90915260409020829055600b805480611b9757fe5b600190038181906000526020600020016000905590556000600c60008681526020019081526020016000208190555050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c0d57805160ff1916838001178555611c3a565b82800160010185558215611c3a579182015b82811115611c3a578251825591602001919060010190611c1f565b50611c46929150611c8a565b5090565b50805460018160011615610100020316600290046000825580601f10611c7057506107cd565b601f0160209004906000526020600020908101906107cd91905b5b80821115611c465760008155600101611c8b565b600082601f830112611caf578081fd5b813567ffffffffffffffff811115611cc5578182fd5b611cd8601f8201601f1916602001612961565b9150808252836020828501011115611cef57600080fd5b8060208401602084013760009082016020015292915050565b600060408284031215611d19578081fd5b611d236040612961565b90508135611d30816129d4565b808252506020820135602082015292915050565b600060208284031215611d55578081fd5b8135611d60816129d4565b9392505050565b60008060408385031215611d79578081fd5b8235611d84816129d4565b91506020830135611d94816129d4565b809150509250929050565b600080600060608486031215611db3578081fd5b8335611dbe816129d4565b92506020840135611dce816129d4565b929592945050506040919091013590565b60008060008060808587031215611df4578081fd5b8435611dff816129d4565b93506020850135611e0f816129d4565b925060408501359150606085013567ffffffffffffffff811115611e31578182fd5b611e3d87828801611c9f565b91505092959194509250565b60008060408385031215611e5b578182fd5b8235611e66816129d4565b915060208301358015158114611d94578182fd5b60008060408385031215611e8c578182fd5b8235611e97816129d4565b946020939093013593505050565b600060208284031215611eb6578081fd5b8135611d60816129e9565b600060208284031215611ed2578081fd5b8151611d60816129e9565b600060208284031215611eee578081fd5b813567ffffffffffffffff811115611f04578182fd5b610f0184828501611c9f565b600060208284031215611f21578081fd5b5035919050565b600080600060608486031215611f3c578283fd5b8335925060208085013567ffffffffffffffff80821115611f5b578485fd5b818701915087601f830112611f6e578485fd5b8135611f81611f7c82612988565b612961565b818152848101908486016040808502870188018d1015611f9f57898afd5b8996505b84871015611fcb57611fb58d83611d08565b8452600196909601959287019290810190611fa3565b919850508901359450505080831115611fe2578384fd5b5050611ff086828701611c9f565b9150509250925092565b6000806040838503121561200c578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b8381101561204a5781518752958201959082019060010161202e565b509495945050505050565b6000815180845261206d8160208601602086016129a8565b601f01601f19169290920160200192915050565b600082516120938184602087016129a8565b9190910192915050565b6001600160a01b0391909116815260200190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526120e36080830184612055565b9695505050505050565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156118625783516001600160a01b031683529284019291840191600101612122565b600060208252611d60602083018461201b565b901515815260200190565b600060208252611d606020830184612055565b6020808252601c908201527f4665652076616c75652073686f756c6420626520706f73697469766500000000604082015260600190565b6020808252602b908201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560408201527f74206f6620626f756e6473000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252602c908201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b6020808252602c908201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60408201527f7574206f6620626f756e64730000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f4552433732313a206275726e206f6620746f6b656e2074686174206973206e6f60408201527f74206f776e000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f526563697069656e742073686f756c642062652070726573656e740000000000604082015260600190565b60208082526030908201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000606082015260800190565b90815260200190565b60006060820185835260206060818501528186518084526080860191508288019350845b818110156129415784516001600160a01b03168352938301939183019160010161291c565b50508481036040860152612955818761201b565b98975050505050505050565b60405181810167ffffffffffffffff8111828210171561298057600080fd5b604052919050565b600067ffffffffffffffff82111561299e578081fd5b5060209081020190565b60005b838110156129c35781810151838201526020016129ab565b83811115610b685750506000910152565b6001600160a01b03811681146107cd57600080fd5b6001600160e01b0319811681146107cd57600080fdfea264697066735822122053c25d27358c1af2f6026984738f8d480e4965f5f0dc74f92ef8ed7a5f5e08b164736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "257:807:34:-:0;;;318:303;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;466:4;472:6;480:11;493:14;;480:11;884:17:38;904:12;:10;:12::i;:::-;926:6;:18;;-1:-1:-1;;926:18:38;-1:-1:-1;;;;;926:18:38;;;;;;;959:43;;-1:-1:-1;;926:18:38;;-1:-1:-1;926:18:38;;:6;;-1:-1:-1;;926:6:38;-1:-1:-1;;;;;959:43:38;926:6;;959:43;-1:-1:-1;730:40:14;-1:-1:-1;730:18:14;:40::i;:::-;478:38:19;-1:-1:-1;478:18:19;:38::i;:::-;321:26:18;;;;:11;;:26;;;;;:::i;:::-;-1:-1:-1;357:46:18;-1:-1:-1;357:18:18;:46::i;:::-;-1:-1:-1;344:32:20;;;;:14;;:32;;;;;:::i;:::-;-1:-1:-1;2338:40:15;;-1:-1:-1;;2338:18:15;:40::i;:::-;1369:51:17;-1:-1:-1;1369:18:17;:51::i;:::-;1382:12:16;;::::2;::::0;:4:::2;::::0;:12:::2;::::0;::::2;::::0;::::2;:::i;:::-;-1:-1:-1::0;1404:16:16;;::::2;::::0;:6:::2;::::0;:16:::2;::::0;::::2;::::0;::::2;:::i;:::-;-1:-1:-1::0;1508:49:16::2;-1:-1:-1::0;1508:18:16::2;:49::i;:::-;1193:371:::0;;;;519:58:34::1;545:30;519:18;;;:58;;:::i;:::-;587:27;605:8:::0;587:17:::1;:27::i;:::-;318:303:::0;;;;;257:807;;598:104:41;685:10;598:104;:::o;1463:190:14:-;-1:-1:-1;1538:25:14;;;;;1530:66;;;;-1:-1:-1;;;1530:66:14;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;1606:33:14;;;;;-1:-1:-1;1606:33:14;;;;;;;;:40;;-1:-1:-1;;1606:40:14;;;;;;1463:190::o;2011:240:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;-1:-1:-1;;;;;2099:22:38;::::1;2091:73;;;::::0;-1:-1:-1;;;2091:73:38;;::::1;::::0;::::1;;;:::i;:::-;2200:6;::::0;;2179:38:::1;::::0;-1:-1:-1;;;;;;;2179:38:38;;::::1;::::0;2200:6;::::1;::::0;;;;-1:-1:-1;;2200:6:38;-1:-1:-1;;;;;2179:38:38;::::1;2227:6;:17:::0;;-1:-1:-1;;2227:17:38::1;-1:-1:-1::0;;;;;2227:17:38;;;::::1;::::0;;;::::1;::::0;;2011:240::o;1085:85::-;1131:7;1157:6;-1:-1:-1;;;;;1157:6:38;;1085:85::o;257:807:34:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;257:807:34;;;-1:-1:-1;257:807:34;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;147:444:-1;;260:3;253:4;245:6;241:17;237:27;227:2;;-1:-1;;268:12;227:2;302:13;;-1:-1;4538:30;;;4535:2;;;-1:-1;;4571:12;4535:2;4204;4198:9;4712:4;-1:-1;;4644:9;4625:17;;4621:33;4230:17;;;;4326:22;;;4290:34;;;4287:62;4284:2;;;-1:-1;;4352:12;4284:2;4382:10;4204:2;4371:22;;321:74;;;415:6;408:5;401:21;519:3;4712:4;510:6;443;501:16;;498:25;495:2;;;536:1;;526:12;495:2;5198:1;5189:10;;5205:101;5219:6;5216:1;5213:13;5205:101;;;5286:11;;;;;5280:18;5267:11;;;;;5260:39;5234:10;;;;5205:101;;;5321:6;5318:1;5315:13;5312:2;;;5198:1;4712:4;5377:6;477:5;5368:16;;5361:27;5312:2;;;;;220:371;;;;:::o;599:1205::-;;;;;;822:3;810:9;801:7;797:23;793:33;790:2;;;-1:-1;;829:12;790:2;874:24;;-1:-1;907:30;;;904:2;;;-1:-1;;940:12;904:2;970:74;1036:7;1027:6;1016:9;1012:22;970:74;:::i;:::-;960:84;;1102:2;1091:9;1087:18;1081:25;1067:39;;918:18;1118:6;1115:30;1112:2;;;-1:-1;;1148:12;1112:2;1178:74;1244:7;1235:6;1224:9;1220:22;1178:74;:::i;:::-;1289:2;1339:22;;83:13;1168:84;;-1:-1;83:13;-1:-1;;;;;;5066:54;;5468:35;;5458:2;;-1:-1;;5507:12;5458:2;1429;1414:18;;1408:25;1297:74;;-1:-1;1442:30;;;1439:2;;;-1:-1;;1475:12;1439:2;1505:74;1571:7;1562:6;1551:9;1547:22;1505:74;:::i;:::-;1495:84;;1637:3;1626:9;1622:19;1616:26;1602:40;;918:18;1654:6;1651:30;1648:2;;;-1:-1;;1684:12;1648:2;;1714:74;1780:7;1771:6;1760:9;1756:22;1714:74;:::i;:::-;1704:84;;;784:1020;;;;;;;;:::o;2873:416::-;3073:2;3087:47;;;2036:2;3058:18;;;4838:19;2072:34;4878:14;;;2052:55;-1:-1;2127:12;;;2120:30;2169:12;;;3044:245::o;3296:416::-;3496:2;3510:47;;;2420:2;3481:18;;;4838:19;2456:30;4878:14;;;2436:51;2506:12;;;3467:245::o;3719:416::-;3919:2;3933:47;;;3904:18;;;4838:19;2793:34;4878:14;;;2773:55;2847:12;;;3890:245::o;:::-;257:807:34;;;;;;",
  "deployedSourceMap": "257:807:34:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;927:142:14;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;595:18:16;;;:::i;:::-;;;;;;;:::i;4401:209:15:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;3693:423::-;;;;;;:::i;:::-;;:::i;:::-;;1922:302:16;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;2192:103:17:-;;;:::i;:::-;;;;;;;:::i;6074:295:15:-;;;;;;:::i;:::-;;:::i;1801:238:17:-;;;;;;:::i;:::-;;:::i;7018:141:15:-;;;;;;:::i;:::-;;:::i;4337:233:16:-;;;;;;:::i;:::-;;:::i;2633:205:17:-;;;;;;:::i;:::-;;:::i;767:38:16:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;3032:240:15:-;;;;;;:::i;:::-;;:::i;2589:224::-;;;;;;:::i;:::-;;:::i;1717:145:38:-;;;:::i;1085:85::-;;;:::i;949:113:34:-;;;;;;:::i;:::-;;:::i;640:20:16:-;;;:::i;818:125:34:-;;;;;;:::i;:::-;;:::i;4903:258:15:-;;;;;;:::i;:::-;;:::i;7882:277::-;;;;;;:::i;:::-;;:::i;1570:346:16:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;631:181:34:-;;;;;;:::i;:::-;;:::i;158:28:20:-;;;:::i;3112:207:16:-;;;;;;:::i;:::-;;:::i;91:25:18:-;;;:::i;5483:154:15:-;;;;;;:::i;:::-;;:::i;2011:240:38:-;;;;;;:::i;:::-;;:::i;927:142:14:-;-1:-1:-1;;;;;;1029:33:14;1006:4;1029:33;;;-1:-1:-1;1029:33:14;;;;;;;;;927:142::o;595:18:16:-;;;;;;;;;;;;;;;-1:-1:-1;;595:18:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4401:209:15:-;4469:7;4496:16;4504:7;4496;:16::i;:::-;4488:73;;;;-1:-1:-1;;;4488:73:15;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;4579:24:15;;;;:15;:24;;;;;;-1:-1:-1;;;;;4579:24:15;;4401:209::o;3693:423::-;3764:13;3780:16;3788:7;3780;:16::i;:::-;3764:32;-1:-1:-1;;;;;;3814:11:15;;;;;;;;3806:57;;;;-1:-1:-1;;;3806:57:15;;;;;;;:::i;:::-;-1:-1:-1;;;;;3882:21:15;;:12;:10;:12::i;:::-;-1:-1:-1;;;;;3882:21:15;;;:62;;;3907:37;3924:5;3931:12;:10;:12::i;3907:37::-;3874:152;;;;-1:-1:-1;;;3874:152:15;;;;;;;:::i;:::-;4037:24;;;;:15;:24;;;;;;:29;;-1:-1:-1;;;;;;4037:29:15;-1:-1:-1;;;;;4037:29:15;;;;;;;;;4081:28;;4037:24;;4081:28;;;;;;;3693:423;;;:::o;1922:302:16:-;2029:8;;;;:4;:8;;;;;;;;2008:29;;;;;;;;;;;;;;;;;1983:13;;;;2008:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2008:29:16;;;-1:-1:-1;2008:29:16;;;;;;;;;;;;;;;;;;;;;;;;;2047:20;2081:5;:12;2070:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2070:24:16;;2047:47;;2109:6;2104:91;2125:5;:12;2121:1;:16;2104:91;;;2170:5;2176:1;2170:8;;;;;;;;;;;;;;:14;;;2158:6;2165:1;2158:9;;;;;;;;;;;;;;;;;:26;2139:3;;2104:91;;;-1:-1:-1;2211:6:16;1922:302;-1:-1:-1;;;1922:302:16:o;2192:103:17:-;2271:10;:17;2192:103;:::o;6074:295:15:-;6224:41;6243:12;:10;:12::i;:::-;6257:7;6224:18;:41::i;:::-;6216:103;;;;-1:-1:-1;;;6216:103:15;;;;;;;:::i;:::-;6330:32;6344:4;6350:2;6354:7;6330:13;:32::i;:::-;6074:295;;;:::o;1801:238:17:-;1890:7;1925:16;1935:5;1925:9;:16::i;:::-;1917:5;:24;1909:80;;;;-1:-1:-1;;;1909:80:17;;;;;;;:::i;:::-;-1:-1:-1;;;;;2006:19:17;;;;;;:12;:19;;;;;:26;;2026:5;;2006:26;;;;;;;;;;;;;;1999:33;;1801:238;;;;:::o;7018:141:15:-;7113:39;7130:4;7136:2;7140:7;7113:39;;;;;;;;;;;;:16;:39::i;4337:233:16:-;4445:41;4464:12;:10;:12::i;4445:41::-;4437:102;;;;-1:-1:-1;;;4437:102:16;;;;;;;:::i;:::-;4549:14;4555:7;4549:5;:14::i;:::-;4337:233;:::o;2633:205:17:-;2700:7;2735:13;:11;:13::i;:::-;2727:5;:21;2719:78;;;;-1:-1:-1;;;2719:78:17;;;;;;;:::i;:::-;2814:10;2825:5;2814:17;;;;;;;;;;;;;;;;2807:24;;2633:205;;;:::o;767:38:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;767:38:16;;;;-1:-1:-1;767:38:16;-1:-1:-1;767:38:16;:::o;3032:240:15:-;3104:7;3139:20;;;:11;:20;;;;;;-1:-1:-1;;;;;3139:20:15;;3169:73;;;;-1:-1:-1;;;3169:73:15;;;;;;;:::i;:::-;3260:5;3032:240;-1:-1:-1;;3032:240:15:o;2589:224::-;2661:7;-1:-1:-1;;;;;2688:19:15;;2680:74;;;;-1:-1:-1;;;2680:74:15;;;;;;;:::i;:::-;-1:-1:-1;;;;;2772:24:15;;;;;;:17;:24;;;;;:34;;:32;:34::i;1717:145:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;1823:1:::1;1807:6:::0;;1786:40:::1;::::0;-1:-1:-1;;;;;1807:6:38;;::::1;::::0;1786:40:::1;::::0;1823:1;;1786:40:::1;1853:1;1836:19:::0;;-1:-1:-1;;;;;;1836:19:38::1;::::0;;1717:145::o;1085:85::-;1131:7;1157:6;-1:-1:-1;;;;;1157:6:38;;1085:85::o;949:113:34:-;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;1027:28:34::1;1043:11;1027:15;:28::i;640:20:16:-:0;;;;;;;;;;;;;;;-1:-1:-1;;640:20:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;818:125:34;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;902:34:34::1;921:14;902:18;:34::i;4903:258:15:-:0;4997:12;:10;:12::i;:::-;-1:-1:-1;;;;;4991:18:15;;;;;;;4983:56;;;;-1:-1:-1;;;4983:56:15;;;;;;;:::i;:::-;5089:8;5050:18;:32;5069:12;:10;:12::i;:::-;-1:-1:-1;;;;;5050:32:15;;;;;;;;;;;;;;;;;-1:-1:-1;5050:32:15;;;:36;;;;;;;;;;;;:47;;-1:-1:-1;;5050:47:15;;;;;;;;;;;5127:12;:10;:12::i;:::-;-1:-1:-1;;;;;5112:42:15;;5145:8;5112:42;;;;;;:::i;:::-;;;;;;;;4903:258;;:::o;7882:277::-;8004:41;8023:12;:10;:12::i;:::-;8037:7;8004:18;:41::i;:::-;7996:103;;;;-1:-1:-1;;;7996:103:15;;;;;;;:::i;:::-;8109:43;8127:4;8133:2;8137:7;8146:5;8109:17;:43::i;:::-;7882:277;;;;:::o;1570:346:16:-;1695:8;;;;:4;:8;;;;;;;;1674:29;;;;;;;;;;;;;;;;;1638:24;;;;1674:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1674:29:16;;;-1:-1:-1;1674:29:16;;;;;;;;;;;;;;;;;;;;;;;;;1713:31;1769:5;:12;1747:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1747:35:16;;1713:69;;1797:6;1792:95;1813:5;:12;1809:1;:16;1792:95;;;1858:5;1864:1;1858:8;;;;;;;;;;;;;;:18;;;1846:6;1853:1;1846:9;;;;;;;;-1:-1:-1;;;;;1846:30:16;;;;:9;;;;;;;;;;;:30;-1:-1:-1;1827:3:16;1792:95;;631:181:34;731:33;737:10;749:7;758:5;731;:33::i;:::-;774:31;787:7;796:8;774:12;:31::i;158:28:20:-;;;;;;;;;;;;;;;-1:-1:-1;;158:28:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3112:207:16;3170:13;3203:16;3211:7;3203;:16::i;:::-;3195:76;;;;-1:-1:-1;;;3195:76:16;;;;;;;:::i;:::-;3288:24;3304:7;3288:15;:24::i;91:25:18:-;;;;;;;;;;;;;;-1:-1:-1;;91:25:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5483:154:15;-1:-1:-1;;;;;5595:25:15;;;5572:4;5595:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;5483:154::o;2011:240:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;-1:-1:-1;;;;;2099:22:38;::::1;2091:73;;;::::0;-1:-1:-1;;;2091:73:38;;::::1;::::0;::::1;;;:::i;:::-;2200:6;::::0;;2179:38:::1;::::0;-1:-1:-1;;;;;2179:38:38;;::::1;::::0;2200:6;::::1;::::0;2179:38:::1;::::0;::::1;2227:6;:17:::0;;-1:-1:-1;;;;;;2227:17:38::1;-1:-1:-1::0;;;;;2227:17:38;;;::::1;::::0;;;::::1;::::0;;2011:240::o;9328:152:15:-;9385:4;9417:20;;;:11;:20;;;;;;-1:-1:-1;;;;;9417:20:15;9454:19;;;9328:152::o;598:104:41:-;685:10;598:104;:::o;9841:329:15:-;9926:4;9950:16;9958:7;9950;:16::i;:::-;9942:73;;;;-1:-1:-1;;;9942:73:15;;;;;;;:::i;:::-;10025:13;10041:16;10049:7;10041;:16::i;:::-;10025:32;-1:-1:-1;;;;;;10075:16:15;;;;;;;;:51;;-1:-1:-1;;;;;;10095:31:15;;:20;10107:7;10095:11;:20::i;:::-;-1:-1:-1;;;;;10095:31:15;;10075:51;:87;;;;10130:32;10147:5;10154:7;10130:16;:32::i;:::-;10067:96;9841:329;-1:-1:-1;;;;9841:329:15:o;3213:248:17:-;3307:38;3327:4;3333:2;3337:7;3307:19;:38::i;:::-;3356:47;3389:4;3395:7;3356:32;:47::i;:::-;3414:40;3442:2;3446:7;3414:27;:40::i;12999:97:15:-;13057:32;13063:16;13071:7;13063;:16::i;:::-;13081:7;13057:5;:32::i;1106:112:42:-;1197:14;;1106:112::o;541:105:18:-;613:26;;;;:11;;:26;;;;;:::i;:::-;;541:105;:::o;1217:117:20:-;1295:32;;;;:14;;:32;;;;;:::i;8864:269:15:-;8973:32;8987:4;8993:2;8997:7;8973:13;:32::i;:::-;9023:48;9046:4;9052:2;9056:7;9065:5;9023:22;:48::i;:::-;9015:111;;;;-1:-1:-1;;;9015:111:15;;;;;;;:::i;2230:682:16:-;2313:18;2319:2;2323:7;2313:5;:18::i;:::-;2341:27;2385:5;:12;2371:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2371:27:16;;2341:57;;2408:17;2439:5;:12;2428:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2428:24:16;;2408:44;;2467:6;2462:340;2483:5;:12;2479:1;:16;2462:340;;;2524:8;;2554:3;;2524:5;;2530:1;;2524:8;;;;;;;;;;;;;;;;:18;-1:-1:-1;;;;;2524:34:16;;;2516:74;;;;-1:-1:-1;;;2516:74:16;;;;;;;:::i;:::-;2612:5;2618:1;2612:8;;;;;;;;;;;;;;:14;;;2630:1;2612:19;;2604:60;;;;-1:-1:-1;;;2604:60:16;;;;;;;:::i;:::-;2678:13;;;;:4;:13;;;;;2697:8;;:5;;2703:1;;2697:8;;;;;;;;;;;;;;;;;2678:28;;;;;;;;-1:-1:-1;2678:28:16;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;2678:28:16;-1:-1:-1;;;;;2678:28:16;;;;;;;;;;;;;;;2736:8;;;;2742:1;;2736:8;;;;;;;;;;;;:18;;;2720:10;2731:1;2720:13;;;;;;;;-1:-1:-1;;;;;2720:34:16;;;:13;;;;;;;;;;;:34;2777:8;;:5;;2783:1;;2777:8;;;;;;;;;;;;:14;;;2768:3;2772:1;2768:6;;;;;;;;;;;;;;;;;:23;2497:3;;2462:340;;;-1:-1:-1;2815:12:16;;:16;2811:95;;2852:43;2870:7;2879:10;2891:3;2852:43;;;;;;;;:::i;:::-;;;;;;;;2811:95;2230:682;;;;;:::o;3558:208::-;3652:16;3660:7;3652;:16::i;:::-;3644:73;;;;-1:-1:-1;;;3644:73:16;;;;;;;:::i;:::-;3727:32;3746:7;3755:3;3727:18;:32::i;583:140:20:-;696:19;;;;:10;:19;;;;;;;;;674:42;;;;;;;;;;;-1:-1:-1;;674:42:20;;;;;;;;;;;;;;;;;;;;;;;;;;642:13;;674:42;;;;696:19;674:42;;696:19;674:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;674:14:20;:21;;;;;;;;;;;;;-1:-1:-1;;674:21:20;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;674:14:20;;-1:-1:-1;674:21:20;;-1:-1:-1;674:21:20;;:14;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:42;;;;:::i;13473:455:15:-;-1:-1:-1;;;;;13574:24:15;;:16;13582:7;13574;:16::i;:::-;-1:-1:-1;;;;;13574:24:15;;13566:78;;;;-1:-1:-1;;;13566:78:15;;;;;;;:::i;:::-;-1:-1:-1;;;;;13662:16:15;;13654:65;;;;-1:-1:-1;;;13654:65:15;;;;;;;:::i;:::-;13730:23;13745:7;13730:14;:23::i;:::-;-1:-1:-1;;;;;13764:23:15;;;;;;:17;:23;;;;;:35;;:33;:35::i;:::-;-1:-1:-1;;;;;13809:21:15;;;;;;:17;:21;;;;;:33;;:31;:33::i;:::-;13853:20;;;;:11;:20;;;;;;:25;;-1:-1:-1;;;;;;13853:25:15;-1:-1:-1;;;;;13853:25:15;;;;;;;;;13894:27;;13853:20;;13894:27;;;;;;;13473:455;;;:::o;6356:1125:17:-;-1:-1:-1;;;;;6643:18:17;;6618:22;6643:18;;;:12;:18;;;;;:25;:32;;-1:-1:-1;6643:29:17;:32::i;:::-;6685:18;6706:26;;;:17;:26;;;;;;6618:57;;-1:-1:-1;6836:28:17;;;6832:323;;-1:-1:-1;;;;;6902:18:17;;6880:19;6902:18;;;:12;:18;;;;;:34;;6921:14;;6902:34;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6951:18:17;;;;:12;:18;;;;;;;:30;;6902:34;;-1:-1:-1;6902:34:17;;6970:10;;6951:30;;;;;;;;;;;;;;;;;:44;;;;7067:30;;;:17;:30;;;;;:43;;;6832:323;-1:-1:-1;;;;;7241:18:17;;;;;;:12;:18;;;;;:24;;;;;;;;;;;;;;;;;;;;;;;;6356:1125;;;;:::o;5200:183::-;-1:-1:-1;;;;;5313:16:17;;;;;;;;:12;:16;;;;;;;;:23;;5284:26;;;:17;:26;;;;;:52;;;5346:16;;;-1:-1:-1;5346:30:17;;;;;;;;;;;;5200:183::o;4059:142:16:-;4134:27;4146:5;4153:7;4134:11;:27::i;:::-;4171:23;4186:7;4171:14;:23::i;14567:1051:15:-;14688:4;14713:15;-1:-1:-1;;;;;14713:13:15;;;:15::i;:::-;14708:58;;-1:-1:-1;14751:4:15;14744:11;;14708:58;14835:12;14849:23;-1:-1:-1;;;;;14876:7:15;;-1:-1:-1;;;14979:12:15;:10;:12::i;:::-;15005:4;15023:7;15044:5;14884:175;;;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;14884:175:15;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;14884:175:15;;;;;;;;;;;14876:184;;;;14884:175;14876:184;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14834:226;;;;15075:7;15070:542;;15102:17;;:21;15098:376;;15267:10;15261:17;15327:15;15314:10;15310:2;15306:19;15299:44;15216:145;15399:60;;-1:-1:-1;;;15399:60:15;;;;;;;:::i;15070:542::-;15504:13;15531:10;15520:32;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;15574:26:15;-1:-1:-1;;;15574:26:15;;-1:-1:-1;15566:35:15;;-1:-1:-1;;;15566:35:15;3718:204:17;3789:24;3801:2;3805:7;3789:11;:24::i;:::-;3824:40;3852:2;3856:7;3824:27;:40::i;:::-;3875;3907:7;3875:31;:40::i;962:116:20:-;1046:19;;;;:10;:19;;;;;;;;:25;;;;;;;;:::i;782:414:31:-;1000:10;;987;;857:13;;907:2;;945;;857:13;;987:23;977:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;977:34:31;;958:53;;1021:6;1046;1041:55;1062:3;:10;1058:1;:14;1041:55;;;1090:3;1094:1;1090:6;;;;;;;;;;;;;;;;1079:3;1083;;;;;;1079:8;;;;;;;;;;;:17;;;;;;;;;;-1:-1:-1;1074:3:31;;1041:55;;;;1111:6;1106:55;1127:3;:10;1123:1;:14;1106:55;;;1155:3;1159:1;1155:6;;;;;;;;;;;;;;;;1144:3;1148;;;;;;1144:8;;;;;;;;;;;:17;;;;;;;;;;-1:-1:-1;1139:3:31;;1106:55;;;-1:-1:-1;1185:3:31;;782:414;-1:-1:-1;;;;;;782:414:31:o;15780:171:15:-;15879:1;15843:24;;;:15;:24;;;;;;-1:-1:-1;;;;;15843:24:15;:38;15839:106;;15932:1;15897:24;;;:15;:24;;;;;:37;;-1:-1:-1;;;;;;15897:37:15;;;15780:171::o;1408:108:42:-;1488:14;;:21;;1507:1;1488:18;:21::i;:::-;1471:38;;1408:108::o;1224:178::-;1376:19;;1394:1;1376:19;;;1224:178::o;3136:155:39:-;3194:7;3226:1;3221;:6;;3213:49;;;;-1:-1:-1;;;3213:49:39;;;;;;;:::i;:::-;-1:-1:-1;3279:5:39;;;3136:155::o;4197:380:17:-;4279:27;4291:5;4298:7;4279:11;:27::i;:::-;4317:48;4350:5;4357:7;4317:32;:48::i;:::-;4513:1;4484:26;;;:17;:26;;;;;:30;4525:45;4502:7;4525:36;:45::i;1340:161:20:-;1410:19;;;;:10;:19;;;;;1404:33;;;;;;;;-1:-1:-1;;1404:33:20;;;;;:38;1400:95;;1465:19;;;;:10;:19;;;;;1458:26;;;:::i;726:413:40:-;1086:20;1124:8;;;726:413::o;11884:335:15:-;-1:-1:-1;;;;;11963:16:15;;11955:61;;;;-1:-1:-1;;;11955:61:15;;;;;;;:::i;:::-;12035:16;12043:7;12035;:16::i;:::-;12034:17;12026:58;;;;-1:-1:-1;;;12026:58:15;;;;;;;:::i;:::-;12095:20;;;;:11;:20;;;;;;;;:25;;-1:-1:-1;;;;;;12095:25:15;-1:-1:-1;;;;;12095:25:15;;;;;;;;12130:21;;:17;:21;;;;;:33;;:31;:33::i;:::-;12179;;12204:7;;-1:-1:-1;;;;;12179:33:15;;;12196:1;;12179:33;;12196:1;;12179:33;11884:335;;:::o;5578:161:17:-;5681:10;:17;;5654:24;;;;:15;:24;;;;;:44;;;5708:24;;;;;;;;;;;;5578:161::o;12487:331:15:-;-1:-1:-1;;;;;12568:25:15;;:16;12576:7;12568;:16::i;:::-;-1:-1:-1;;;;;12568:25:15;;12560:75;;;;-1:-1:-1;;;12560:75:15;;;;;;;:::i;:::-;12646:23;12661:7;12646:14;:23::i;:::-;-1:-1:-1;;;;;12680:24:15;;;;;;:17;:24;;;;;:36;;:34;:36::i;:::-;12757:1;12726:20;;;:11;:20;;;;;;:33;;-1:-1:-1;;;;;;12726:33:15;;;12775:36;12726:20;;12757:1;-1:-1:-1;;;;;12775:36:15;;;;;12757:1;;12775:36;12487:331;;:::o;7769:1061:17:-;8043:10;:17;8018:22;;8043:24;;8065:1;8043:21;:24::i;:::-;8077:18;8098:24;;;:15;:24;;;;;;8466:10;:26;;8018:49;;-1:-1:-1;8098:24:17;;8018:49;;8466:26;;;;;;;;;;;;;;8444:48;;8528:11;8503:10;8514;8503:22;;;;;;;;;;;;;;;;;;;:36;;;;8607:28;;;:15;:28;;;;;;:41;;;8769:10;:16;;;;;;;;;;;;;;;;;;;;;;;;8822:1;8795:15;:24;8811:7;8795:24;;;;;;;;;;;:28;;;;7769:1061;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1511:440;;1612:3;1605:4;1597:6;1593:17;1589:27;1579:2;;-1:-1;;1620:12;1579:2;1667:6;1654:20;36406:18;36398:6;36395:30;36392:2;;;-1:-1;;36428:12;36392:2;1689:64;36569:4;-1:-1;;36501:9;36482:17;;36478:33;36559:15;1689:64;:::i;:::-;1680:73;;1773:6;1766:5;1759:21;1877:3;36569:4;1868:6;1801;1859:16;;1856:25;1853:2;;;1894:1;;1884:12;1853:2;40253:6;36569:4;1801:6;1797:17;36569:4;1835:5;1831:16;40230:30;40309:1;40291:16;;;36569:4;40291:16;40284:27;1835:5;1572:379;-1:-1;;1572:379::o;2438:477::-;;2548:4;2536:9;2531:3;2527:19;2523:30;2520:2;;;-1:-1;;2556:12;2520:2;2584:20;2548:4;2584:20;:::i;:::-;2575:29;;230:6;217:20;242:41;277:5;242:41;:::i;:::-;2691:57;2673:16;2666:83;;2811:2;2869:9;2865:22;2989:20;2811:2;2830:5;2826:16;2819:75;2514:401;;;;:::o;3059:241::-;;3163:2;3151:9;3142:7;3138:23;3134:32;3131:2;;;-1:-1;;3169:12;3131:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;3221:63;3125:175;-1:-1;;;3125:175::o;3307:366::-;;;3428:2;3416:9;3407:7;3403:23;3399:32;3396:2;;;-1:-1;;3434:12;3396:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;3486:63;-1:-1;3586:2;3625:22;;72:20;97:33;72:20;97:33;:::i;:::-;3594:63;;;;3390:283;;;;;:::o;3680:491::-;;;;3818:2;3806:9;3797:7;3793:23;3789:32;3786:2;;;-1:-1;;3824:12;3786:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;3876:63;-1:-1;3976:2;4015:22;;72:20;97:33;72:20;97:33;:::i;:::-;3780:391;;3984:63;;-1:-1;;;4084:2;4123:22;;;;2989:20;;3780:391::o;4178:721::-;;;;;4342:3;4330:9;4321:7;4317:23;4313:33;4310:2;;;-1:-1;;4349:12;4310:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;4401:63;-1:-1;4501:2;4540:22;;72:20;97:33;72:20;97:33;:::i;:::-;4509:63;-1:-1;4609:2;4648:22;;2989:20;;-1:-1;4745:2;4730:18;;4717:32;4769:18;4758:30;;4755:2;;;-1:-1;;4791:12;4755:2;4821:62;4875:7;4866:6;4855:9;4851:22;4821:62;:::i;:::-;4811:72;;;4304:595;;;;;;;:::o;4906:360::-;;;5024:2;5012:9;5003:7;4999:23;4995:32;4992:2;;;-1:-1;;5030:12;4992:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;5082:63;-1:-1;5182:2;5218:22;;1169:20;39787:13;;39780:21;41027:32;;41017:2;;-1:-1;;41063:12;5273:366;;;5394:2;5382:9;5373:7;5369:23;5365:32;5362:2;;;-1:-1;;5400:12;5362:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;5452:63;5552:2;5591:22;;;;2989:20;;-1:-1;;;5356:283::o;5646:239::-;;5749:2;5737:9;5728:7;5724:23;5720:32;5717:2;;;-1:-1;;5755:12;5717:2;1315:6;1302:20;1327:32;1353:5;1327:32;:::i;5892:261::-;;6006:2;5994:9;5985:7;5981:23;5977:32;5974:2;;;-1:-1;;6012:12;5974:2;1454:6;1448:13;1466:32;1492:5;1466:32;:::i;6160:347::-;;6274:2;6262:9;6253:7;6249:23;6245:32;6242:2;;;-1:-1;;6280:12;6242:2;6338:17;6325:31;6376:18;6368:6;6365:30;6362:2;;;-1:-1;;6398:12;6362:2;6428:63;6483:7;6474:6;6463:9;6459:22;6428:63;:::i;6514:241::-;;6618:2;6606:9;6597:7;6593:23;6589:32;6586:2;;;-1:-1;;6624:12;6586:2;-1:-1;2989:20;;6580:175;-1:-1;6580:175::o;6762:775::-;;;;6956:2;6944:9;6935:7;6931:23;6927:32;6924:2;;;-1:-1;;6962:12;6924:2;3002:6;2989:20;7014:63;;7142:2;;7131:9;7127:18;7114:32;7166:18;;7158:6;7155:30;7152:2;;;-1:-1;;7188:12;7152:2;7300:6;7289:9;7285:22;;;465:3;458:4;450:6;446:17;442:27;432:2;;-1:-1;;473:12;432:2;520:6;507:20;542:101;557:85;635:6;557:85;:::i;:::-;542:101;:::i;:::-;671:21;;;728:14;;;;703:17;;;829:4;817:17;;;808:27;;;;805:36;-1:-1;802:2;;;-1:-1;;844:12;802:2;-1:-1;870:10;;864:227;889:6;886:1;883:13;864:227;;;969:58;1023:3;1011:10;969:58;:::i;:::-;957:71;;911:1;904:9;;;;;1042:14;;;;1070;;;;864:227;;;7208:109;;-1:-1;;7367:18;;7354:32;;-1:-1;;;7395:30;;;7392:2;;;-1:-1;;7428:12;7392:2;;;7458:63;7513:7;7504:6;7493:9;7489:22;7458:63;:::i;:::-;7448:73;;;6918:619;;;;;:::o;7544:366::-;;;7665:2;7653:9;7644:7;7640:23;7636:32;7633:2;;;-1:-1;;7671:12;7633:2;-1:-1;;2989:20;;;7823:2;7862:22;;;2989:20;;-1:-1;7627:283::o;10572:690::-;;10765:5;37505:12;38583:6;38578:3;38571:19;38620:4;;38615:3;38611:14;10777:93;;38620:4;10941:5;37035:14;-1:-1;10980:260;11005:6;11002:1;10999:13;10980:260;;;11066:13;;21493:37;;8467:14;;;;38188;;;;11027:1;11020:9;10980:260;;;-1:-1;11246:10;;10696:566;-1:-1;;;;;10696:566::o;11381:343::-;;11523:5;37505:12;38583:6;38578:3;38571:19;11616:52;11661:6;38620:4;38615:3;38611:14;38620:4;11642:5;11638:16;11616:52;:::i;:::-;36501:9;40670:14;-1:-1;;40666:28;11680:39;;;;38620:4;11680:39;;11471:253;-1:-1;;11471:253::o;21662:271::-;;11891:5;37505:12;12002:52;12047:6;12042:3;12035:4;12028:5;12024:16;12002:52;:::i;:::-;12066:16;;;;;21796:137;-1:-1;;21796:137::o;21940:222::-;-1:-1;;;;;40026:54;;;;8572:45;;22067:2;22052:18;;22038:124::o;22169:672::-;-1:-1;;;;;40026:54;;;8572:45;;40026:54;;22595:2;22580:18;;8572:45;22678:2;22663:18;;21493:37;;;22414:3;22715:2;22700:18;;22693:48;;;22169:672;;22755:76;;22399:19;;22817:6;22755:76;:::i;:::-;22747:84;22385:456;-1:-1;;;;;;22385:456::o;22848:365::-;-1:-1;;;;;40026:54;;;;8572:45;;23199:2;23184:18;;21493:37;23019:2;23004:18;;22990:223::o;23220:402::-;23413:2;23427:47;;;37505:12;;23398:18;;;38571:19;;;23220:402;;23413:2;37035:14;;;;38611;;;;23220:402;10227:284;10252:6;10249:1;10246:13;10227:284;;;10313:13;;-1:-1;;;;;40026:54;8572:45;;38188:14;;;;8103;;;;-1:-1;10267:9;10227:284;;23629:370;;23806:2;23827:17;23820:47;23881:108;23806:2;23795:9;23791:18;23975:6;23881:108;:::i;24006:210::-;39787:13;;39780:21;11335:34;;24127:2;24112:18;;24098:118::o;24223:310::-;;24370:2;24391:17;24384:47;24445:78;24370:2;24359:9;24355:18;24509:6;24445:78;:::i;24540:416::-;24740:2;24754:47;;;12673:2;24725:18;;;38571:19;12709:30;38611:14;;;12689:51;12759:12;;;24711:245::o;24963:416::-;25163:2;25177:47;;;13010:2;25148:18;;;38571:19;13046:34;38611:14;;;13026:55;13115:13;13101:12;;;13094:35;13148:12;;;25134:245::o;25386:416::-;25586:2;25600:47;;;13399:2;25571:18;;;38571:19;13435:34;38611:14;;;13415:55;13504:20;13490:12;;;13483:42;13544:12;;;25557:245::o;25809:416::-;26009:2;26023:47;;;13795:2;25994:18;;;38571:19;13831:34;38611:14;;;13811:55;13900:8;13886:12;;;13879:30;13928:12;;;25980:245::o;26232:416::-;26432:2;26446:47;;;14179:2;26417:18;;;38571:19;14215:30;38611:14;;;14195:51;14265:12;;;26403:245::o;26655:416::-;26855:2;26869:47;;;14516:2;26840:18;;;38571:19;14552:34;38611:14;;;14532:55;14621:6;14607:12;;;14600:28;14647:12;;;26826:245::o;27078:416::-;27278:2;27292:47;;;14898:2;27263:18;;;38571:19;14934:27;38611:14;;;14914:48;14981:12;;;27249:245::o;27501:416::-;27701:2;27715:47;;;15232:2;27686:18;;;38571:19;15268:32;38611:14;;;15248:53;15320:12;;;27672:245::o;27924:416::-;28124:2;28138:47;;;15571:2;28109:18;;;38571:19;15607:34;38611:14;;;15587:55;-1:-1;;;15662:12;;;15655:36;15710:12;;;28095:245::o;28347:416::-;28547:2;28561:47;;;15961:2;28532:18;;;38571:19;15997:34;38611:14;;;15977:55;16066:26;16052:12;;;16045:48;16112:12;;;28518:245::o;28770:416::-;28970:2;28984:47;;;16363:2;28955:18;;;38571:19;16399:34;38611:14;;;16379:55;16468:12;16454;;;16447:34;16500:12;;;28941:245::o;29193:416::-;29393:2;29407:47;;;16751:2;29378:18;;;38571:19;16787:34;38611:14;;;16767:55;16856:11;16842:12;;;16835:33;16887:12;;;29364:245::o;29616:416::-;29816:2;29830:47;;;29801:18;;;38571:19;17174:34;38611:14;;;17154:55;17228:12;;;29787:245::o;30039:416::-;30239:2;30253:47;;;17479:2;30224:18;;;38571:19;17515:34;38611:14;;;17495:55;-1:-1;;;17570:12;;;17563:36;17618:12;;;30210:245::o;30462:416::-;30662:2;30676:47;;;17869:2;30647:18;;;38571:19;17905:34;38611:14;;;17885:55;-1:-1;;;17960:12;;;17953:36;18008:12;;;30633:245::o;30885:416::-;31085:2;31099:47;;;31070:18;;;38571:19;18295:34;38611:14;;;18275:55;18349:12;;;31056:245::o;31308:416::-;31508:2;31522:47;;;18600:2;31493:18;;;38571:19;18636:34;38611:14;;;18616:55;18705:11;18691:12;;;18684:33;18736:12;;;31479:245::o;31731:416::-;31931:2;31945:47;;;18987:2;31916:18;;;38571:19;19023:34;38611:14;;;19003:55;19092:17;19078:12;;;19071:39;19129:12;;;31902:245::o;32154:416::-;32354:2;32368:47;;;19380:2;32339:18;;;38571:19;19416:34;38611:14;;;19396:55;19485:3;19471:12;;;19464:25;19508:12;;;32325:245::o;32577:416::-;32777:2;32791:47;;;19759:2;32762:18;;;38571:19;19795:34;38611:14;;;19775:55;19864:19;19850:12;;;19843:41;19903:12;;;32748:245::o;33000:416::-;33200:2;33214:47;;;20154:2;33185:18;;;38571:19;20190:34;38611:14;;;20170:55;20259:14;20245:12;;;20238:36;20293:12;;;33171:245::o;33423:416::-;33623:2;33637:47;;;20544:2;33608:18;;;38571:19;20580:34;38611:14;;;20560:55;20649:7;20635:12;;;20628:29;20676:12;;;33594:245::o;33846:416::-;34046:2;34060:47;;;20927:2;34031:18;;;38571:19;20963:29;38611:14;;;20943:50;21012:12;;;34017:245::o;34269:416::-;34469:2;34483:47;;;21263:2;34454:18;;;38571:19;21299:34;38611:14;;;21279:55;21368:18;21354:12;;;21347:40;21406:12;;;34440:245::o;34692:222::-;21493:37;;;34819:2;34804:18;;34790:124::o;34921:740::-;;35204:2;35193:9;35189:18;21523:5;21500:3;21493:37;35322:2;35204;35322;35311:9;35307:18;35300:48;35362:108;9227:5;37505:12;38583:6;38578:3;38571:19;38611:14;35193:9;38611:14;9239:93;;35322:2;9403:5;37035:14;9415:21;;-1:-1;9442:260;9467:6;9464:1;9461:13;9442:260;;;9528:13;;-1:-1;;;;;40026:54;8572:45;;38188:14;;;;8285;;;;-1:-1;9482:9;9442:260;;;9446:14;;35518:9;35512:4;35508:20;35503:2;35492:9;35488:18;35481:48;35543:108;35646:4;35637:6;35543:108;:::i;:::-;35535:116;35175:486;-1:-1;;;;;;;;35175:486::o;35668:256::-;35730:2;35724:9;35756:17;;;35831:18;35816:34;;35852:22;;;35813:62;35810:2;;;35888:1;;35878:12;35810:2;35730;35897:22;35708:216;;-1:-1;35708:216::o;35931:325::-;;36111:18;36103:6;36100:30;36097:2;;;-1:-1;;36133:12;36097:2;-1:-1;36178:4;36166:17;;;36231:15;;36034:222::o;40326:268::-;40391:1;40398:101;40412:6;40409:1;40406:13;40398:101;;;40479:11;;;40473:18;40460:11;;;40453:39;40434:2;40427:10;40398:101;;;40514:6;40511:1;40508:13;40505:2;;;-1:-1;;40391:1;40561:16;;40554:27;40375:219::o;40707:117::-;-1:-1;;;;;40026:54;;40766:35;;40756:2;;40815:1;;40805:12;41089:115;-1:-1;;;;;;39874:78;;41147:34;;41137:2;;41195:1;;41185:12",
  "source": "pragma solidity ^0.6.12;\npragma experimental ABIEncoderV2;\n\nimport \"../lib/interface/IERC721.sol\";\nimport \"../lib/contracts/ERC721Base.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\n\n/**\n * @title DavinciToken\n * @dev anyone can mint token.\n */\ncontract DavinciToken is Ownable, IERC721, ERC721Base {\n\n    constructor (string memory name, string memory symbol, address newOwner, string memory contractURI, string memory tokenURIPrefix) public ERC721Base(name, symbol, contractURI, tokenURIPrefix) {\n        _registerInterface(bytes4(keccak256('MINT_WITH_ADDRESS')));\n        transferOwnership(newOwner);\n    }\n    \n    function mint(uint256 tokenId, Fee[] memory _fees, string memory tokenURI) public {        \n        _mint(msg.sender, tokenId, _fees);\n        _setTokenURI(tokenId, tokenURI);\n    }\n\n    function setTokenURIPrefix(string memory tokenURIPrefix) public onlyOwner {\n        _setTokenURIPrefix(tokenURIPrefix);\n    }\n\n    function setContractURI(string memory contractURI) public onlyOwner {\n        _setContractURI(contractURI);\n    }\n}",
  "sourcePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciToken.sol",
  "ast": {
    "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciToken.sol",
    "exportedSymbols": {
      "DavinciToken": [
        5778
      ]
    },
    "id": 5779,
    "license": null,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5686,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".12"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "id": 5687,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "25:33:34"
      },
      {
        "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC721.sol",
        "file": "../lib/interface/IERC721.sol",
        "id": 5688,
        "nodeType": "ImportDirective",
        "scope": 5779,
        "sourceUnit": 4511,
        "src": "60:38:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC721Base.sol",
        "file": "../lib/contracts/ERC721Base.sol",
        "id": 5689,
        "nodeType": "ImportDirective",
        "scope": 5779,
        "sourceUnit": 3695,
        "src": "99:41:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 5690,
        "nodeType": "ImportDirective",
        "scope": 5779,
        "sourceUnit": 6155,
        "src": "141:52:34",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5692,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6154,
              "src": "282:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$6154",
                "typeString": "contract Ownable"
              }
            },
            "id": 5693,
            "nodeType": "InheritanceSpecifier",
            "src": "282:7:34"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5694,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4510,
              "src": "291:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$4510",
                "typeString": "contract IERC721"
              }
            },
            "id": 5695,
            "nodeType": "InheritanceSpecifier",
            "src": "291:7:34"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5696,
              "name": "ERC721Base",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3694,
              "src": "300:10:34",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Base_$3694",
                "typeString": "contract ERC721Base"
              }
            },
            "id": 5697,
            "nodeType": "InheritanceSpecifier",
            "src": "300:10:34"
          }
        ],
        "contractDependencies": [
          2609,
          3322,
          3694,
          4053,
          4089,
          4132,
          4219,
          4402,
          4510,
          4538,
          6154,
          6828
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 5691,
          "nodeType": "StructuredDocumentation",
          "src": "195:61:34",
          "text": " @title DavinciToken\n @dev anyone can mint token."
        },
        "fullyImplemented": true,
        "id": 5778,
        "linearizedBaseContracts": [
          5778,
          3694,
          4053,
          4538,
          3322,
          4510,
          4219,
          4089,
          4132,
          2609,
          4402,
          6154,
          6828
        ],
        "name": "DavinciToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 5729,
              "nodeType": "Block",
              "src": "509:112:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "4d494e545f574954485f41444452455353",
                                "id": 5720,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "555:19:34",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                  "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                },
                                "value": "MINT_WITH_ADDRESS"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                  "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                }
                              ],
                              "id": 5719,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "545:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 5721,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "545:30:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 5718,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "538:6:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes4_$",
                            "typeString": "type(bytes4)"
                          },
                          "typeName": {
                            "id": 5717,
                            "name": "bytes4",
                            "nodeType": "ElementaryTypeName",
                            "src": "538:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 5722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "538:38:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 5716,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2608,
                      "src": "519:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 5723,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "519:58:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5724,
                  "nodeType": "ExpressionStatement",
                  "src": "519:58:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5726,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5703,
                        "src": "605:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5725,
                      "name": "transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6153,
                      "src": "587:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "587:27:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5728,
                  "nodeType": "ExpressionStatement",
                  "src": "587:27:34"
                }
              ]
            },
            "documentation": null,
            "id": 5730,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 5710,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5699,
                    "src": "466:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 5711,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5701,
                    "src": "472:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 5712,
                    "name": "contractURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5705,
                    "src": "480:11:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 5713,
                    "name": "tokenURIPrefix",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5707,
                    "src": "493:14:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 5714,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5709,
                  "name": "ERC721Base",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 3694,
                  "src": "455:10:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Base_$3694_$",
                    "typeString": "type(contract ERC721Base)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "455:53:34"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5708,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5699,
                  "mutability": "mutable",
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5730,
                  "src": "331:18:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5698,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5701,
                  "mutability": "mutable",
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5730,
                  "src": "351:20:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5700,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5703,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5730,
                  "src": "373:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5702,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:34",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5705,
                  "mutability": "mutable",
                  "name": "contractURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5730,
                  "src": "391:25:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5704,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5707,
                  "mutability": "mutable",
                  "name": "tokenURIPrefix",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5730,
                  "src": "418:28:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5706,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "418:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "330:117:34"
            },
            "returnParameters": {
              "id": 5715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "509:0:34"
            },
            "scope": 5778,
            "src": "318:303:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5752,
              "nodeType": "Block",
              "src": "713:99:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5741,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "737:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5742,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "737:10:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5743,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5732,
                        "src": "749:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5744,
                        "name": "_fees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5735,
                        "src": "758:5:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Fee_$3347_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct ERC721Base.Fee memory[] memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_array$_t_struct$_Fee_$3347_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct ERC721Base.Fee memory[] memory"
                        }
                      ],
                      "id": 5740,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3607,
                        3853
                      ],
                      "referencedDeclaration": 3607,
                      "src": "731:5:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_array$_t_struct$_Fee_$3347_memory_ptr_$dyn_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,struct ERC721Base.Fee memory[] memory)"
                      }
                    },
                    "id": 5745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "731:33:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5746,
                  "nodeType": "ExpressionStatement",
                  "src": "731:33:34"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5748,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5732,
                        "src": "787:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5749,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5737,
                        "src": "796:8:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5747,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3652
                      ],
                      "referencedDeclaration": 3652,
                      "src": "774:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 5750,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "774:31:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5751,
                  "nodeType": "ExpressionStatement",
                  "src": "774:31:34"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "bd442c3b",
            "id": 5753,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5732,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5753,
                  "src": "645:15:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "645:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5735,
                  "mutability": "mutable",
                  "name": "_fees",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5753,
                  "src": "662:18:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Fee_$3347_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct ERC721Base.Fee[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 5733,
                      "name": "Fee",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 3347,
                      "src": "662:3:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fee_$3347_storage_ptr",
                        "typeString": "struct ERC721Base.Fee"
                      }
                    },
                    "id": 5734,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "662:5:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Fee_$3347_storage_$dyn_storage_ptr",
                      "typeString": "struct ERC721Base.Fee[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5737,
                  "mutability": "mutable",
                  "name": "tokenURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5753,
                  "src": "682:22:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5736,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "682:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "644:61:34"
            },
            "returnParameters": {
              "id": 5739,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:34"
            },
            "scope": 5778,
            "src": "631:181:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5764,
              "nodeType": "Block",
              "src": "892:51:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5761,
                        "name": "tokenURIPrefix",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5755,
                        "src": "921:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5760,
                      "name": "_setTokenURIPrefix",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4196,
                      "src": "902:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 5762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "902:34:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5763,
                  "nodeType": "ExpressionStatement",
                  "src": "902:34:34"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "99e0dd7c",
            "id": 5765,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 5758,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5757,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6103,
                  "src": "882:9:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "882:9:34"
              }
            ],
            "name": "setTokenURIPrefix",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5755,
                  "mutability": "mutable",
                  "name": "tokenURIPrefix",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5765,
                  "src": "845:28:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5754,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "844:30:34"
            },
            "returnParameters": {
              "id": 5759,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:34"
            },
            "scope": 5778,
            "src": "818:125:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5776,
              "nodeType": "Block",
              "src": "1017:45:34",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5773,
                        "name": "contractURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5767,
                        "src": "1043:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5772,
                      "name": "_setContractURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4088,
                      "src": "1027:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 5774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1027:28:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5775,
                  "nodeType": "ExpressionStatement",
                  "src": "1027:28:34"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "938e3d7b",
            "id": 5777,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 5770,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5769,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6103,
                  "src": "1007:9:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1007:9:34"
              }
            ],
            "name": "setContractURI",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5767,
                  "mutability": "mutable",
                  "name": "contractURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5777,
                  "src": "973:25:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5766,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:27:34"
            },
            "returnParameters": {
              "id": 5771,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1017:0:34"
            },
            "scope": 5778,
            "src": "949:113:34",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 5779,
        "src": "257:807:34"
      }
    ],
    "src": "0:1064:34"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciToken.sol",
      "exportedSymbols": {
        "DavinciToken": [
          5778
        ]
      },
      "license": null
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".12"
          ]
        },
        "id": 5686,
        "name": "PragmaDirective",
        "src": "0:24:34"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 5687,
        "name": "PragmaDirective",
        "src": "25:33:34"
      },
      {
        "attributes": {
          "SourceUnit": 4511,
          "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC721.sol",
          "file": "../lib/interface/IERC721.sol",
          "scope": 5779,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5688,
        "name": "ImportDirective",
        "src": "60:38:34"
      },
      {
        "attributes": {
          "SourceUnit": 3695,
          "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC721Base.sol",
          "file": "../lib/contracts/ERC721Base.sol",
          "scope": 5779,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5689,
        "name": "ImportDirective",
        "src": "99:41:34"
      },
      {
        "attributes": {
          "SourceUnit": 6155,
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "scope": 5779,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5690,
        "name": "ImportDirective",
        "src": "141:52:34"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            2609,
            3322,
            3694,
            4053,
            4089,
            4132,
            4219,
            4402,
            4510,
            4538,
            6154,
            6828
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5778,
            3694,
            4053,
            4538,
            3322,
            4510,
            4219,
            4089,
            4132,
            2609,
            4402,
            6154,
            6828
          ],
          "name": "DavinciToken",
          "scope": 5779
        },
        "children": [
          {
            "attributes": {
              "text": " @title DavinciToken\n @dev anyone can mint token."
            },
            "id": 5691,
            "name": "StructuredDocumentation",
            "src": "195:61:34"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 6154,
                  "type": "contract Ownable"
                },
                "id": 5692,
                "name": "UserDefinedTypeName",
                "src": "282:7:34"
              }
            ],
            "id": 5693,
            "name": "InheritanceSpecifier",
            "src": "282:7:34"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "IERC721",
                  "referencedDeclaration": 4510,
                  "type": "contract IERC721"
                },
                "id": 5694,
                "name": "UserDefinedTypeName",
                "src": "291:7:34"
              }
            ],
            "id": 5695,
            "name": "InheritanceSpecifier",
            "src": "291:7:34"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721Base",
                  "referencedDeclaration": 3694,
                  "type": "contract ERC721Base"
                },
                "id": 5696,
                "name": "UserDefinedTypeName",
                "src": "300:10:34"
              }
            ],
            "id": 5697,
            "name": "InheritanceSpecifier",
            "src": "300:10:34"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 5778,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "name",
                      "overrides": null,
                      "scope": 5730,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5698,
                        "name": "ElementaryTypeName",
                        "src": "331:6:34"
                      }
                    ],
                    "id": 5699,
                    "name": "VariableDeclaration",
                    "src": "331:18:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "symbol",
                      "overrides": null,
                      "scope": 5730,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5700,
                        "name": "ElementaryTypeName",
                        "src": "351:6:34"
                      }
                    ],
                    "id": 5701,
                    "name": "VariableDeclaration",
                    "src": "351:20:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "newOwner",
                      "overrides": null,
                      "scope": 5730,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 5702,
                        "name": "ElementaryTypeName",
                        "src": "373:7:34"
                      }
                    ],
                    "id": 5703,
                    "name": "VariableDeclaration",
                    "src": "373:16:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "contractURI",
                      "overrides": null,
                      "scope": 5730,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5704,
                        "name": "ElementaryTypeName",
                        "src": "391:6:34"
                      }
                    ],
                    "id": 5705,
                    "name": "VariableDeclaration",
                    "src": "391:25:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenURIPrefix",
                      "overrides": null,
                      "scope": 5730,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5706,
                        "name": "ElementaryTypeName",
                        "src": "418:6:34"
                      }
                    ],
                    "id": 5707,
                    "name": "VariableDeclaration",
                    "src": "418:28:34"
                  }
                ],
                "id": 5708,
                "name": "ParameterList",
                "src": "330:117:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5715,
                "name": "ParameterList",
                "src": "509:0:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3694,
                      "type": "type(contract ERC721Base)",
                      "value": "ERC721Base"
                    },
                    "id": 5709,
                    "name": "Identifier",
                    "src": "455:10:34"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5699,
                      "type": "string memory",
                      "value": "name"
                    },
                    "id": 5710,
                    "name": "Identifier",
                    "src": "466:4:34"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5701,
                      "type": "string memory",
                      "value": "symbol"
                    },
                    "id": 5711,
                    "name": "Identifier",
                    "src": "472:6:34"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5705,
                      "type": "string memory",
                      "value": "contractURI"
                    },
                    "id": 5712,
                    "name": "Identifier",
                    "src": "480:11:34"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5707,
                      "type": "string memory",
                      "value": "tokenURIPrefix"
                    },
                    "id": 5713,
                    "name": "Identifier",
                    "src": "493:14:34"
                  }
                ],
                "id": 5714,
                "name": "ModifierInvocation",
                "src": "455:53:34"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2608,
                              "type": "function (bytes4)",
                              "value": "_registerInterface"
                            },
                            "id": 5716,
                            "name": "Identifier",
                            "src": "519:18:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bytes4",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(bytes4)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "bytes4",
                                      "type": null
                                    },
                                    "id": 5717,
                                    "name": "ElementaryTypeName",
                                    "src": "538:6:34"
                                  }
                                ],
                                "id": 5718,
                                "name": "ElementaryTypeNameExpression",
                                "src": "538:6:34"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                          "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -8,
                                      "type": "function (bytes memory) pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 5719,
                                    "name": "Identifier",
                                    "src": "545:9:34"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "4d494e545f574954485f41444452455353",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"MINT_WITH_ADDRESS\"",
                                      "value": "MINT_WITH_ADDRESS"
                                    },
                                    "id": 5720,
                                    "name": "Literal",
                                    "src": "555:19:34"
                                  }
                                ],
                                "id": 5721,
                                "name": "FunctionCall",
                                "src": "545:30:34"
                              }
                            ],
                            "id": 5722,
                            "name": "FunctionCall",
                            "src": "538:38:34"
                          }
                        ],
                        "id": 5723,
                        "name": "FunctionCall",
                        "src": "519:58:34"
                      }
                    ],
                    "id": 5724,
                    "name": "ExpressionStatement",
                    "src": "519:58:34"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6153,
                              "type": "function (address)",
                              "value": "transferOwnership"
                            },
                            "id": 5725,
                            "name": "Identifier",
                            "src": "587:17:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5703,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 5726,
                            "name": "Identifier",
                            "src": "605:8:34"
                          }
                        ],
                        "id": 5727,
                        "name": "FunctionCall",
                        "src": "587:27:34"
                      }
                    ],
                    "id": 5728,
                    "name": "ExpressionStatement",
                    "src": "587:27:34"
                  }
                ],
                "id": 5729,
                "name": "Block",
                "src": "509:112:34"
              }
            ],
            "id": 5730,
            "name": "FunctionDefinition",
            "src": "318:303:34"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "bd442c3b",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mint",
              "overrides": null,
              "scope": 5778,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenId",
                      "overrides": null,
                      "scope": 5753,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5731,
                        "name": "ElementaryTypeName",
                        "src": "645:7:34"
                      }
                    ],
                    "id": 5732,
                    "name": "VariableDeclaration",
                    "src": "645:15:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_fees",
                      "overrides": null,
                      "scope": 5753,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ERC721Base.Fee[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ERC721Base.Fee[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Fee",
                              "referencedDeclaration": 3347,
                              "type": "struct ERC721Base.Fee"
                            },
                            "id": 5733,
                            "name": "UserDefinedTypeName",
                            "src": "662:3:34"
                          }
                        ],
                        "id": 5734,
                        "name": "ArrayTypeName",
                        "src": "662:5:34"
                      }
                    ],
                    "id": 5735,
                    "name": "VariableDeclaration",
                    "src": "662:18:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenURI",
                      "overrides": null,
                      "scope": 5753,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5736,
                        "name": "ElementaryTypeName",
                        "src": "682:6:34"
                      }
                    ],
                    "id": 5737,
                    "name": "VariableDeclaration",
                    "src": "682:22:34"
                  }
                ],
                "id": 5738,
                "name": "ParameterList",
                "src": "644:61:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5739,
                "name": "ParameterList",
                "src": "713:0:34"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Fee_$3347_memory_ptr_$dyn_memory_ptr",
                                  "typeString": "struct ERC721Base.Fee memory[] memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                3607,
                                3853
                              ],
                              "referencedDeclaration": 3607,
                              "type": "function (address,uint256,struct ERC721Base.Fee memory[] memory)",
                              "value": "_mint"
                            },
                            "id": 5740,
                            "name": "Identifier",
                            "src": "731:5:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -15,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 5741,
                                "name": "Identifier",
                                "src": "737:3:34"
                              }
                            ],
                            "id": 5742,
                            "name": "MemberAccess",
                            "src": "737:10:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5732,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 5743,
                            "name": "Identifier",
                            "src": "749:7:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5735,
                              "type": "struct ERC721Base.Fee memory[] memory",
                              "value": "_fees"
                            },
                            "id": 5744,
                            "name": "Identifier",
                            "src": "758:5:34"
                          }
                        ],
                        "id": 5745,
                        "name": "FunctionCall",
                        "src": "731:33:34"
                      }
                    ],
                    "id": 5746,
                    "name": "ExpressionStatement",
                    "src": "731:33:34"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                3652
                              ],
                              "referencedDeclaration": 3652,
                              "type": "function (uint256,string memory)",
                              "value": "_setTokenURI"
                            },
                            "id": 5747,
                            "name": "Identifier",
                            "src": "774:12:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5732,
                              "type": "uint256",
                              "value": "tokenId"
                            },
                            "id": 5748,
                            "name": "Identifier",
                            "src": "787:7:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5737,
                              "type": "string memory",
                              "value": "tokenURI"
                            },
                            "id": 5749,
                            "name": "Identifier",
                            "src": "796:8:34"
                          }
                        ],
                        "id": 5750,
                        "name": "FunctionCall",
                        "src": "774:31:34"
                      }
                    ],
                    "id": 5751,
                    "name": "ExpressionStatement",
                    "src": "774:31:34"
                  }
                ],
                "id": 5752,
                "name": "Block",
                "src": "713:99:34"
              }
            ],
            "id": 5753,
            "name": "FunctionDefinition",
            "src": "631:181:34"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "99e0dd7c",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "setTokenURIPrefix",
              "overrides": null,
              "scope": 5778,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenURIPrefix",
                      "overrides": null,
                      "scope": 5765,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5754,
                        "name": "ElementaryTypeName",
                        "src": "845:6:34"
                      }
                    ],
                    "id": 5755,
                    "name": "VariableDeclaration",
                    "src": "845:28:34"
                  }
                ],
                "id": 5756,
                "name": "ParameterList",
                "src": "844:30:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5759,
                "name": "ParameterList",
                "src": "892:0:34"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 6103,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5757,
                    "name": "Identifier",
                    "src": "882:9:34"
                  }
                ],
                "id": 5758,
                "name": "ModifierInvocation",
                "src": "882:9:34"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4196,
                              "type": "function (string memory)",
                              "value": "_setTokenURIPrefix"
                            },
                            "id": 5760,
                            "name": "Identifier",
                            "src": "902:18:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5755,
                              "type": "string memory",
                              "value": "tokenURIPrefix"
                            },
                            "id": 5761,
                            "name": "Identifier",
                            "src": "921:14:34"
                          }
                        ],
                        "id": 5762,
                        "name": "FunctionCall",
                        "src": "902:34:34"
                      }
                    ],
                    "id": 5763,
                    "name": "ExpressionStatement",
                    "src": "902:34:34"
                  }
                ],
                "id": 5764,
                "name": "Block",
                "src": "892:51:34"
              }
            ],
            "id": 5765,
            "name": "FunctionDefinition",
            "src": "818:125:34"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "938e3d7b",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "setContractURI",
              "overrides": null,
              "scope": 5778,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "contractURI",
                      "overrides": null,
                      "scope": 5777,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5766,
                        "name": "ElementaryTypeName",
                        "src": "973:6:34"
                      }
                    ],
                    "id": 5767,
                    "name": "VariableDeclaration",
                    "src": "973:25:34"
                  }
                ],
                "id": 5768,
                "name": "ParameterList",
                "src": "972:27:34"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5771,
                "name": "ParameterList",
                "src": "1017:0:34"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 6103,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5769,
                    "name": "Identifier",
                    "src": "1007:9:34"
                  }
                ],
                "id": 5770,
                "name": "ModifierInvocation",
                "src": "1007:9:34"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4088,
                              "type": "function (string memory)",
                              "value": "_setContractURI"
                            },
                            "id": 5772,
                            "name": "Identifier",
                            "src": "1027:15:34"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5767,
                              "type": "string memory",
                              "value": "contractURI"
                            },
                            "id": 5773,
                            "name": "Identifier",
                            "src": "1043:11:34"
                          }
                        ],
                        "id": 5774,
                        "name": "FunctionCall",
                        "src": "1027:28:34"
                      }
                    ],
                    "id": 5775,
                    "name": "ExpressionStatement",
                    "src": "1027:28:34"
                  }
                ],
                "id": 5776,
                "name": "Block",
                "src": "1017:45:34"
              }
            ],
            "id": 5777,
            "name": "FunctionDefinition",
            "src": "949:113:34"
          }
        ],
        "id": 5778,
        "name": "ContractDefinition",
        "src": "257:807:34"
      }
    ],
    "id": 5779,
    "name": "SourceUnit",
    "src": "0:1064:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-09T19:23:05.807Z",
  "devdoc": {
    "details": "anyone can mint token.",
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "address to query the balance of"
        },
        "returns": {
          "_0": "uint256 representing the amount owned by the passed address"
        }
      },
      "burn(uint256)": {
        "details": "Burns a specific ERC721 token.",
        "params": {
          "tokenId": "uint256 id of the ERC721 token to be burned."
        }
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "returns": {
          "_0": "address currently approved for the given token ID"
        }
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "returns": {
          "_0": "bool whether the given operator is approved by the given owner"
        }
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "returns": {
          "_0": "address currently marked as the owner of the given token ID"
        }
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the _msgSender() to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
        "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "returns": {
          "_0": "uint256 token ID at the given index of the tokens list"
        }
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
        "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
          "owner": "address owning the tokens list to be accessed"
        },
        "returns": {
          "_0": "uint256 token ID at the given index of the tokens list owned by the requested address"
        }
      },
      "tokenURI(uint256)": {
        "details": "Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.",
        "params": {
          "tokenId": "uint256 ID of the token to query"
        }
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
        "returns": {
          "_0": "uint256 representing the total amount of tokens"
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requires the msg.sender to be the owner, approved, or operator.",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "title": "DavinciToken",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
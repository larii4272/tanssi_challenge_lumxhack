import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
    11155111: {
       OlyNFT: {
              address: "0xBD31F11E8488d92DAbbe01eF26Bc16C161dD47Fc",
              abi: [
     {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "sender",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "ERC721IncorrectOwner",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "ERC721InsufficientApproval",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "approver",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidApprover",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "operator",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidOperator",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidOwner",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "receiver",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidReceiver",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "sender",
           "type": "address"
         }
       ],
       "name": "ERC721InvalidSender",
       "type": "error"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "ERC721NonexistentToken",
       "type": "error"
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
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "winner",
           "type": "address"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "AuctionEnded",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_fromTokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_toTokenId",
           "type": "uint256"
         }
       ],
       "name": "BatchMetadataUpdate",
       "type": "event"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         }
       ],
       "name": "bid",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "metadata",
           "type": "string"
         },
         {
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "internalType": "uint256",
           "name": "startPrice",
           "type": "uint256"
         },
         {
           "internalType": "uint256",
           "name": "duration",
           "type": "uint256"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "createAuction",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "string",
           "name": "metadata",
           "type": "string"
         },
         {
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "internalType": "uint256",
           "name": "initValue",
           "type": "uint256"
         },
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "createToken",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         }
       ],
       "name": "endAuction",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "_tokenId",
           "type": "uint256"
         }
       ],
       "name": "MetadataUpdate",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "owner",
           "type": "address"
         },
         {
           "indexed": false,
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "startPrice",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "endTime",
           "type": "uint256"
         }
       ],
       "name": "NewAuction",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         },
         {
           "indexed": true,
           "internalType": "address",
           "name": "bidder",
           "type": "address"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "NewBid",
       "type": "event"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "NewToken",
       "type": "event"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         }
       ],
       "name": "purchaseToken",
       "outputs": [],
       "stateMutability": "payable",
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
           "name": "data",
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
           "name": "operator",
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
       "anonymous": false,
       "inputs": [
         {
           "indexed": true,
           "internalType": "address",
           "name": "buyer",
           "type": "address"
         },
         {
           "indexed": true,
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "TokenPurchased",
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
       "inputs": [],
       "name": "withdraw",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
     },
     {
       "anonymous": false,
       "inputs": [
         {
           "indexed": false,
           "internalType": "address",
           "name": "to",
           "type": "address"
         },
         {
           "indexed": false,
           "internalType": "uint256",
           "name": "amount",
           "type": "uint256"
         }
       ],
       "name": "Withdraw",
       "type": "event"
     },
     {
       "inputs": [
         {
           "internalType": "uint256",
           "name": "",
           "type": "uint256"
         }
       ],
       "name": "auctions",
       "outputs": [
         {
           "internalType": "uint256",
           "name": "itemId",
           "type": "uint256"
         },
         {
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "internalType": "string",
           "name": "metadata",
           "type": "string"
         },
         {
           "internalType": "address",
           "name": "owner",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "startPrice",
           "type": "uint256"
         },
         {
           "internalType": "uint256",
           "name": "highestBid",
           "type": "uint256"
         },
         {
           "internalType": "address",
           "name": "highestBidder",
           "type": "address"
         },
         {
           "internalType": "uint256",
           "name": "endTime",
           "type": "uint256"
         },
         {
           "internalType": "bool",
           "name": "ended",
           "type": "bool"
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
       "inputs": [],
       "name": "getAllAuctions",
       "outputs": [
         {
           "components": [
             {
               "internalType": "uint256",
               "name": "itemId",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "name",
               "type": "string"
             },
             {
               "internalType": "string",
               "name": "metadata",
               "type": "string"
             },
             {
               "internalType": "address",
               "name": "owner",
               "type": "address"
             },
             {
               "internalType": "uint256",
               "name": "startPrice",
               "type": "uint256"
             },
             {
               "internalType": "uint256",
               "name": "highestBid",
               "type": "uint256"
             },
             {
               "internalType": "address",
               "name": "highestBidder",
               "type": "address"
             },
             {
               "internalType": "uint256",
               "name": "endTime",
               "type": "uint256"
             },
             {
               "internalType": "bool",
               "name": "ended",
               "type": "bool"
             }
           ],
           "internalType": "struct OlyCrypto.AuctionItem[]",
           "name": "",
           "type": "tuple[]"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [],
       "name": "getAllTokens",
       "outputs": [
         {
           "components": [
             {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "name",
               "type": "string"
             },
             {
               "internalType": "uint256",
               "name": "initValue",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "metadata",
               "type": "string"
             },
             {
               "internalType": "bool",
               "name": "available",
               "type": "bool"
             },
             {
               "internalType": "uint256",
               "name": "dateCheckIn",
               "type": "uint256"
             }
           ],
           "internalType": "struct OlyCrypto.Token[]",
           "name": "",
           "type": "tuple[]"
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
           "internalType": "address",
           "name": "_walletAddress",
           "type": "address"
         }
       ],
       "name": "getOwnerAuction",
       "outputs": [
         {
           "components": [
             {
               "internalType": "uint256",
               "name": "itemId",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "name",
               "type": "string"
             },
             {
               "internalType": "string",
               "name": "metadata",
               "type": "string"
             },
             {
               "internalType": "address",
               "name": "owner",
               "type": "address"
             },
             {
               "internalType": "uint256",
               "name": "startPrice",
               "type": "uint256"
             },
             {
               "internalType": "uint256",
               "name": "highestBid",
               "type": "uint256"
             },
             {
               "internalType": "address",
               "name": "highestBidder",
               "type": "address"
             },
             {
               "internalType": "uint256",
               "name": "endTime",
               "type": "uint256"
             },
             {
               "internalType": "bool",
               "name": "ended",
               "type": "bool"
             }
           ],
           "internalType": "struct OlyCrypto.AuctionItem[]",
           "name": "",
           "type": "tuple[]"
         }
       ],
       "stateMutability": "view",
       "type": "function"
     },
     {
       "inputs": [
         {
           "internalType": "address",
           "name": "_walletAddress",
           "type": "address"
         }
       ],
       "name": "getOwnerTokens",
       "outputs": [
         {
           "components": [
             {
               "internalType": "uint256",
               "name": "tokenId",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "name",
               "type": "string"
             },
             {
               "internalType": "uint256",
               "name": "initValue",
               "type": "uint256"
             },
             {
               "internalType": "string",
               "name": "metadata",
               "type": "string"
             },
             {
               "internalType": "bool",
               "name": "available",
               "type": "bool"
             },
             {
               "internalType": "uint256",
               "name": "dateCheckIn",
               "type": "uint256"
             }
           ],
           "internalType": "struct OlyCrypto.Token[]",
           "name": "",
           "type": "tuple[]"
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
       "inputs": [],
       "name": "OWNER_FEE_PERC",
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
           "name": "",
           "type": "uint256"
         }
       ],
       "name": "tokensCreated",
       "outputs": [
         {
           "internalType": "uint256",
           "name": "tokenId",
           "type": "uint256"
         },
         {
           "internalType": "string",
           "name": "name",
           "type": "string"
         },
         {
           "internalType": "uint256",
           "name": "initValue",
           "type": "uint256"
         },
         {
           "internalType": "string",
           "name": "metadata",
           "type": "string"
         },
         {
           "internalType": "bool",
           "name": "available",
           "type": "bool"
         },
         {
           "internalType": "uint256",
           "name": "dateCheckIn",
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
     }
   ],
            },
          }

 * } as const;
 */
const externalContracts = {
  
} as const;

export default externalContracts satisfies GenericContractsDeclaration;

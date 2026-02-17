const contractABI = [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [{ "type": "address", "name": "tokenAddress" }]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "AccountBanned",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "address", "name": "bannedBy", "indexed": true }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "AccountUnbanned",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "address", "name": "unbannedBy", "indexed": true }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "CreditsDeducted",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "uint256", "name": "amount", "indexed": false }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "LoggedIn",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "uint256", "name": "timestamp", "indexed": false }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "PasswordChanged",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "uint256", "name": "timestamp", "indexed": false }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "Registered",
    "inputs": [
      { "type": "address", "name": "userAddress", "indexed": true },
      { "type": "string", "name": "email", "indexed": false },
      { "type": "string", "name": "username", "indexed": false },
      { "type": "uint256", "name": "creationTime", "indexed": false }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "banUser",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "changePassword",
    "inputs": [
      { "type": "string", "name": "oldPasswordHash" },
      { "type": "string", "name": "newPasswordHash" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "checkTargetAddressTokenBalance",
    "inputs": [],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "checkUserCredit",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "creditToken",
    "inputs": [],
    "outputs": [{ "type": "address", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getAllUserInfo",
    "inputs": [],
    "outputs": [
      { "type": "address[]", "name": "" },
      { "type": "string[]", "name": "" },
      { "type": "string[]", "name": "" },
      { "type": "string[]", "name": "" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getAllUsers",
    "inputs": [],
    "outputs": [{ "type": "address[]", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getBannedStatus",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": [{ "type": "bool", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getCreationTime",
    "inputs": [],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getEmail",
    "inputs": [],
    "outputs": [{ "type": "string", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getLoginHistory",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": [{ "type": "uint256[]", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getMyLoginHistory",
    "inputs": [],
    "outputs": [{ "type": "uint256[]", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getOwner",
    "inputs": [],
    "outputs": [{ "type": "address", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getUserInfo",
    "inputs": [],
    "outputs": [
      { "type": "address", "name": "" },
      { "type": "string", "name": "" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "view",
    "name": "getUserInfoByAddress",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": [
      { "type": "string", "name": "" },
      { "type": "string", "name": "" },
      { "type": "uint256", "name": "" }
    ]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "login",
    "inputs": [
      { "type": "string", "name": "email" },
      { "type": "string", "name": "passwordHash" }
    ],
    "outputs": [{ "type": "bool", "name": "" }]
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "register",
    "inputs": [
      { "type": "string", "name": "email" },
      { "type": "string", "name": "passwordHash" },
      { "type": "string", "name": "username" }
    ],
    "outputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "requestCredits",
    "inputs": [{ "type": "uint256", "name": "amount" }],
    "outputs": []
  },
  {
    "type": "function",
    "stateMutability": "nonpayable",
    "name": "unbanUser",
    "inputs": [{ "type": "address", "name": "userAddress" }],
    "outputs": []
  }
];

export default contractABI;

const CreditTokenABI = [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      { "type": "string", "name": "name" },
      { "type": "string", "name": "symbol" },
      { "type": "uint256", "name": "initialSupply" }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InsufficientAllowance",
    "inputs": [
      { "type": "address", "name": "spender" },
      { "type": "uint256", "name": "allowance" },
      { "type": "uint256", "name": "needed" }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InsufficientBalance",
    "inputs": [
      { "type": "address", "name": "sender" },
      { "type": "uint256", "name": "balance" },
      { "type": "uint256", "name": "needed" }
    ]
  },
  {
    "type": "error",
    "name": "ERC20InvalidApprover",
    "inputs": [{ "type": "address", "name": "approver" }]
  },
  {
    "type": "error",
    "name": "ERC20InvalidReceiver",
    "inputs": [{ "type": "address", "name": "receiver" }]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSender",
    "inputs": [{ "type": "address", "name": "sender" }]
  },
  {
    "type": "error",
    "name": "ERC20InvalidSpender",
    "inputs": [{ "type": "address", "name": "spender" }]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "Approval",
    "inputs": [
      { "type": "address", "name": "owner", "indexed": true },
      { "type": "address", "name": "spender", "indexed": true },
      { "type": "uint256", "name": "value", "indexed": false }
    ]
  },
  {
    "type": "event",
    "anonymous": false,
    "name": "Transfer",
    "inputs": [
      { "type": "address", "name": "from", "indexed": true },
      { "type": "address", "name": "to", "indexed": true },
      { "type": "uint256", "name": "value", "indexed": false }
    ]
  },
  {
    "type": "function",
    "name": "allowance",
    "stateMutability": "view",
    "inputs": [
      { "type": "address", "name": "owner" },
      { "type": "address", "name": "spender" }
    ],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "name": "approve",
    "stateMutability": "nonpayable",
    "inputs": [
      { "type": "address", "name": "spender" },
      { "type": "uint256", "name": "value" }
    ],
    "outputs": [{ "type": "bool", "name": "" }]
  },
  {
    "type": "function",
    "name": "balanceOf",
    "stateMutability": "view",
    "inputs": [{ "type": "address", "name": "account" }],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "name": "decimals",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "uint8", "name": "" }]
  },
  {
    "type": "function",
    "name": "name",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "string", "name": "" }]
  },
  {
    "type": "function",
    "name": "symbol",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "string", "name": "" }]
  },
  {
    "type": "function",
    "name": "totalSupply",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [{ "type": "uint256", "name": "" }]
  },
  {
    "type": "function",
    "name": "transfer",
    "stateMutability": "nonpayable",
    "inputs": [
      { "type": "address", "name": "to" },
      { "type": "uint256", "name": "value" }
    ],
    "outputs": [{ "type": "bool", "name": "" }]
  },
  {
    "type": "function",
    "name": "transferFrom",
    "stateMutability": "nonpayable",
    "inputs": [
      { "type": "address", "name": "from" },
      { "type": "address", "name": "to" },
      { "type": "uint256", "name": "value" }
    ],
    "outputs": [{ "type": "bool", "name": "" }]
  }
];

export default CreditTokenABI;

// Centralized Smart Contract & Network Configuration for OpenRent
import UserAuthABI from '../Components/UserAuthABI.js';
import CreditTokenABI from '../Components/CreditTokenABI.js';
import LotTrackerABI from '../Components/LotTrackerABI.js';

export const CONTRACT_ADDRESSES = {
  USER_AUTH: "0xdbc22b309b0c46e43c08d39c7f8acf119e091651",
  CREDIT_TOKEN: "0x42a05014306386b823329f777eb09ec1f493d69c",
  LOT_TRACKER: "0xdB04e79caEa24AF20b4ad1AaAb0Ed2e67DCb9449",
};

export const HEDERA_TESTNET_CONFIG = {
  chainId: '0x128', // 296 in decimal
  chainIdDecimal: 296,
  chainName: 'Hedera Testnet',
  nativeCurrency: {
    name: 'HBAR',
    symbol: 'HBAR',
    decimals: 18,
  },
  rpcUrls: ['https://testnet.hashio.io/api'],
  blockExplorerUrls: ['https://hashscan.io/testnet/'],
};

export const ABIS = {
  UserAuth: UserAuthABI,
  CreditToken: CreditTokenABI,
  LotTracker: LotTrackerABI,
};

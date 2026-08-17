import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ethers, Contract, BrowserProvider } from 'ethers';

// Centralized Config & ABIs
import { CONTRACT_ADDRESSES, HEDERA_TESTNET_CONFIG, ABIS } from './config/contracts.js';

// Shared Components
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';

// Pages
import LandingPage from './Components/LandingPage.jsx';
import Services from './Components/Services.jsx';
import Features from './Components/Features.jsx';
import Technology from './Components/Technology.jsx';
import Pricing from './Components/Pricing.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Contact from './Components/Contact.jsx';
import Blog from './Components/Blog.jsx';
import Careers from './Components/Careers.jsx';
import Security from './Components/Security.jsx';
import Privacy from './Components/Privacy.jsx';
import Terms from './Components/Terms.jsx';
import Demo from './Components/Demo.jsx';

// Dashboards
import ClientDashboard from './Components/ClientDashboard.jsx';
import AdminDashboard from './Components/AdminDashboard.jsx';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. User session state
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : null;
  });

  const [signer, setSigner] = useState(null);
  const [message, setMessage] = useState('');
  const [contract, setContract] = useState(null); // LotTracker contract
  const [creditTokenContract, setCreditTokenContract] = useState(null); // CreditToken contract
  const [authContract, setAuthContract] = useState(null); // UserAuth contract

  const isLoggedIn = !!userData && !!userData.address;

  // 2. Centralized Web3 Connection
  const connectAndSetup = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      setMessage('MetaMask is not installed. Please install MetaMask to use Web3 features.');
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);

      // Check connected accounts
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        await provider.send('eth_requestAccounts', []);
      }

      const network = await provider.getNetwork();
      if (network.chainId !== BigInt(HEDERA_TESTNET_CONFIG.chainId)) {
        setMessage('Switching network to Hedera Testnet...');
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: HEDERA_TESTNET_CONFIG.chainId,
                chainName: HEDERA_TESTNET_CONFIG.chainName,
                nativeCurrency: HEDERA_TESTNET_CONFIG.nativeCurrency,
                rpcUrls: HEDERA_TESTNET_CONFIG.rpcUrls,
                blockExplorerUrls: HEDERA_TESTNET_CONFIG.blockExplorerUrls,
              },
            ],
          });
        } catch (switchError) {
          console.warn('Network switch prompt:', switchError);
        }
      }

      const _signer = await provider.getSigner();
      const _lotTracker = new Contract(CONTRACT_ADDRESSES.LOT_TRACKER, ABIS.LotTracker, _signer);
      const _creditToken = new Contract(CONTRACT_ADDRESSES.CREDIT_TOKEN, ABIS.CreditToken, _signer);
      const _userAuth = new Contract(CONTRACT_ADDRESSES.USER_AUTH, ABIS.UserAuth, _signer);

      setSigner(_signer);
      setContract(_lotTracker);
      setCreditTokenContract(_creditToken);
      setAuthContract(_userAuth);

      setMessage(`Connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet`);
    } catch (error) {
      console.error('Wallet connection error:', error);
      const msg = error.message?.includes('user rejected')
        ? 'Connection rejected by user.'
        : error.message || 'Failed to connect wallet.';
      setMessage(`Connection failed: ${msg}`);
      setSigner(null);
      setContract(null);
      setCreditTokenContract(null);
      setAuthContract(null);
    }
  }, []);

  // 3. Auto-reconnect & Event listeners
  useEffect(() => {
    if (isLoggedIn && !signer) {
      connectAndSetup();
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', connectAndSetup);
      window.ethereum.on('chainChanged', connectAndSetup);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', connectAndSetup);
        window.ethereum.removeListener('chainChanged', connectAndSetup);
      }
    };
  }, [isLoggedIn, signer, connectAndSetup]);

  // 4. Synchronize userData with localStorage
  useEffect(() => {
    if (userData && userData.address) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('userData');
    }
  }, [userData]);

  // Check if current route is a standalone full-screen console
  const isDashboardRoute = location.pathname.toLowerCase() === '/dashboard' || location.pathname.toLowerCase() === '/admin_dashboard';

  return (
    <>
      {!isDashboardRoute && (
        <Navbar
          userData={userData}
          signer={signer}
          connectAndSetup={connectAndSetup}
        />
      )}

      <main className={!isDashboardRoute ? 'page-wrapper' : ''}>
        <Routes>
          {/* Public Marketing Routes */}
          <Route path="/" element={<LandingPage userData={userData} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Web3 Login / Registration / Demo */}
          <Route
            path="/Demo"
            element={
              <Demo
                userData={userData}
                setUserData={setUserData}
                signer={signer}
                setSigner={setSigner}
                contract={authContract || contract}
                setContract={setAuthContract}
                creditTokenContract={creditTokenContract}
                message={message}
                setMessage={setMessage}
                connectAndSetup={connectAndSetup}
              />
            }
          />
          <Route
            path="/get-started"
            element={
              <Demo
                userData={userData}
                setUserData={setUserData}
                signer={signer}
                setSigner={setSigner}
                contract={authContract || contract}
                setContract={setAuthContract}
                creditTokenContract={creditTokenContract}
                message={message}
                setMessage={setMessage}
                connectAndSetup={connectAndSetup}
              />
            }
          />

          {/* Protected Client Dashboard */}
          <Route element={<ProtectedRoute isLoggedIn={!!userData?.address} redirectPath="/Demo" />}>
            <Route
              path="/Dashboard"
              element={
                <ClientDashboard
                  userData={userData}
                  setUserData={setUserData}
                  signer={signer}
                  contract={contract}
                  creditTokenContract={creditTokenContract}
                  authContract={authContract}
                  message={message}
                  setMessage={setMessage}
                  connectAndSetup={connectAndSetup}
                />
              }
            />
          </Route>

          {/* Admin Dashboard */}
          <Route
            path="/admin_dashboard"
            element={
              <AdminDashboard
                userData={userData}
                signer={signer}
                contract={contract}
                creditTokenContract={creditTokenContract}
                authContract={authContract}
              />
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<LandingPage userData={userData} />} />
        </Routes>
      </main>

      {!isDashboardRoute && <Footer />}
    </>
  );
};

export default App;

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { sha256 } from 'js-sha256';

// Config & ABIs
import { CONTRACT_ADDRESSES, HEDERA_TESTNET_CONFIG, ABIS } from '../config/contracts.js';
import '../Styles/Demo.css';

export default function Demo({
  userData,
  setUserData,
  signer,
  setSigner,
  contract,
  setContract,
  creditTokenContract,
  message,
  setMessage,
  connectAndSetup,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || '/Dashboard';

  const [isLoginActive, setIsLoginActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // Redirect if already logged in with active signer
  useEffect(() => {
    if (userData?.address && signer) {
      navigate('/Dashboard', { replace: true });
    }
  }, [userData, signer, navigate]);

  // Connect wallet on load if not connected
  useEffect(() => {
    if (!signer && connectAndSetup) {
      connectAndSetup();
    }
  }, [signer, connectAndSetup]);

  // --- Handle Registration ---
  const handleRegister = async (e) => {
    e.preventDefault();
    if (setMessage) setMessage('');

    if (!contract || !signer) {
      if (setMessage) setMessage('Please connect your MetaMask wallet to Hedera Testnet first.');
      return;
    }

    setLoading(true);
    const hashedPassword = sha256.hex(registerPassword);

    try {
      if (setMessage) setMessage('Confirm registration transaction in MetaMask...');

      const txResponse = await contract.register(
        registerEmail,
        hashedPassword,
        registerUsername
      );

      if (setMessage) setMessage(`Transaction dispatched: ${txResponse.hash.substring(0, 10)}... Awaiting confirmation.`);

      const receipt = await txResponse.wait();

      if (receipt.status === 1) {
        if (setMessage) setMessage('✅ Registration successful! 100 Test Credits initialized. Switching to login.');
        setRegisterUsername('');
        setRegisterEmail('');
        setRegisterPassword('');
        setIsLoginActive(true);
      } else {
        if (setMessage) setMessage('❌ Transaction reverted on-chain. Registration failed.');
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.code === 'ACTION_REJECTED' || err.code === 4001) {
        if (setMessage) setMessage('Transaction cancelled by user.');
      } else {
        const errorMsg = err.reason || err.shortMessage || err.message || 'Registration failed.';
        if (setMessage) setMessage(`Registration error: ${errorMsg}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // --- Handle Login ---
  const handleLogin = async (e) => {
    e.preventDefault();
    if (setMessage) setMessage('');

    if (!contract || !signer) {
      if (setMessage) setMessage('Please connect your MetaMask wallet to Hedera Testnet first.');
      return;
    }

    if (!loginEmail || !loginPassword) {
      if (setMessage) setMessage('Please provide both email and password.');
      return;
    }

    setLoading(true);
    const hashedPassword = sha256.hex(loginPassword);

    try {
      const userEVMAddress = await signer.getAddress();

      if (setMessage) setMessage('Checking account authorization status...');

      // Check if account is banned
      try {
        const isBanned = await contract.getBannedStatus(userEVMAddress);
        if (isBanned) {
          if (setMessage) setMessage('🔴 Account is banned from smart contract interaction.');
          setLoading(false);
          return;
        }
      } catch (banErr) {
        console.warn('Banned status check skipped:', banErr);
      }

      if (setMessage) setMessage('Confirm signature / login transaction in MetaMask...');

      const txResponse = await contract.login(loginEmail, hashedPassword);
      const receipt = await txResponse.wait();

      if (receipt.status !== 1) {
        throw new Error('On-chain credential verification failed.');
      }

      if (setMessage) setMessage('Authentication successful! Fetching user telemetry...');

      // Fetch User Telemetry from contract
      let email = loginEmail;
      let username = 'Specialist';
      let creationTime = Math.floor(Date.now() / 1000);

      try {
        const userInfo = await contract.getUserInfoByAddress(userEVMAddress);
        email = userInfo[0] || loginEmail;
        username = userInfo[1] || 'Specialist';
        creationTime = userInfo[2] ? userInfo[2].toString() : creationTime;
      } catch (infoErr) {
        console.warn('getUserInfoByAddress fallback:', infoErr);
      }

      // Fetch Credits
      let creditsReadable = '100';
      try {
        const creditsBigInt = await contract.checkUserCredit(userEVMAddress);
        creditsReadable = creditsBigInt.toString();
      } catch (credErr) {
        console.warn('checkUserCredit fallback:', credErr);
      }

      const newUserData = {
        address: userEVMAddress,
        email: email,
        username: username,
        credits: creditsReadable,
        creationTime: creationTime.toString(),
      };

      if (setUserData) setUserData(newUserData);
      if (setMessage) setMessage(`Welcome back, ${username}! Redirecting to console...`);

      setTimeout(() => {
        navigate(fromPage || '/Dashboard', { replace: true });
      }, 500);
    } catch (err) {
      console.error('Login error:', err);
      const revertReason = err.reason || (err.data && err.data.message) || err.message || '';

      if (revertReason.includes('Account is banned')) {
        if (setMessage) setMessage('🔴 Account is banned from smart contract interaction.');
      } else if (revertReason.includes('User not registered')) {
        if (setMessage) setMessage('❌ Connected wallet is not registered. Please register first.');
      } else if (revertReason.includes('Invalid email or password')) {
        if (setMessage) setMessage('❌ Invalid email or password credentials.');
      } else if (err.code === 'ACTION_REJECTED' || err.code === 4001) {
        if (setMessage) setMessage('Login signature rejected by user.');
      } else {
        if (setMessage) setMessage(`Login error: ${revertReason}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <div className="demo-page-root">
      <div className="container demo-container">
        {/* Navigation Breadcrumb */}
        <div className="demo-back-nav">
          <Link to="/" className="back-link">
            ← Return to Marketplace
          </Link>
        </div>

        {/* Main Terminal Card */}
        <div className="glass-card demo-auth-card highlight">
          {/* Header */}
          <div className="demo-auth-header">
            <div className="auth-brand-badge">
              <span className="badge-dot pulse-dot" />
              <span>HEDERA EVM AUTH PROTOCOL</span>
            </div>
            <h2>Sovereign Workforce Gateway</h2>
            <p>Connect your Web3 wallet and authenticate on-chain via Hedera smart contracts.</p>
          </div>

          {/* Wallet Status Strip */}
          <div className="demo-wallet-status-strip">
            {signer ? (
              <div className="wallet-connected-pill">
                <span className="badge-dot pulse-dot" />
                <span>Wallet Connected: <strong>{formatAddress(signer.address)}</strong></span>
                <span className="network-tag font-mono">Hedera 296</span>
              </div>
            ) : (
              <div className="wallet-disconnected-pill">
                <span className="badge-dot" style={{ background: '#f59e0b' }} />
                <span>Wallet Disconnected</span>
                <button
                  type="button"
                  onClick={connectAndSetup}
                  className="btn btn-outline btn-sm"
                >
                  Connect MetaMask 🦊
                </button>
              </div>
            )}
          </div>

          {/* Tab Switcher (Login / Register) */}
          <div className="auth-tab-row">
            <button
              type="button"
              className={`auth-tab-btn ${isLoginActive ? 'active' : ''}`}
              onClick={() => {
                setIsLoginActive(true);
                if (setMessage) setMessage('');
              }}
            >
              Sign In to Console
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${!isLoginActive ? 'active' : ''}`}
              onClick={() => {
                setIsLoginActive(false);
                if (setMessage) setMessage('');
              }}
            >
              Register New Identity
            </button>
          </div>

          {/* Alert / Status Message */}
          {message && (
            <div className={`alert-banner ${message.includes('✅') || message.includes('Welcome') ? 'alert-success' : message.includes('❌') || message.includes('🔴') ? 'alert-error' : 'alert-info'} animate-fade-in`}>
              <span>ℹ️</span>
              <div>{message}</div>
            </div>
          )}

          {/* Forms Body */}
          <div className="auth-form-wrapper">
            {isLoginActive ? (
              /* LOGIN FORM */
              <form onSubmit={handleLogin} className="auth-form animate-fade-in">
                <div className="form-group">
                  <label className="form-label">Account Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password (Hashed Locally with SHA-256)</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </div>

                <div className="auth-security-notice font-mono">
                  🔒 Zero-Knowledge Security: Credentials are hashed client-side prior to Hedera smart contract verification.
                </div>

                <button
                  type="submit"
                  disabled={!signer || loading}
                  className="btn btn-primary btn-lg full-width auth-submit-btn"
                >
                  {loading ? 'Verifying on Hedera EVM...' : 'Authenticate & Open Dashboard 🚀'}
                </button>
              </form>
            ) : (
              /* REGISTER FORM */
              <form onSubmit={handleRegister} className="auth-form animate-fade-in">
                <div className="form-group">
                  <label className="form-label">Username / Handle</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SatoshiAgent"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="Choose a strong password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="form-input"
                    disabled={loading}
                  />
                </div>

                <div className="auth-faucet-notice">
                  🎁 <strong>Faucet Incentive:</strong> Registering will automatically allocate <strong>100 complimentary CreditTokens</strong> for test autonomous agent runs.
                </div>

                <button
                  type="submit"
                  disabled={!signer || loading}
                  className="btn btn-primary btn-lg full-width auth-submit-btn"
                >
                  {loading ? 'Broadcasting to Hedera...' : 'Register On-Chain & Claim 100 CT ⚡'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
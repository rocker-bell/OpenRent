import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers, formatUnits, parseUnits } from 'ethers';
import { CONTRACT_ADDRESSES } from '../config/contracts.js';
import '../Styles/dashboard.css';

export default function ClientDashboard({
  userData,
  setUserData,
  signer,
  contract,
  creditTokenContract,
  authContract,
  message,
  setMessage,
  connectAndSetup,
}) {
  const navigate = useNavigate();

  // Navigation & active view
  const [activeSection, setActiveSection] = useState('overview'); // 'overview', 'deploy', 'explorer', 'wallet', 'settings'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Deploy Mission / Task State (maps to contract.insert)
  const [missionData, setMissionData] = useState({
    name: 'Competitor Price Extraction Pipeline',
    executorType: 'Puppeteer-Headless-Node-v2',
    date: new Date().toISOString().split('T')[0],
    location: 'Hedera-Sandbox-Cluster-US1',
    metadataURI: 'ipfs://bafybeihdwdcefgh4dqkjv67...',
  });

  const [isDeploying, setIsDeploying] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [checkTaskId, setCheckTaskId] = useState('1');
  const [taskResult, setTaskResult] = useState(null);

  // Allowance and Faucet state
  const [currentAllowance, setCurrentAllowance] = useState('...');
  const [isApproving, setIsApproving] = useState(false);
  const [isFauceting, setIsFauceting] = useState(false);

  // Fetch allowance on load
  const fetchAllowance = async () => {
    if (creditTokenContract && signer && contract) {
      try {
        const lotAddress = await contract.getAddress();
        const allow = await creditTokenContract.allowance(signer.address, lotAddress);
        setCurrentAllowance(formatUnits(allow, 18));
      } catch (err) {
        console.warn('Could not fetch allowance:', err);
      }
    }
  };

  useEffect(() => {
    fetchAllowance();
  }, [creditTokenContract, signer, contract]);

  const handleLogout = () => {
    if (setUserData) setUserData(null);
    if (setMessage) setMessage('Successfully logged out.');
    navigate('/', { replace: true });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    if (setMessage) setMessage('Address copied to clipboard!');
    setTimeout(() => {
      if (setMessage) setMessage('');
    }, 3000);
  };

  // --- Deploy Mission (contract.insert with CreditToken approve) ---
  const handleDeployMission = async (e) => {
    e.preventDefault();

    if (!contract || !creditTokenContract || !signer) {
      if (setMessage) setMessage('Error: Wallet or smart contracts are not initialized. Please connect wallet.');
      return;
    }

    setIsDeploying(true);
    if (setMessage) setMessage(`Preparing deployment for "${missionData.name}"...`);

    try {
      const lotAddress = await contract.getAddress();
      const timestampInSeconds = Math.floor(new Date(missionData.date + 'T00:00:00Z').getTime() / 1000);
      const requiredFee = parseUnits('1', 18); // 1 CreditToken fee

      if (setMessage) setMessage('Step 1/2: Verifying CreditToken allowance...');
      const allowance = await creditTokenContract.allowance(signer.address, lotAddress);

      if (allowance < requiredFee) {
        const approveAmount = parseUnits('500', 18);
        if (setMessage) setMessage(`Requesting CreditToken approval (500 CT) in MetaMask...`);
        const approveTx = await creditTokenContract.approve(lotAddress, approveAmount);
        await approveTx.wait();
        if (setMessage) setMessage('✅ CreditToken approved! Proceeding to mission dispatch...');
      }

      if (setMessage) setMessage(`Step 2/2: Confirming task deployment on Hedera EVM...`);

      const tx = await contract.insert(
        missionData.name,
        missionData.executorType,
        BigInt(timestampInSeconds),
        missionData.location,
        missionData.metadataURI
      );

      if (setMessage) setMessage(`Transaction sent: ${tx.hash.substring(0, 10)}... Awaiting Hedera consensus.`);
      const receipt = await tx.wait();

      if (receipt.status === 1) {
        if (setMessage) setMessage(`🎉 Mission "${missionData.name}" deployed successfully on Hedera!`);
        fetchAllowance();
      } else {
        if (setMessage) setMessage('❌ Transaction reverted on-chain.');
      }
    } catch (err) {
      console.error('Mission deployment error:', err);
      const errorMsg = err.reason || (err.data && err.data.message) || err.message || 'Deployment failed.';
      if (setMessage) setMessage(`Deployment error: ${errorMsg}`);
    } finally {
      setIsDeploying(false);
    }
  };

  // --- Check Task by ID (contract.pull) ---
  const handleCheckTask = async (e) => {
    e.preventDefault();
    if (!contract) {
      if (setMessage) setMessage('Contract not initialized. Connect wallet.');
      return;
    }

    const id = checkTaskId.trim();
    if (!/^\d+$/.test(id)) {
      if (setMessage) setMessage('Please enter a valid numeric Task ID.');
      return;
    }

    setIsChecking(true);
    setTaskResult(null);
    if (setMessage) setMessage(`Querying Hedera consensus for Task ID #${id}...`);

    try {
      const [taskStruct, historyArray] = await contract.pull(BigInt(id));

      const statusNames = { '0': 'Active Running', '1': 'Completed Verified', '2': 'Transferred', '3': 'Terminated' };

      setTaskResult({
        taskId: taskStruct.lotId.toString(),
        name: taskStruct.name,
        handler: taskStruct.currentHandler,
        executorType: taskStruct.manufacturer,
        manufactureDate: Number(taskStruct.manufactureDate) * 1000,
        owner: taskStruct.currentOwner,
        location: taskStruct.currentLocation,
        status: statusNames[taskStruct.status.toString()] || 'Unknown',
        metadataURI: taskStruct.metadataURI,
        history: historyArray,
      });

      if (setMessage) setMessage(`✅ Task #${id} records retrieved successfully.`);
    } catch (err) {
      console.error('Task check error:', err);
      if (setMessage) setMessage(`Error fetching Task #${id}. It may not exist on-chain.`);
      setTaskResult({ notFound: true, taskId: id });
    } finally {
      setIsChecking(false);
    }
  };

  // --- Claim Testnet Faucet Credits ---
  const handleClaimFaucet = async () => {
    if (!authContract || !signer) {
      if (setMessage) setMessage('UserAuth contract not connected.');
      return;
    }
    setIsFauceting(true);
    try {
      if (setMessage) setMessage('Requesting 100 CreditTokens from Hedera faucet...');
      const tx = await authContract.requestCredits(100);
      await tx.wait();
      if (setMessage) setMessage('🎁 100 Test Credits successfully claimed!');

      // Update local state
      const currentCredits = Number(userData?.credits || 0) + 100;
      setUserData({ ...userData, credits: currentCredits.toString() });
    } catch (err) {
      console.error('Faucet claim error:', err);
      if (setMessage) setMessage(`Faucet claim error: ${err.reason || err.message}`);
    } finally {
      setIsFauceting(false);
    }
  };

  const formatAddr = (addr) => {
    if (!addr) return 'N/A';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  return (
    <div className="dashboard-layout-root">
      {/* SIDEBAR NAVIGATION */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <div className="logo-badge">⚡</div>
            {isSidebarOpen && (
              <div className="brand-text">
                <span className="brand-title">Open<span className="brand-accent">Rent</span></span>
                <span className="network-subtext">CLIENT CONSOLE</span>
              </div>
            )}
          </div>
          <button
            className="sidebar-toggle-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            title="Toggle Sidebar"
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`sidebar-nav-item ${activeSection === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveSection('overview')}
          >
            <span className="nav-icon">📊</span>
            {isSidebarOpen && <span>Overview</span>}
          </button>

          <button
            className={`sidebar-nav-item ${activeSection === 'deploy' ? 'active' : ''}`}
            onClick={() => setActiveSection('deploy')}
          >
            <span className="nav-icon">🚀</span>
            {isSidebarOpen && <span>Deploy Mission</span>}
          </button>

          <button
            className={`sidebar-nav-item ${activeSection === 'explorer' ? 'active' : ''}`}
            onClick={() => setActiveSection('explorer')}
          >
            <span className="nav-icon">🔍</span>
            {isSidebarOpen && <span>Task Explorer</span>}
          </button>

          <button
            className={`sidebar-nav-item ${activeSection === 'wallet' ? 'active' : ''}`}
            onClick={() => setActiveSection('wallet')}
          >
            <span className="nav-icon">💎</span>
            {isSidebarOpen && <span>Credit Wallet</span>}
          </button>

          <button
            className={`sidebar-nav-item ${activeSection === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveSection('settings')}
          >
            <span className="nav-icon">⚙️</span>
            {isSidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => navigate('/')} className="sidebar-footer-btn back-site-btn">
            <span>🌐</span>
            {isSidebarOpen && <span>Back to Website</span>}
          </button>
          <button onClick={handleLogout} className="sidebar-footer-btn logout-btn">
            <span>🚪</span>
            {isSidebarOpen && <span>Disconnect Wallet</span>}
          </button>
        </div>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <div className="dashboard-main-area">
        {/* Top Header Bar */}
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <h2>
              {activeSection === 'overview' && 'Mission Telemetry & Overview'}
              {activeSection === 'deploy' && 'Deploy Autonomous Agent / Specialist'}
              {activeSection === 'explorer' && 'Hedera On-Chain Task Explorer'}
              {activeSection === 'wallet' && 'CreditToken Wallet & Smart Escrow'}
              {activeSection === 'settings' && 'Account & Node Settings'}
            </h2>
          </div>

          <div className="topbar-right">
            <div className="topbar-credit-pill">
              <span className="pill-label">Credits:</span>
              <span className="pill-val font-mono">{userData?.credits || '0'} CT</span>
            </div>

            <div className="topbar-wallet-pill" onClick={() => copyToClipboard(signer?.address || '')} title="Click to copy address">
              <span className="badge-dot pulse-dot" />
              <span className="font-mono">{formatAddr(signer?.address)}</span>
            </div>
          </div>
        </header>

        {/* Global Banner for Messages */}
        {message && (
          <div className="dashboard-banner-container">
            <div className={`alert-banner ${message.includes('✅') || message.includes('🎉') || message.includes('🎁') ? 'alert-success' : message.includes('❌') || message.includes('Error') ? 'alert-error' : 'alert-info'} animate-fade-in`}>
              <span>ℹ️</span>
              <div>{message}</div>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="dashboard-content-body">
          {/* 1. OVERVIEW SECTION */}
          {activeSection === 'overview' && (
            <div className="overview-view animate-fade-in">
              <div className="grid-4 stats-metrics-grid">
                <div className="glass-card metric-card">
                  <span className="metric-icon">💎</span>
                  <div className="metric-info">
                    <span className="metric-label">Available Balance</span>
                    <span className="metric-value font-mono">{userData?.credits || '0'} CT</span>
                  </div>
                </div>

                <div className="glass-card metric-card">
                  <span className="metric-icon">⚡</span>
                  <div className="metric-info">
                    <span className="metric-label">Hedera Finality</span>
                    <span className="metric-value font-mono">&lt; 2.5s</span>
                  </div>
                </div>

                <div className="glass-card metric-card">
                  <span className="metric-icon">🤖</span>
                  <div className="metric-info">
                    <span className="metric-label">Active Sandbox Fleet</span>
                    <span className="metric-value font-mono">100% Online</span>
                  </div>
                </div>

                <div className="glass-card metric-card">
                  <span className="metric-icon">📜</span>
                  <div className="metric-info">
                    <span className="metric-label">Consensus Protocol</span>
                    <span className="metric-value font-mono">aBFT EVM</span>
                  </div>
                </div>
              </div>

              {/* Identity & Details Card */}
              <div className="grid-2 overview-details-grid">
                <div className="glass-card details-card">
                  <h3>Sovereign Account Telemetry</h3>
                  <div className="detail-rows">
                    <div className="detail-row">
                      <span className="row-key">Username:</span>
                      <span className="row-val">{userData?.username || 'Specialist'}</span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">Email Hash Bound:</span>
                      <span className="row-val">{userData?.email || 'N/A'}</span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">EVM Public Key:</span>
                      <span className="row-val font-mono copyable" onClick={() => copyToClipboard(signer?.address || '')}>
                        {signer?.address || 'N/A'} 📋
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">Registration Epoch:</span>
                      <span className="row-val font-mono">
                        {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'Active'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass-card details-card highlight">
                  <h3>Smart Escrow Telemetry</h3>
                  <div className="detail-rows">
                    <div className="detail-row">
                      <span className="row-key">Network:</span>
                      <span className="row-val badge badge-emerald font-mono">Hedera Testnet (296)</span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">LotTracker Registry:</span>
                      <span className="row-val font-mono">{formatAddr(CONTRACT_ADDRESSES.LOT_TRACKER)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">CreditToken Contract:</span>
                      <span className="row-val font-mono">{formatAddr(CONTRACT_ADDRESSES.CREDIT_TOKEN)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="row-key">Current Allowance:</span>
                      <span className="row-val font-mono text-emerald">{currentAllowance} CT Approved</span>
                    </div>
                  </div>

                  <div className="overview-card-actions">
                    <button onClick={() => setActiveSection('deploy')} className="btn btn-primary btn-sm">
                      Deploy New Mission 🚀
                    </button>
                    <button onClick={handleClaimFaucet} disabled={isFauceting} className="btn btn-outline btn-sm">
                      {isFauceting ? 'Claiming...' : 'Claim Faucet Credits 🎁'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. DEPLOY MISSION SECTION */}
          {activeSection === 'deploy' && (
            <div className="deploy-view animate-fade-in">
              <div className="glass-card deploy-form-card">
                <div className="deploy-card-header">
                  <h3>Configure & Dispatch Workforce Mission</h3>
                  <p>Deploys a verified task instance via the on-chain smart contract with automatic token approval.</p>
                </div>

                <form onSubmit={handleDeployMission} className="deploy-form">
                  <div className="form-group">
                    <label className="form-label">Mission / Task Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Distributed E-Commerce Price Monitor"
                      value={missionData.name}
                      onChange={(e) => setMissionData({ ...missionData, name: e.target.value })}
                      className="form-input"
                      disabled={isDeploying}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Workforce / Agent Type</label>
                    <select
                      value={missionData.executorType}
                      onChange={(e) => setMissionData({ ...missionData, executorType: e.target.value })}
                      className="form-select"
                      disabled={isDeploying}
                    >
                      <option value="Puppeteer-Headless-Node-v2">Puppeteer Headless Worker (Basic - 5 CT/hr)</option>
                      <option value="Selenium-Chromium-Grid">Selenium Multi-Browser Grid (Intermediate - 12 CT/hr)</option>
                      <option value="LLM-Reasoning-Swarm">Autonomous LLM Reasoning Swarm (Advanced - 25 CT/hr)</option>
                      <option value="Senior-Contract-Auditor">Senior Human Smart Contract Auditor (Expert - 75 CT/hr)</option>
                    </select>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label">Execution Target Date</label>
                      <input
                        type="date"
                        required
                        value={missionData.date}
                        onChange={(e) => setMissionData({ ...missionData, date: e.target.value })}
                        className="form-input"
                        disabled={isDeploying}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Compute Sandbox Cluster</label>
                      <input
                        type="text"
                        required
                        value={missionData.location}
                        onChange={(e) => setMissionData({ ...missionData, location: e.target.value })}
                        className="form-input"
                        disabled={isDeploying}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Metadata URI / Payload Spec (IPFS or Hash)</label>
                    <input
                      type="text"
                      required
                      value={missionData.metadataURI}
                      onChange={(e) => setMissionData({ ...missionData, metadataURI: e.target.value })}
                      className="form-input font-mono"
                      disabled={isDeploying}
                    />
                  </div>

                  <div className="escrow-summary-box">
                    <div className="escrow-rate">
                      <span>Deployment Fee:</span>
                      <strong className="font-mono text-emerald">1 CreditToken (CT)</strong>
                    </div>
                    <div className="escrow-notice">
                      * Tokens are held in smart contract escrow and settled upon verified completion on Hedera.
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isDeploying || !signer}
                    className="btn btn-primary btn-lg full-width"
                  >
                    {isDeploying ? 'Dispatching to Hedera EVM...' : 'Confirm & Deploy On-Chain ⚡'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* 3. TASK EXPLORER SECTION */}
          {activeSection === 'explorer' && (
            <div className="explorer-view animate-fade-in">
              <div className="glass-card explorer-search-card">
                <h3>Lookup Immutable Task Proof</h3>
                <p>Query Hedera Hashgraph smart contract records by Task ID (`pull` view function).</p>

                <form onSubmit={handleCheckTask} className="explorer-search-form">
                  <input
                    type="text"
                    required
                    placeholder="Enter numeric Task ID (e.g. 1)"
                    value={checkTaskId}
                    onChange={(e) => setCheckTaskId(e.target.value)}
                    className="form-input font-mono"
                    disabled={isChecking}
                  />
                  <button type="submit" disabled={isChecking} className="btn btn-primary">
                    {isChecking ? 'Querying...' : 'Fetch Record 🔍'}
                  </button>
                </form>
              </div>

              {taskResult && (
                <div className="task-result-container animate-fade-in">
                  {taskResult.notFound ? (
                    <div className="glass-card result-not-found">
                      <h4>Task #{taskResult.taskId} Not Found</h4>
                      <p>No verified record exists with this ID on the current LotTracker contract.</p>
                    </div>
                  ) : (
                    <div className="glass-card task-proof-card highlight">
                      <div className="proof-header">
                        <div>
                          <span className="badge badge-emerald font-mono">STATUS: {taskResult.status}</span>
                          <h3>Task #{taskResult.taskId}: {taskResult.name}</h3>
                        </div>
                        <span className="font-mono text-muted">{new Date(taskResult.manufactureDate).toLocaleDateString()}</span>
                      </div>

                      <div className="proof-grid">
                        <div className="proof-item">
                          <span className="proof-key">Executor / Worker Type:</span>
                          <span className="proof-val">{taskResult.executorType}</span>
                        </div>
                        <div className="proof-item">
                          <span className="proof-key">Assigned Sandbox Node:</span>
                          <span className="proof-val font-mono">{taskResult.location}</span>
                        </div>
                        <div className="proof-item">
                          <span className="proof-key">Current Handler Address:</span>
                          <span className="proof-val font-mono copyable" onClick={() => copyToClipboard(taskResult.handler)}>
                            {taskResult.handler} 📋
                          </span>
                        </div>
                        <div className="proof-item">
                          <span className="proof-key">Owner Address:</span>
                          <span className="proof-val font-mono copyable" onClick={() => copyToClipboard(taskResult.owner)}>
                            {taskResult.owner} 📋
                          </span>
                        </div>
                        <div className="proof-item full-span">
                          <span className="proof-key">Metadata Payload URI:</span>
                          <span className="proof-val font-mono text-cyan">{taskResult.metadataURI}</span>
                        </div>
                      </div>

                      {taskResult.history && taskResult.history.length > 0 && (
                        <div className="proof-history-section">
                          <h5>On-Chain Custody History</h5>
                          <div className="history-timeline">
                            {taskResult.history.map((addr, idx) => (
                              <div key={idx} className="history-node font-mono">
                                <span>Epoch {idx + 1}:</span>
                                <code>{addr}</code>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 4. CREDIT WALLET SECTION */}
          {activeSection === 'wallet' && (
            <div className="wallet-view animate-fade-in">
              <div className="grid-2 wallet-cards-grid">
                <div className="glass-card wallet-card highlight">
                  <div className="wallet-card-top">
                    <h3>CreditToken (CT) Balance</h3>
                    <span className="badge badge-emerald font-mono">ERC-20</span>
                  </div>
                  <div className="wallet-balance-display">
                    <span className="balance-num font-mono">{userData?.credits || '0'}</span>
                    <span className="balance-symbol">CT</span>
                  </div>
                  <p className="wallet-desc">Utility tokens used for settling automated tasks and renting specialists.</p>
                  <button
                    onClick={handleClaimFaucet}
                    disabled={isFauceting}
                    className="btn btn-primary full-width"
                  >
                    {isFauceting ? 'Claiming 100 CT...' : 'Request 100 Free Testnet Tokens 🎁'}
                  </button>
                </div>

                <div className="glass-card wallet-card">
                  <div className="wallet-card-top">
                    <h3>Smart Escrow Allowance</h3>
                    <span className="badge badge-cyan font-mono">Active</span>
                  </div>
                  <div className="wallet-balance-display">
                    <span className="balance-num font-mono">{currentAllowance}</span>
                    <span className="balance-symbol">CT Approved</span>
                  </div>
                  <p className="wallet-desc">Permits the LotTracker smart contract to escrow fees when deploying tasks.</p>
                  <button
                    onClick={async () => {
                      if (creditTokenContract && contract) {
                        try {
                          setIsApproving(true);
                          const lotAddress = await contract.getAddress();
                          const tx = await creditTokenContract.approve(lotAddress, parseUnits('1000', 18));
                          await tx.wait();
                          fetchAllowance();
                          if (setMessage) setMessage('✅ 1,000 CT allowance approved successfully!');
                        } catch (err) {
                          if (setMessage) setMessage(`Approval error: ${err.message}`);
                        } finally {
                          setIsApproving(false);
                        }
                      }
                    }}
                    disabled={isApproving}
                    className="btn btn-outline full-width"
                  >
                    {isApproving ? 'Approving...' : 'Re-Approve 1,000 CT Allowance 🛡️'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 5. SETTINGS SECTION */}
          {activeSection === 'settings' && (
            <div className="settings-view animate-fade-in">
              <div className="glass-card settings-card">
                <h3>Console Preferences & Session</h3>
                <div className="settings-list">
                  <div className="settings-item">
                    <div>
                      <h5>Hedera RPC Provider</h5>
                      <p className="font-mono text-muted">https://testnet.hashio.io/api</p>
                    </div>
                    <span className="badge badge-emerald font-mono">CONNECTED</span>
                  </div>

                  <div className="settings-item">
                    <div>
                      <h5>Smart Contract Verification Hash</h5>
                      <p className="font-mono text-muted">0xdbc22b309b0c46e43c08d39c7f8acf119e091651</p>
                    </div>
                    <span className="badge badge-cyan font-mono">VERIFIED</span>
                  </div>

                  <div className="settings-item">
                    <div>
                      <h5>Local Session Storage</h5>
                      <p>Persists user authentication state locally in browser.</p>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline btn-sm">
                      Clear Session Cache
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

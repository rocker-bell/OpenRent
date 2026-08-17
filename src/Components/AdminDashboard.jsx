import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CONTRACT_ADDRESSES } from '../config/contracts.js';
import '../Styles/dashboard.css';

export default function AdminDashboard({ userData, signer, contract, creditTokenContract, authContract }) {
  const navigate = useNavigate();
  const [targetUserAddress, setTargetUserAddress] = useState('');
  const [userBanStatus, setUserBanStatus] = useState(null);
  const [adminMessage, setAdminMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Check ban status on chain
  const checkUserStatus = async (e) => {
    e.preventDefault();
    if (!authContract) {
      setAdminMessage('Auth contract not initialized. Connect wallet.');
      return;
    }
    const addr = targetUserAddress.trim();
    if (!addr.startsWith('0x') || addr.length !== 42) {
      setAdminMessage('Please provide a valid 42-character EVM address.');
      return;
    }

    setIsProcessing(true);
    try {
      const isBanned = await authContract.getBannedStatus(addr);
      setUserBanStatus(isBanned);
      setAdminMessage(`Address status checked: ${isBanned ? '🔴 BANNED' : '🟢 ACTIVE / AUTHORIZED'}`);
    } catch (err) {
      console.error('Admin status check error:', err);
      setAdminMessage(`Error checking address: ${err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Ban User
  const handleBanUser = async () => {
    if (!authContract || !signer) return;
    setIsProcessing(true);
    try {
      setAdminMessage(`Sending ban transaction for ${targetUserAddress}...`);
      const tx = await authContract.banUser(targetUserAddress.trim());
      await tx.wait();
      setUserBanStatus(true);
      setAdminMessage(`✅ Address ${targetUserAddress.substring(0, 8)}... successfully banned on-chain.`);
    } catch (err) {
      console.error('Ban error:', err);
      setAdminMessage(`Ban error: ${err.reason || err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Unban User
  const handleUnbanUser = async () => {
    if (!authContract || !signer) return;
    setIsProcessing(true);
    try {
      setAdminMessage(`Sending unban transaction for ${targetUserAddress}...`);
      const tx = await authContract.unbanUser(targetUserAddress.trim());
      await tx.wait();
      setUserBanStatus(false);
      setAdminMessage(`✅ Address ${targetUserAddress.substring(0, 8)}... successfully unbanned on-chain.`);
    } catch (err) {
      console.error('Unban error:', err);
      setAdminMessage(`Unban error: ${err.reason || err.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="dashboard-layout-root">
      {/* Topbar */}
      <div className="dashboard-main-area">
        <header className="dashboard-topbar">
          <div className="topbar-left">
            <h2>🛡️ OpenRent Protocol Administration Console</h2>
          </div>
          <div className="topbar-right">
            <Link to="/Dashboard" className="btn btn-outline btn-sm">
              Switch to Client Console
            </Link>
            <Link to="/" className="btn btn-secondary btn-sm">
              Public Website
            </Link>
          </div>
        </header>

        {adminMessage && (
          <div className="dashboard-banner-container">
            <div className={`alert-banner ${adminMessage.includes('✅') ? 'alert-success' : adminMessage.includes('Error') ? 'alert-error' : 'alert-info'} animate-fade-in`}>
              <span>ℹ️</span>
              <div>{adminMessage}</div>
            </div>
          </div>
        )}

        <div className="dashboard-content-body">
          {/* Metrics */}
          <div className="grid-4 stats-metrics-grid">
            <div className="glass-card metric-card">
              <span className="metric-icon">🌐</span>
              <div className="metric-info">
                <span className="metric-label">Consensus Network</span>
                <span className="metric-value font-mono">Hedera 296</span>
              </div>
            </div>

            <div className="glass-card metric-card">
              <span className="metric-icon">🛡️</span>
              <div className="metric-info">
                <span className="metric-label">Smart Contracts</span>
                <span className="metric-value font-mono">3 Verified</span>
              </div>
            </div>

            <div className="glass-card metric-card">
              <span className="metric-icon">⚡</span>
              <div className="metric-info">
                <span className="metric-label">Runner Capacity</span>
                <span className="metric-value font-mono">500 Nodes</span>
              </div>
            </div>

            <div className="glass-card metric-card">
              <span className="metric-icon">💎</span>
              <div className="metric-info">
                <span className="metric-label">Settlement Standard</span>
                <span className="metric-value font-mono">ERC-20 (CT)</span>
              </div>
            </div>
          </div>

          {/* User Moderation Section */}
          <div className="grid-2 overview-details-grid">
            <div className="glass-card details-card">
              <h3>User Authorization & Moderation</h3>
              <p className="text-secondary" style={{ marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                Inspect sovereign user address registration, verify on-chain permission status, or execute protocol bans via <code>UserAuthABI</code>.
              </p>

              <form onSubmit={checkUserStatus} className="explorer-search-form" style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  required
                  placeholder="Enter target 0x EVM Address"
                  value={targetUserAddress}
                  onChange={(e) => {
                    setTargetUserAddress(e.target.value);
                    setUserBanStatus(null);
                  }}
                  className="form-input font-mono"
                  disabled={isProcessing}
                />
                <button type="submit" disabled={isProcessing} className="btn btn-primary">
                  Inspect Address
                </button>
              </form>

              {userBanStatus !== null && (
                <div className="glass-card" style={{ padding: '1.25rem', background: 'rgba(11,15,25,0.7)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className="font-mono">Status:</span>
                    <span className={`badge ${userBanStatus ? 'badge-rose' : 'badge-emerald'} font-mono`}>
                      {userBanStatus ? '🔴 BANNED FROM PROTOCOL' : '🟢 ACTIVE & AUTHORIZED'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    {userBanStatus ? (
                      <button onClick={handleUnbanUser} disabled={isProcessing} className="btn btn-primary btn-sm full-width">
                        Unban Address on Hedera 🔓
                      </button>
                    ) : (
                      <button onClick={handleBanUser} disabled={isProcessing} className="btn btn-outline btn-sm full-width" style={{ borderColor: '#f43f5e', color: '#f43f5e' }}>
                        Ban Address from Protocol 🚫
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Smart Contract Registry Details */}
            <div className="glass-card details-card highlight">
              <h3>Verified Contract Deployments</h3>
              <div className="detail-rows">
                <div className="detail-row">
                  <span className="row-key">UserAuth Address:</span>
                  <span className="row-val font-mono">{CONTRACT_ADDRESSES.USER_AUTH}</span>
                </div>
                <div className="detail-row">
                  <span className="row-key">CreditToken (CT):</span>
                  <span className="row-val font-mono">{CONTRACT_ADDRESSES.CREDIT_TOKEN}</span>
                </div>
                <div className="detail-row">
                  <span className="row-key">LotTracker Registry:</span>
                  <span className="row-val font-mono">{CONTRACT_ADDRESSES.LOT_TRACKER}</span>
                </div>
                <div className="detail-row">
                  <span className="row-key">Hedera JSON-RPC:</span>
                  <span className="row-val font-mono text-cyan">https://testnet.hashio.io/api</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
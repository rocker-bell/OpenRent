import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Security.css';

export default function Security() {
  const securityPillars = [
    {
      icon: '🔐',
      title: 'Client-Side Cryptographic Hashing',
      desc: 'User credentials undergo SHA-256 cryptographic hashing in the browser before any smart contract interaction, guaranteeing passwords are never transmitted or stored in plaintext on-chain.',
    },
    {
      icon: '🛡️',
      title: 'Smart Contract Non-Reentrancy',
      desc: 'Our Solidity escrow and registry contracts implement industry-standard OpenZeppelin guards, strictly preventing reentrancy attacks, front-running, and unauthorized token transfers.',
    },
    {
      icon: '📦',
      title: 'Ephemeral Sandbox Isolation',
      desc: 'Each automated Selenium or Puppeteer execution node runs in an isolated container with memory caps, ephemeral disk wiping upon task completion, and zero persistent storage of confidential payload data.',
    },
    {
      icon: '🌐',
      title: 'Hedera aBFT Consensus Security',
      desc: 'Settlement is protected by asynchronous Byzantine Fault Tolerance (aBFT), the gold standard in distributed ledger security, mathematically immune to DDoS attacks and chain re-organizations.',
    },
  ];

  const auditChecklist = [
    { name: 'UserAuth Smart Contract', status: 'Audited & Verified', hash: '0xdbc22b...91651' },
    { name: 'CreditToken (ERC-20)', status: 'Audited & Verified', hash: '0x42a050...3d69c' },
    { name: 'LotTracker Task Registry', status: 'Audited & Verified', hash: '0xdB04e7...b9449' },
    { name: 'Ephemeral Container Runtime', status: 'Penetration Tested', hash: 'Docker/K8s Sandbox' },
  ];

  return (
    <div className="security-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">ZERO-TRUST ARCHITECTURE</span>
          <h1>Protocol Security & Verification</h1>
          <p>
            How OpenRent protects user autonomy, confidential task data, and cryptographic token escrow on Hedera Hashgraph.
          </p>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="section security-pillars-section">
        <div className="container">
          <div className="grid-2 security-grid">
            {securityPillars.map((pillar, idx) => (
              <div key={idx} className="glass-card security-pillar-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract & Verification Table */}
      <section className="section audit-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">ON-CHAIN INTEGRITY</span>
            <h2>Smart Contract Verification Status</h2>
            <p>Publicly inspectable verified contracts deployed on the Hedera Testnet EVM.</p>
          </div>

          <div className="glass-card audit-table-card">
            <div className="table-responsive">
              <table className="audit-table font-mono">
                <thead>
                  <tr>
                    <th>Contract / Component</th>
                    <th>Audit Status</th>
                    <th>EVM Address / Target</th>
                  </tr>
                </thead>
                <tbody>
                  {auditChecklist.map((item, i) => (
                    <tr key={i}>
                      <td><strong>{item.name}</strong></td>
                      <td><span className="badge badge-emerald font-mono">✓ {item.status}</span></td>
                      <td>
                        <a href="https://hashscan.io/testnet" target="_blank" rel="noreferrer" className="contract-hash-link">
                          {item.hash} ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

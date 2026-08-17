import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Features.css';

export default function Features() {
  const coreFeatures = [
    {
      icon: '⚡',
      title: 'Sub-Second Hedera Settlement',
      tag: 'HEDERA HASHGRAPH',
      tagClass: 'badge-emerald',
      description: 'Leverages Hedera EVM and consensus services to settle tasks in under 2.5 seconds with predictable sub-cent transaction costs and instant finality.',
    },
    {
      icon: '🔒',
      title: 'Sandboxed Compute Isolation',
      tag: 'SECURITY & ISOLATION',
      tagClass: 'badge-cyan',
      description: 'Every AI agent and automation runtime executes inside ephemeral, memory-isolated Docker containers with restricted network egress and zero data leakage.',
    },
    {
      icon: '💎',
      title: 'CreditToken Smart Escrow',
      tag: 'ERC-20 ESCROW',
      tagClass: 'badge-indigo',
      description: 'Rent resources with native CreditTokens. Funds remain protected in smart contract escrow and are released incrementally as verified execution checkpoints complete.',
    },
    {
      icon: '🤖',
      title: 'Headless Browser Fleet',
      tag: 'SELENIUM & PUPPETEER',
      tagClass: 'badge-emerald',
      description: 'Deploy high-concurrency headless browser clusters capable of handling dynamic JavaScript single-page applications, CAPTCHA avoidance, and complex workflows.',
    },
    {
      icon: '📜',
      title: 'Immutable On-Chain Proofs',
      tag: 'AUDITABILITY',
      tagClass: 'badge-cyan',
      description: 'Each mission prompt, execution hash, and artifact digest is permanently sealed on the Hedera distributed ledger, viewable on HashScan in real-time.',
    },
    {
      icon: '🔑',
      title: 'Decentralized Cryptographic Auth',
      tag: 'SHA-256 & WEB3',
      tagClass: 'badge-indigo',
      description: 'Client-side SHA-256 password hashing combined with MetaMask signature verification ensures you retain full sovereign control of your account credentials.',
    },
  ];

  return (
    <div className="features-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-cyan">CAPABILITY BLUEPRINT</span>
          <h1>Engineered for Autonomous Scale</h1>
          <p>
            Discover the high-performance blockchain architecture and automation toolchains powering the OpenRent decentralized marketplace.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section features-grid-section">
        <div className="container">
          <div className="grid-3 features-card-grid">
            {coreFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card feature-display-card">
                <div className="feature-card-top">
                  <div className="feature-icon-badge">{feat.icon}</div>
                  <span className={`badge ${feat.tagClass}`}>{feat.tag}</span>
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive Architecture Feature Callout */}
      <section className="section feature-callout-section">
        <div className="container">
          <div className="glass-card feature-callout-card highlight">
            <div className="callout-content">
              <span className="badge badge-emerald">ZERO TRADITIONAL KYC</span>
              <h2>True Sovereign Workforce Delegation</h2>
              <p>
                No credit cards, no geographic barriers, and no vendor lock-in. Connect with any Web3 wallet, approve CreditTokens via standard ERC-20 functions, and command powerful automated resources globally.
              </p>
              <div className="callout-btn-row">
                <Link to="/Demo" className="btn btn-primary">
                  Launch Console & Connect
                </Link>
                <Link to="/technology" className="btn btn-secondary">
                  Read Technical Whitepaper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

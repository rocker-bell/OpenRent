import React from 'react';
import { Link } from 'react-router-dom';
import HederaLogo from '../assets/hedera-logo.png';
import '../Styles/Technology.css';

export default function Technology() {
  const techStack = [
    {
      title: 'Hedera Hashgraph EVM',
      tag: 'CONSENSUS & SETTLEMENT',
      tagClass: 'badge-emerald',
      desc: 'Hedera uses the Hashgraph consensus algorithm (aBFT) offering 10,000+ TPS, 100% mathematical finality in < 2.5s, and micro-penny predictable fees.',
      points: ['Chain ID: 0x128 (296)', 'aBFT Bank-Grade Security', 'Carbon Negative Compute', 'EVM Compatibility Layer'],
    },
    {
      title: 'Solidity Smart Contracts',
      tag: 'PROTOCOL LAYER',
      tagClass: 'badge-cyan',
      desc: 'Robust smart contract architecture enforcing decentralized user authentication, ERC-20 credit token escrow, and tamper-proof task registries.',
      points: ['ERC-20 Token Standard', 'Non-reentrant Escrow', 'Event Emission for Real-Time Indexing', 'Granular Role-Based Access Control'],
    },
    {
      title: 'Selenium & Puppeteer Cluster',
      tag: 'EXECUTION WORKFORCE',
      tagClass: 'badge-indigo',
      desc: 'High-density containerized browser automation engines capable of headless navigation, multi-viewport rendering, and automated complex tasks.',
      points: ['Dynamic SPA Crawling', 'Isolated Docker Sandboxes', 'Automated Session Recovery', 'Multi-Browser Parity'],
    },
    {
      title: 'SHA-256 Cryptographic Auth',
      tag: 'SECURITY & SOVEREIGNTY',
      tagClass: 'badge-emerald',
      desc: 'Zero-knowledge inspired credential pipeline. Passwords are never sent plaintext—they are hashed client-side with SHA-256 before on-chain registration.',
      points: ['Client-Side Hashing', 'MetaMask Signature Validation', 'Immutable Address Binding', 'Session Integrity'],
    },
  ];

  return (
    <div className="tech-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">ARCHITECTURE & STACK</span>
          <h1>Decentralized Technology Foundation</h1>
          <p>
            An in-depth look at the hybrid blockchain and automation pipeline powering OpenRent.
          </p>
        </div>
      </section>

      {/* Hedera Banner */}
      <section className="section hedera-feature-section">
        <div className="container">
          <div className="glass-card hedera-banner-card highlight">
            <div className="hedera-banner-grid">
              <div className="hedera-text-col">
                <span className="badge badge-emerald">ANCHORED ON HEDERA</span>
                <h2>Enterprise Public Distributed Ledger</h2>
                <p>
                  OpenRent leverages Hedera Hashgraph to avoid Ethereum gas volatility and Solana chain stalls. Hedera provides the reliability required for enterprise-grade autonomous agent settlement.
                </p>
                <div className="hedera-stats-row font-mono">
                  <div className="h-stat">
                    <span className="h-val">&lt; 2.5s</span>
                    <span className="h-lbl">Finality</span>
                  </div>
                  <div className="h-stat">
                    <span className="h-val">$0.0001</span>
                    <span className="h-lbl">Tx Cost</span>
                  </div>
                  <div className="h-stat">
                    <span className="h-val">10,000+</span>
                    <span className="h-lbl">TPS</span>
                  </div>
                </div>
              </div>
              <div className="hedera-logo-col">
                <img src={HederaLogo} alt="Hedera Hashgraph" className="hedera-brand-img animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Breakdown */}
      <section className="section tech-breakdown-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">STACK COMPONENTS</span>
            <h2>Core Technological Pillars</h2>
            <p>A layered architecture ensuring deterministic compute, verifiable settlement, and total isolation.</p>
          </div>

          <div className="grid-2 tech-pillars-grid">
            {techStack.map((item, idx) => (
              <div key={idx} className="glass-card tech-pillar-card">
                <div className="pillar-header">
                  <h3>{item.title}</h3>
                  <span className={`badge ${item.tagClass}`}>{item.tag}</span>
                </div>
                <p className="pillar-desc">{item.desc}</p>
                <div className="pillar-points-list">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="point-row">
                      <span className="point-bullet">▹</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Architecture Snippet */}
      <section className="section code-architecture-section">
        <div className="container">
          <div className="glass-card code-arch-card">
            <div className="code-arch-header">
              <h4>Smart Contract Task Dispatch Flow</h4>
              <span className="font-mono badge badge-emerald">Solidity 0.8.20</span>
            </div>
            <pre className="code-block font-mono">
{`// SPDX-License-Identifier: MIT
contract OpenRentTaskRegistry {
    // Escrow transfer of ERC20 CreditTokens
    function executeRent(
        string calldata missionName,
        string calldata executorType,
        uint256 durationHours,
        string calldata metadataURI
    ) external payable returns (uint256 taskId) {
        uint256 requiredFee = durationHours * RATE_PER_HOUR;
        creditToken.transferFrom(msg.sender, address(this), requiredFee);
        
        taskId = nextTaskId++;
        tasks[taskId] = Task({
            lotId: taskId,
            name: missionName,
            currentHandler: msg.sender,
            manufacturer: executorType,
            manufactureDate: block.timestamp,
            currentOwner: msg.sender,
            currentLocation: "Hedera-Sandbox-Node",
            status: TaskStatus.Active,
            metadataURI: metadataURI
        });
        emit TaskDispatched(taskId, msg.sender, requiredFee);
    }
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

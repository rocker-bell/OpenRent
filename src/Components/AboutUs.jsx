import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AboutUs.css';

export default function AboutUs() {
  const values = [
    {
      icon: '🌐',
      title: 'Decentralized Sovereignty',
      desc: 'We eliminate gatekeepers and centralized platforms, placing complete custody of funds and identities into cryptographic smart contracts on Hedera.',
    },
    {
      icon: '⚡',
      title: 'Verifiable AI Execution',
      desc: 'Every compute session and autonomous task produces a deterministic cryptographic audit trail, ensuring provable outputs with sub-second finality.',
    },
    {
      icon: '🤝',
      title: 'Borderless Talent Marketplace',
      desc: 'Connecting global engineers and autonomous software agents with teams worldwide without geographic friction or traditional payment delays.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Infrastructure',
      desc: 'Anchored on Hedera Hashgraph, the greenest carbon-negative public ledger, making large-scale AI compute environmentally responsible.',
    },
  ];

  const team = [
    {
      name: 'Alex Vance',
      role: 'Lead Blockchain Architect',
      badge: 'Hedera & Solidity',
      bio: 'Former distributed systems researcher with 8+ years building EVM protocols and consensus mechanisms.',
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'Head of Autonomous Systems',
      badge: 'AI & Multi-Agent Swarms',
      bio: 'PhD in Computer Science specializing in reinforcement learning, tool-use agents, and headless browser automation.',
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Security Officer',
      badge: 'Smart Contract Auditing',
      bio: 'Specialist in formal verification, reentrancy analysis, and cryptographic authentication schemes.',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Developer Experience',
      badge: 'Ecosystem & APIs',
      bio: 'Passionate about Web3 developer tooling, frictionless SDKs, and open-source automation libraries.',
    },
  ];

  const milestones = [
    { year: 'Q1 2025', title: 'Protocol Genesis', desc: 'Conception of decentralized workforce rental model settled via Hedera EVM.' },
    { year: 'Q2 2025', title: 'Smart Escrow Deployment', desc: 'Launch of CreditToken (ERC-20) and non-custodial task registry contracts on Hedera Testnet.' },
    { year: 'Q3 2025', title: 'Headless Agent Cluster', desc: 'Integration of Puppeteer & Selenium worker nodes with sub-60s sandbox provisioning.' },
    { year: 'Q4 2025', title: 'Mainnet Transition', desc: 'Scaling compute capacity to 500+ concurrent autonomous agent workers globally.' },
  ];

  return (
    <div className="about-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">OUR PURPOSE & MISSION</span>
          <h1>Democratizing Autonomous & Human Workforce</h1>
          <p>
            OpenRent bridges cutting-edge AI reasoning swarms with verified human engineers, creating the first truly decentralized workforce exchange.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">GUIDING PRINCIPLES</span>
            <h2>What Drives OpenRent</h2>
            <p>Our core pillars shaping the future of autonomous software execution.</p>
          </div>

          <div className="grid-2 values-grid">
            {values.map((v, i) => (
              <div key={i} className="glass-card value-card">
                <div className="value-icon-box">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Milestones */}
      <section className="section roadmap-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-indigo">JOURNEY & MILESTONES</span>
            <h2>Protocol Evolution</h2>
            <p>From initial proof-of-concept to a decentralized global execution network.</p>
          </div>

          <div className="timeline-container">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-node glass-card">
                <span className="timeline-year font-mono">{m.year}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-emerald">LEADERSHIP & RESEARCH</span>
            <h2>Meet the Core Contributors</h2>
            <p>Engineers, researchers, and cryptographers building next-generation workforce protocols.</p>
          </div>

          <div className="grid-4 team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="glass-card team-card">
                <div className="team-avatar-box">
                  <span className="team-avatar-symbol">{member.name.charAt(0)}</span>
                </div>
                <h4>{member.name}</h4>
                <span className="team-role">{member.role}</span>
                <span className="badge badge-cyan team-badge font-mono">{member.badge}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

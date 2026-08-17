import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/LandingPage.css';

export default function LandingPage({ userData }) {
  const navigate = useNavigate();

  // Interactive Rental Simulator State
  const [rentType, setRentType] = useState('ai'); // 'ai' or 'human'
  const [tier, setTier] = useState('intermediate'); // 'basic', 'intermediate', 'advanced'
  const [hours, setHours] = useState(10);

  // Rate definitions (Credit Tokens & USD per hour)
  const rates = {
    ai: {
      basic: { token: 5, usd: 1.99, name: 'Basic AI Autonomous Agent', speed: 'Ultra-Fast (Headless)' },
      intermediate: { token: 12, usd: 4.99, name: 'Intermediate AI Pipeline', speed: 'High Compute (Selenium/Puppeteer)' },
      advanced: { token: 25, usd: 9.99, name: 'Advanced Reasoning & LLM Agent', speed: 'GPU Cluster & Deep Analysis' },
    },
    human: {
      basic: { token: 15, usd: 9.99, name: 'Verified Junior Specialist', speed: 'Standard Business Hours' },
      intermediate: { token: 35, usd: 24.99, name: 'Senior Automation Engineer', speed: 'Dedicated Sprint Capacity' },
      advanced: { token: 75, usd: 49.99, name: 'Principal Smart Contract Architect', speed: 'Direct Consultation & Execution' },
    },
  };

  const currentRate = rates[rentType][tier];
  const totalTokens = currentRate.token * hours;
  const totalUSD = (currentRate.usd * hours).toFixed(2);

  const handleStartRent = () => {
    if (userData?.address) {
      navigate('/Dashboard', { state: { selectedTier: tier, selectedType: rentType, hours } });
    } else {
      navigate('/Demo', { state: { from: '/Dashboard' } });
    }
  };

  return (
    <div className="landing-page-root">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-glow-blob blob-1" />
        <div className="hero-glow-blob blob-2" />

        <div className="container hero-container">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-dot pulse-dot" />
              <span>HEDERA HASHGRAPH EVM • DECENTRALIZED WORKFORCE</span>
            </div>

            <h1 className="hero-title">
              Rent On-Demand <span className="gradient-text">AI Agents</span> & Elite Human Specialists
            </h1>

            <p className="hero-subtitle">
              Scale your development, data scraping, and automation pipelines with verifiable, sandboxed agents. Settled with micro-second Hedera consensus and native CreditTokens.
            </p>

            <div className="hero-cta-group">
              <button onClick={handleStartRent} className="btn btn-primary btn-lg hero-btn" id="hero-cta-primary">
                <span>{userData?.address ? 'Go to Client Console' : 'Launch App & Connect'}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <Link to="/services" className="btn btn-secondary btn-lg" id="hero-cta-services">
                Explore Services
              </Link>
            </div>

            {/* Live Stats Strip */}
            <div className="hero-stats-grid">
              <div className="stat-card">
                <span className="stat-number">100K+</span>
                <span className="stat-desc">Tasks Executed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">&lt; 2.5s</span>
                <span className="stat-desc">Consensus Finality</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">$0.0001</span>
                <span className="stat-desc">Avg. Settlement Fee</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">99.99%</span>
                <span className="stat-desc">Sandbox Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rental Cost Simulator */}
          <div className="hero-simulator-col">
            <div className="simulator-card glass-card highlight">
              <div className="simulator-header">
                <div className="simulator-title-group">
                  <span className="sim-badge">INTERACTIVE SIMULATOR</span>
                  <h3>Configure & Rent Workforce</h3>
                </div>
                <div className="sim-network-status">
                  <span className="badge-dot pulse-dot" />
                  <span>Hedera Live</span>
                </div>
              </div>

              {/* Workforce Mode Toggle */}
              <div className="sim-toggle-row">
                <button
                  className={`sim-toggle-btn ${rentType === 'ai' ? 'active' : ''}`}
                  onClick={() => setRentType('ai')}
                  type="button"
                >
                  🤖 Autonomous AI Agent
                </button>
                <button
                  className={`sim-toggle-btn ${rentType === 'human' ? 'active' : ''}`}
                  onClick={() => setRentType('human')}
                  type="button"
                >
                  👤 Human Specialist
                </button>
              </div>

              {/* Complexity Tier Selection */}
              <div className="sim-tier-group">
                <label className="sim-label">Complexity Tier</label>
                <div className="sim-tier-buttons">
                  <button
                    className={`tier-btn ${tier === 'basic' ? 'selected' : ''}`}
                    onClick={() => setTier('basic')}
                    type="button"
                  >
                    <span className="tier-name">Basic</span>
                    <span className="tier-rate">{rates[rentType].basic.token} CT/hr</span>
                  </button>
                  <button
                    className={`tier-btn ${tier === 'intermediate' ? 'selected' : ''}`}
                    onClick={() => setTier('intermediate')}
                    type="button"
                  >
                    <span className="tier-name">Intermediate</span>
                    <span className="tier-rate">{rates[rentType].intermediate.token} CT/hr</span>
                  </button>
                  <button
                    className={`tier-btn ${tier === 'advanced' ? 'selected' : ''}`}
                    onClick={() => setTier('advanced')}
                    type="button"
                  >
                    <span className="tier-name">Advanced</span>
                    <span className="tier-rate">{rates[rentType].advanced.token} CT/hr</span>
                  </button>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="sim-slider-group">
                <div className="slider-header-row">
                  <label className="sim-label">Duration / Compute Hours</label>
                  <span className="slider-value-pill">{hours} Hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="sim-range-slider"
                />
                <div className="slider-min-max">
                  <span>1 hr</span>
                  <span>50 hrs</span>
                  <span>100 hrs</span>
                </div>
              </div>

              {/* Summary Calculation */}
              <div className="sim-cost-summary">
                <div className="cost-row">
                  <span className="cost-label">Allocation:</span>
                  <span className="cost-spec">{currentRate.name}</span>
                </div>
                <div className="cost-row">
                  <span className="cost-label">Execution Speed:</span>
                  <span className="cost-spec speed-spec">{currentRate.speed}</span>
                </div>
                <div className="cost-divider" />
                <div className="cost-total-row">
                  <div className="total-tokens">
                    <span className="total-label">Estimated Cost</span>
                    <span className="token-amount gradient-text">{totalTokens} CreditTokens</span>
                  </div>
                  <div className="total-fiat">
                    <span className="fiat-amount">~${totalUSD} USD</span>
                  </div>
                </div>
              </div>

              {/* Direct Rent Action Button */}
              <button
                onClick={handleStartRent}
                className="btn btn-primary btn-lg full-width sim-submit-btn"
                id="simulator-deploy-btn"
              >
                Deploy Instant Rental
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-TIER SERVICE MATRIX */}
      <section className="section services-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-emerald">TASK CATALOG</span>
            <h2>Tailored Workforce For Any Task</h2>
            <p>From automated data extraction to full-stack decentralized architecture, select the exact capability you need.</p>
          </div>

          <div className="grid-3 services-cards-grid">
            {/* Card 1: Basic Tasks */}
            <div className="glass-card service-tier-card">
              <div className="service-card-top">
                <div className="service-icon-box basic-icon">⚡</div>
                <span className="tier-tag">TIER 01</span>
              </div>
              <h3>Basic Tasks</h3>
              <p className="tier-desc">Automated, repeatable micro-tasks executed with high throughput and instant turnaround.</p>
              <div className="price-tag-row">
                <span className="price-amount">$1.99</span>
                <span className="price-unit">/ hr (5 CT)</span>
              </div>
              <ul className="tier-features-list">
                <li><span>✓</span> Automated Data Entry & ETL</li>
                <li><span>✓</span> Multi-target Web Scraping</li>
                <li><span>✓</span> Content Cleansing & Normalization</li>
                <li><span>✓</span> Real-time Price Monitoring</li>
                <li><span>✓</span> Simple Bot Troubleshooting</li>
              </ul>
              <Link to="/services" className="btn btn-outline full-width">
                View Basic Capabilities
              </Link>
            </div>

            {/* Card 2: Intermediate Tasks (Featured) */}
            <div className="glass-card service-tier-card featured-tier">
              <div className="featured-ribbon">MOST POPULAR</div>
              <div className="service-card-top">
                <div className="service-icon-box intermediate-icon">🤖</div>
                <span className="tier-tag">TIER 02</span>
              </div>
              <h3>Intermediate Tasks</h3>
              <p className="tier-desc">Complex automation scripts, headless browser pipelines, and supervised workflow execution.</p>
              <div className="price-tag-row">
                <span className="price-amount">$4.99</span>
                <span className="price-unit">/ hr (12 CT)</span>
              </div>
              <ul className="tier-features-list">
                <li><span>✓</span> Puppeteer & Selenium Web Automation</li>
                <li><span>✓</span> API Integrations & Webhook Hubs</li>
                <li><span>✓</span> Machine Learning Inference Scripts</li>
                <li><span>✓</span> Technical Report Generation</li>
                <li><span>✓</span> Automated UI Test Suites</li>
              </ul>
              <Link to="/services" className="btn btn-primary full-width">
                Deploy Intermediate Agent
              </Link>
            </div>

            {/* Card 3: Advanced Tasks */}
            <div className="glass-card service-tier-card">
              <div className="service-card-top">
                <div className="service-icon-box advanced-icon">🔮</div>
                <span className="tier-tag">TIER 03</span>
              </div>
              <h3>Advanced Tasks</h3>
              <p className="tier-desc">Expert-level system design, smart contract auditing, and autonomous multi-agent orchestration.</p>
              <div className="price-tag-row">
                <span className="price-amount">$9.99</span>
                <span className="price-unit">/ hr (25 CT)</span>
              </div>
              <ul className="tier-features-list">
                <li><span>✓</span> Hedera EVM Smart Contract Auditing</li>
                <li><span>✓</span> Deep Learning Model Fine-Tuning</li>
                <li><span>✓</span> Multi-Agent Distributed Swarms</li>
                <li><span>✓</span> Full-Stack DevOps & Cloud Infra</li>
                <li><span>✓</span> Custom Security Verification</li>
              </ul>
              <Link to="/services" className="btn btn-outline full-width">
                View Advanced Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (PIPELINE) */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">EXECUTION WORKFLOW</span>
            <h2>Frictionless Decentralized Rental in 4 Steps</h2>
            <p>Trustless execution powered by smart contract escrow and immutable Hedera consensus.</p>
          </div>

          <div className="grid-4 workflow-grid">
            <div className="workflow-step-card glass-card">
              <div className="step-badge">01</div>
              <h4>Connect Wallet</h4>
              <p>Link MetaMask to Hedera Testnet. No central KYC or traditional card authorizations needed.</p>
            </div>

            <div className="workflow-step-card glass-card">
              <div className="step-badge">02</div>
              <h4>Select Capacity</h4>
              <p>Choose an AI Agent runtime or Human Specialist, define your mission objectives, and allocate hours.</p>
            </div>

            <div className="workflow-step-card glass-card">
              <div className="step-badge">03</div>
              <h4>Smart Escrow</h4>
              <p>Deposit CreditTokens in the on-chain smart contract. Funds are released only as verified work finishes.</p>
            </div>

            <div className="workflow-step-card glass-card">
              <div className="step-badge">04</div>
              <h4>Inspect Proof</h4>
              <p>Receive live logs, verifiable artifacts, and on-chain Hedera execution proofs in your client console.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HEDERA HASHGRAPH & AUTOMATION SHOWCASE */}
      <section className="section tech-showcase-section">
        <div className="container">
          <div className="tech-showcase-card glass-card">
            <div className="tech-showcase-left">
              <span className="badge badge-emerald">ENTERPRISE GRADE INFRASTRUCTURE</span>
              <h2>Why OpenRent is Built on Hedera Hashgraph</h2>
              <p>
                Unlike legacy chains with fluctuating gas spikes, Hedera offers predictable sub-cent transaction costs, asynchronous Byzantine Fault Tolerant (aBFT) consensus, and micro-second finality.
              </p>

              <div className="tech-perks-list">
                <div className="perk-item">
                  <div className="perk-bullet">⚡</div>
                  <div>
                    <h5>Sub-Second Finality</h5>
                    <p>Transactions settle in under 2.5 seconds with 100% mathematical consensus certainty.</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-bullet">🛡️</div>
                  <div>
                    <h5>Immutable Proof of Execution</h5>
                    <p>Every rented session, prompt hash, and deliverable state is logged on the Hedera consensus service.</p>
                  </div>
                </div>

                <div className="perk-item">
                  <div className="perk-bullet">🌱</div>
                  <div>
                    <h5>Carbon-Negative Compute</h5>
                    <p>Hedera is the greenest public ledger, consuming less energy than a standard VISA swipe.</p>
                  </div>
                </div>
              </div>

              <div className="tech-showcase-actions">
                <Link to="/technology" className="btn btn-primary">
                  Explore Architecture Specs
                </Link>
                <Link to="/security" className="btn btn-secondary">
                  Security Model
                </Link>
              </div>
            </div>

            {/* Right: Interactive Terminal Preview */}
            <div className="tech-terminal-wrapper">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="term-dot dot-red" />
                  <span className="term-dot dot-yellow" />
                  <span className="term-dot dot-green" />
                </div>
                <span className="terminal-title">openrent-agent-node-04 // Hedera EVM</span>
              </div>
              <div className="terminal-body font-mono">
                <p className="term-line"><span className="term-prompt">$</span> openrent deploy --agent=PuppeteerPro --chain=hedera_296</p>
                <p className="term-line term-success">[OK] Initializing Hedera Provider via JSON-RPC: 0x128</p>
                <p className="term-line term-dim">[INFO] Verifying CreditToken Allowance for contract 0xdB04e7...</p>
                <p className="term-line term-success">[OK] Allowance Approved: 1,000 CT (Tx: 0x8f2a...7c9b)</p>
                <p className="term-line term-info">[RUN] Spawning Headless Chromium Worker #084...</p>
                <p className="term-line term-info">[RUN] Executing Automated Web Scraping Pipeline...</p>
                <p className="term-line term-success">[DONE] 12,450 records extracted & sanitized</p>
                <p className="term-line term-highlight">[PROVED] Consensus Hash: 0x3e490b0c46e43c08d39c7f8acf...</p>
                <p className="term-line"><span className="term-cursor">_</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card glass-card">
            <div className="cta-content">
              <h2>Ready to Deploy Autonomous Workforce on Hedera?</h2>
              <p>Connect your Web3 wallet in seconds, test our faucet with 100 free CreditTokens, and launch your first AI agent or human specialist.</p>
              <div className="cta-btn-group">
                <Link to="/Demo" className="btn btn-primary btn-lg" id="cta-bottom-launch">
                  Get Started Now 🚀
                </Link>
                <Link to="/pricing" className="btn btn-secondary btn-lg" id="cta-bottom-pricing">
                  Compare Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
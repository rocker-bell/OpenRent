import React from 'react';
import '../Styles/Terms.css';

export default function Terms() {
  return (
    <div className="legal-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">LEGAL FRAMEWORK</span>
          <h1>Terms of Service</h1>
          <p>Last Updated: May 2025 • Rules governing participation in the OpenRent decentralized marketplace.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="glass-card legal-card">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the OpenRent platform, connecting your Web3 wallet, or dispatching smart contract transactions, you agree to be bound by these Terms of Service. If you disagree, do not connect your wallet or deploy workforce resources.
            </p>

            <h2>2. Non-Custodial Smart Contract Escrow</h2>
            <p>
              OpenRent operates via autonomous Solidity smart contracts on the Hedera EVM. Token transfers, rental deposits, and payouts are governed strictly by deterministic code on the blockchain. You acknowledge that you retain sole responsibility for managing your private keys and approving contract allowances.
            </p>

            <h2>3. Permitted Autonomous Agent & Specialist Usage</h2>
            <p>
              Workforce compute (including headless browser workers, AI reasoning agents, and human specialists) may only be used for lawful purposes. You strictly agree not to use OpenRent resources for malicious scraping, DDoS attacks, unauthorized intrusion, bypass of access controls, or copyright infringement.
            </p>

            <h2>4. CreditTokens (ERC-20) Utility Disclosures</h2>
            <p>
              CreditTokens (CT) function solely as utility tokens for computing and settling service fees within the OpenRent ecosystem. CreditTokens do not represent securities, shares, or ownership rights in any centralized entity.
            </p>

            <h2>5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The OpenRent protocol is provided on an "AS IS" and "AS AVAILABLE" basis. While our smart contracts undergo auditing, decentralized networks may encounter unexpected latency or third-party node disruptions. OpenRent contributors shall not be liable for any indirect or consequential damages.
            </p>

            <h2>6. Protocol Modifications</h2>
            <p>
              OpenRent reserves the right to upgrade interface implementations and smart contract logic in accordance with protocol governance procedures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

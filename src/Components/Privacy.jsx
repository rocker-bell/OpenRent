import React from 'react';
import '../Styles/Privacy.css';

export default function Privacy() {
  return (
    <div className="legal-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">DATA SOVEREIGNTY</span>
          <h1>Privacy Policy</h1>
          <p>Last Updated: May 2025 • How OpenRent handles decentralized cryptographic data.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="glass-card legal-card">
            <h2>1. Decentralized Principles & No Personal Data Harvesting</h2>
            <p>
              OpenRent is a non-custodial decentralized marketplace protocol. We do not maintain traditional databases containing your legal name, physical address, or credit card numbers. Your primary identifier on OpenRent is your cryptographic public wallet address (e.g. on the Hedera Testnet).
            </p>

            <h2>2. On-Chain Ledger Transparency</h2>
            <p>
              Please note that all interactions involving smart contract calls—including user registration, CreditToken transfers, task escrow deposits, and status checks—are immutably broadcast to the Hedera Hashgraph public ledger. While we do not collect personal identifying information, on-chain transaction history is publicly viewable via explorers like HashScan.
            </p>

            <h2>3. Client-Side Password Hashing</h2>
            <p>
              When utilizing optional username and password registration on the UserAuth contract, your password undergoes SHA-256 cryptographic hashing locally on your machine. Plaintext passwords never leave your browser memory and are never transmitted over network wires or stored in contract state.
            </p>

            <h2>4. Ephemeral Compute & Sandbox Execution</h2>
            <p>
              When autonomous AI agents or headless Selenium/Puppeteer workers execute automated tasks, compute containers are provisioned in ephemeral sandbox environments. Artifacts and logs generated during sessions are delivered directly to the requesting client and wiped from runner nodes upon container teardown.
            </p>

            <h2>5. Local Storage & Client State</h2>
            <p>
              OpenRent stores minimal session tokens (such as your connected wallet address, username, and cached credit counter) in your browser's local storage (`localStorage`) solely to maintain session state across page refreshes. You can clear this anytime by disconnecting your wallet or clearing your browser cache.
            </p>

            <h2>6. Protocol Updates & Contact</h2>
            <p>
              For questions regarding protocol privacy or to report any potential security concerns, reach out to our team at <code>privacy@openrent.network</code>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

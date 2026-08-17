import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top Footer: Brand & Newsletter */}
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo footer-logo">
              <div className="logo-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-title">Open<span className="brand-accent">Rent</span></span>
                <span className="network-subtext">HEDERA EVM</span>
              </div>
            </Link>
            <p className="footer-tagline">
              The next-generation decentralized marketplace for on-demand AI autonomous agents and verified human specialists. Fast, transparent, and settled via Hedera Hashgraph.
            </p>
            <div className="network-badge-box">
              <span className="badge-dot pulse-dot" />
              <span>Settled on Hedera Testnet (Chain ID 296)</span>
            </div>
          </div>

          <div className="footer-newsletter-col">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-desc">Get the latest on autonomous AI agents, Hedera smart contract updates, and platform releases.</p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input newsletter-input"
                  id="footer-newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-btn" id="footer-newsletter-btn">
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <div className="newsletter-success animate-fade-in">
                  ✓ Thank you for subscribing to OpenRent updates!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Middle Footer: Links Matrix */}
        <div className="footer-links-grid">
          <div className="footer-link-group">
            <h5 className="footer-group-title">Marketplace</h5>
            <ul className="footer-link-list">
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/features">Core Features</Link></li>
              <li><Link to="/pricing">Pricing & Plans</Link></li>
              <li><Link to="/technology">Technology Stack</Link></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h5 className="footer-group-title">Platform</h5>
            <ul className="footer-link-list">
              <li><Link to="/Demo">Connect Wallet / Demo</Link></li>
              <li><Link to="/Dashboard">Client Dashboard</Link></li>
              <li><Link to="/admin_dashboard">Admin Console</Link></li>
              <li><a href="https://hashscan.io/testnet" target="_blank" rel="noreferrer">Hedera Explorer ↗</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h5 className="footer-group-title">Company</h5>
            <ul className="footer-link-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Research & Blog</Link></li>
              <li><Link to="/careers">Careers & Hiring</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h5 className="footer-group-title">Security & Legal</h5>
            <ul className="footer-link-list">
              <li><Link to="/security">Security Architecture</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer: Copyright & Status */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} OpenRent Protocol. Decentralized workforce infrastructure.
          </div>
          <div className="footer-status-pill">
            <span className="status-indicator-green" />
            <span>Hedera EVM Consensus: 100% Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

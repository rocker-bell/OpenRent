import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Pricing.css';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const isAnnual = billingCycle === 'annual';

  const faqs = [
    {
      q: 'What is a CreditToken (CT) and how does it work?',
      a: 'CreditToken is an ERC-20 compatible utility token deployed on the Hedera Testnet EVM. You can acquire tokens via our on-chain faucet or by swapping on DEXes to fund your autonomous agent runs and specialist rentals.',
    },
    {
      q: 'How does the Pay-As-You-Go escrow settlement work?',
      a: 'When launching a mission, CreditTokens are temporarily locked in the smart contract escrow. As the agent completes milestones and submits execution proofs, tokens are settled on-chain. Unused compute hours are automatically returned.',
    },
    {
      q: 'Can I cancel an active agent rental session?',
      a: 'Yes, you can pause or terminate an active container instance directly from your Client Dashboard. Any remaining unspent escrowed balance is credited immediately back to your address.',
    },
    {
      q: 'Is there a free trial or testnet faucet?',
      a: 'Yes! Every new wallet registered via our Web3 onboarding portal receives 100 complimentary test CreditTokens to test agent deployments without any upfront cost.',
    },
  ];

  return (
    <div className="pricing-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">TRANSPARENT VALUE</span>
          <h1>Predictable Decentralized Pricing</h1>
          <p>
            Choose between flexible Pay-As-You-Go CreditToken micro-billing or dedicated monthly compute capacity.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="billing-toggle-container">
            <button
              className={`billing-btn ${!isAnnual ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`billing-btn ${isAnnual ? 'active' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing <span className="discount-pill">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section pricing-cards-section">
        <div className="container">
          <div className="grid-3 pricing-plans-grid">
            {/* Plan 1: Starter / Pay-As-You-Go */}
            <div className="glass-card pricing-plan-card">
              <span className="plan-tag font-mono">ON-DEMAND</span>
              <h3 className="plan-name">Pay-As-You-Go</h3>
              <p className="plan-desc">Perfect for testing automations, web scraping, and occasional agent runs.</p>
              <div className="plan-price-box">
                <span className="price-val">$0</span>
                <span className="price-freq">/ month</span>
              </div>
              <div className="plan-rate-sub">Pay 5 - 25 CT per active compute hour</div>
              <ul className="plan-features-list">
                <li><span>✓</span> 100 Free Test Credits on Signup</li>
                <li><span>✓</span> Access to Basic & Intermediate Agents</li>
                <li><span>✓</span> 2 Concurrent Browser Sandboxes</li>
                <li><span>✓</span> Community Support on Discord</li>
                <li><span>✓</span> Real-time Hedera HashScan Proofs</li>
              </ul>
              <Link to="/Demo" className="btn btn-outline full-width">
                Get Started Free ⚡
              </Link>
            </div>

            {/* Plan 2: Pro Developer (Featured) */}
            <div className="glass-card pricing-plan-card featured-plan highlight">
              <div className="popular-badge">MOST POPULAR</div>
              <span className="plan-tag font-mono">DEVELOPER & STARTUPS</span>
              <h3 className="plan-name">Pro Workforce</h3>
              <p className="plan-desc">For engineering teams delegating continuous scraping, ETL, and automated workflows.</p>
              <div className="plan-price-box">
                <span className="price-val">{isAnnual ? '$23.99' : '$29.99'}</span>
                <span className="price-freq">/ month</span>
              </div>
              <div className="plan-rate-sub">Includes 150 CreditTokens + Priority Queues</div>
              <ul className="plan-features-list">
                <li><span>✓</span> Everything in Pay-As-You-Go</li>
                <li><span>✓</span> Access to Advanced LLM & Reasoning Swarms</li>
                <li><span>✓</span> 10 Concurrent Puppeteer/Selenium Nodes</li>
                <li><span>✓</span> Priority Dispatch Execution Queue</li>
                <li><span>✓</span> REST API & Webhook Dispatch Triggers</li>
                <li><span>✓</span> Dedicated Discord Support Channel</li>
              </ul>
              <Link to="/Demo" className="btn btn-primary full-width">
                Start Pro Trial
              </Link>
            </div>

            {/* Plan 3: Enterprise Swarm */}
            <div className="glass-card pricing-plan-card">
              <span className="plan-tag font-mono">ENTERPRISE CLUSTER</span>
              <h3 className="plan-name">Custom Swarm</h3>
              <p className="plan-desc">Dedicated compute clusters, custom smart contract logic, and certified human experts.</p>
              <div className="plan-price-box">
                <span className="price-val">{isAnnual ? '$119.99' : '$149.99'}</span>
                <span className="price-freq">/ month</span>
              </div>
              <div className="plan-rate-sub">Includes 800 CreditTokens + Dedicated Nodes</div>
              <ul className="plan-features-list">
                <li><span>✓</span> Dedicated Private Mirror Node Access</li>
                <li><span>✓</span> Unlimited Concurrent Agent Containers</li>
                <li><span>✓</span> Direct Access to Principal Human Architects</li>
                <li><span>✓</span> Custom Hedera EVM Contract Deployments</li>
                <li><span>✓</span> 99.99% Guaranteed SLA & 24/7 Escrow Support</li>
              </ul>
              <Link to="/contact" className="btn btn-outline full-width">
                Contact Enterprise Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ Section */}
      <section className="section pricing-faq-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">QUESTIONS & CLARIFICATIONS</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about decentralized billing and CreditToken settlement.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item glass-card ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span>{faq.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body animate-fade-in">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

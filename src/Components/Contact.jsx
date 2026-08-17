import React, { useState } from 'react';
import '../Styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', category: 'general', subject: '', message: '' });
    }, 5000);
  };

  return (
    <div className="contact-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">DIRECT CHANNELS</span>
          <h1>Get in Touch with OpenRent</h1>
          <p>
            Have questions regarding enterprise deployments, smart contracts, or autonomous workforce integration? Our protocol team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info & Direct Channels */}
            <div className="contact-info-col">
              <div className="glass-card contact-info-card">
                <h3>Direct Channels</h3>
                <p>Reach out across our primary communication hubs for developer support and partnership discussions.</p>

                <div className="channel-list">
                  <div className="channel-item">
                    <div className="channel-icon">💬</div>
                    <div>
                      <h5>Discord Developer Hub</h5>
                      <p>Active 24/7 community, agent templates & SDK support</p>
                      <span className="channel-link">discord.gg/openrent-dev</span>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon">📢</div>
                    <div>
                      <h5>Telegram Protocol Feed</h5>
                      <p>Contract upgrades, testnet faucet announcements</p>
                      <span className="channel-link">t.me/openrent_protocol</span>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon">✉️</div>
                    <div>
                      <h5>Direct Security & Enterprise</h5>
                      <p>Priority support for high-throughput enterprise nodes</p>
                      <span className="channel-link">security@openrent.network</span>
                    </div>
                  </div>

                  <div className="channel-item">
                    <div className="channel-icon">📜</div>
                    <div>
                      <h5>Hedera Explorer</h5>
                      <p>View verified contract code & transaction telemetry</p>
                      <a href="https://hashscan.io/testnet" target="_blank" rel="noreferrer" className="channel-link font-mono">
                        0xdbc22b...91651 ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="contact-form-col">
              <div className="glass-card contact-form-card">
                <h3>Send Us a Transmission</h3>
                <p>Fill out the form below and an engineer will get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="alert-banner alert-success animate-fade-in">
                    <span>✓</span>
                    <div>
                      <strong>Transmission Received!</strong>
                      <p>Thank you for reaching out. We will review your message shortly.</p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Satoshi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="satoshi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="form-select"
                    >
                      <option value="general">General Protocol Question</option>
                      <option value="enterprise">Enterprise Custom Swarm</option>
                      <option value="smartcontract">Smart Contract & API Integration</option>
                      <option value="security">Security Vulnerability Report</option>
                      <option value="careers">Careers & Technical Contributor</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Brief topic summary"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message Details</label>
                    <textarea
                      required
                      placeholder="Describe your requirements, workload specs, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg full-width">
                    Dispatch Transmission 🚀
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

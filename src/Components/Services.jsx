import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'automation', label: 'Web & Browser Automations' },
    { id: 'ai', label: 'AI & Data Intelligence' },
    { id: 'web3', label: 'Smart Contracts & Web3' },
    { id: 'devops', label: 'DevOps & Cloud Infra' },
  ];

  const serviceItems = [
    {
      id: 's1',
      category: 'automation',
      title: 'Headless Browser Scraping Cluster',
      type: 'AI Agent Runtime',
      rate: '5 CT / hour ($1.99)',
      badge: 'Basic Tier',
      badgeClass: 'badge-emerald',
      turnaround: 'Instant (Under 60s)',
      description: 'Distributed Puppeteer & Selenium worker nodes executing high-concurrency web scraping, data normalization, and continuous monitoring.',
      skills: ['Puppeteer', 'Selenium', 'XPath/CSS', 'Proxy Rotation', 'JSON Export'],
    },
    {
      id: 's2',
      category: 'automation',
      title: 'End-to-End Workflow Automations',
      type: 'AI Agent + Scripting',
      rate: '12 CT / hour ($4.99)',
      badge: 'Intermediate Tier',
      badgeClass: 'badge-cyan',
      turnaround: '1 - 2 Hours',
      description: 'Full-stack automation pipelines connecting REST APIs, webhooks, databases, and custom business logic with automatic error recovery.',
      skills: ['Node.js / Python', 'Webhook Hubs', 'Cron Automation', 'REST APIs', 'PostgreSQL'],
    },
    {
      id: 's3',
      category: 'ai',
      title: 'Autonomous LLM Agent Deployment',
      type: 'AI Agent Swarm',
      rate: '25 CT / hour ($9.99)',
      badge: 'Advanced Tier',
      badgeClass: 'badge-indigo',
      turnaround: 'Real-time Stream',
      description: 'Multi-step autonomous reasoning agents equipped with vector databases, semantic search, and sandboxed code execution environments.',
      skills: ['LangChain / LlamaIndex', 'Vector DBs', 'RAG Pipelines', 'Function Calling', 'Embeddings'],
    },
    {
      id: 's4',
      category: 'web3',
      title: 'Hedera EVM Smart Contract Audit',
      type: 'Human Specialist',
      rate: '75 CT / hour ($49.99)',
      badge: 'Expert Human',
      badgeClass: 'badge-emerald',
      turnaround: '12 - 24 Hours',
      description: 'Comprehensive security vulnerability auditing, gas optimization, and formal verification for Solidity smart contracts deployed on Hedera.',
      skills: ['Solidity', 'Hedera EVM', 'Hardhat / Foundry', 'Slither', 'Reentrancy Proofs'],
    },
    {
      id: 's5',
      category: 'ai',
      title: 'Dataset Extraction & Synthetic Generation',
      type: 'AI Agent Runtime',
      rate: '12 CT / hour ($4.99)',
      badge: 'Intermediate Tier',
      badgeClass: 'badge-cyan',
      turnaround: '2 - 4 Hours',
      description: 'Curation of large-scale structured datasets, synthetic training pair generation, tokenization, and quality validation for fine-tuning.',
      skills: ['Pandas / NumPy', 'HuggingFace', 'Data Cleansing', 'Synthetic Data', 'EDA'],
    },
    {
      id: 's6',
      category: 'devops',
      title: 'Decentralized Node & Infra Architecture',
      type: 'Human Specialist',
      rate: '60 CT / hour ($39.99)',
      badge: 'Expert Human',
      badgeClass: 'badge-indigo',
      turnaround: 'Same Day',
      description: 'Design and deployment of highly resilient decentralized compute nodes, RPC proxies, Dockerized sandboxes, and automated CI/CD pipelines.',
      skills: ['Docker / K8s', 'Hedera Mirror Nodes', 'Terraform', 'CI/CD Pipelines', 'AWS / GCP'],
    },
  ];

  const filteredServices = activeCategory === 'all'
    ? serviceItems
    : serviceItems.filter(item => item.category === activeCategory);

  return (
    <div className="services-page-root">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">ON-DEMAND WORKFORCE CATALOG</span>
          <h1>Decentralized Services Marketplace</h1>
          <p>
            Rent high-compute autonomous AI agents or certified human engineers on an hourly or project basis. Pay per second with CreditTokens.
          </p>

          {/* Filter Pills */}
          <div className="services-filter-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="grid-3 services-catalog-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="glass-card service-catalog-card">
                <div className="service-card-header">
                  <span className={`badge ${service.badgeClass}`}>{service.badge}</span>
                  <span className="service-turnaround font-mono">⏱ {service.turnaround}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <span className="service-workforce-type font-mono">{service.type}</span>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-skills-tags">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>

                <div className="service-card-footer">
                  <div className="service-pricing-info">
                    <span className="rate-label">Settlement Rate</span>
                    <span className="rate-val font-mono">{service.rate}</span>
                  </div>
                  <Link to="/Demo" className="btn btn-primary btn-sm">
                    Rent Now ⚡
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI vs Human Comparison Matrix */}
      <section className="section comparison-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">COMPARISON GUIDE</span>
            <h2>AI Agent vs Human Specialist</h2>
            <p>Select the optimal resource type depending on your project latency, budget, and nuance requirements.</p>
          </div>

          <div className="comparison-table-wrapper glass-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Capability Attribute</th>
                  <th>Autonomous AI Agent</th>
                  <th>Human Specialist</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Startup & Deployment Time</strong></td>
                  <td><span className="tag-green">Sub-60 seconds</span> (Automated)</td>
                  <td><span className="tag-blue">15 - 30 minutes</span> (Scheduled)</td>
                </tr>
                <tr>
                  <td><strong>Best Suited For</strong></td>
                  <td>Repetitive tasks, scraping, batch compute, ETL</td>
                  <td>Architecture, contract audit, custom consulting</td>
                </tr>
                <tr>
                  <td><strong>Pricing Structure</strong></td>
                  <td>Micro-settlement per second (5 - 25 CT/hr)</td>
                  <td>Dedicated rate per hour (35 - 75 CT/hr)</td>
                </tr>
                <tr>
                  <td><strong>Execution Environment</strong></td>
                  <td>Isolated Chromium / Linux sandbox container</td>
                  <td>Secure remote encrypted workstation</td>
                </tr>
                <tr>
                  <td><strong>Settlement Verification</strong></td>
                  <td>Hedera Hashgraph cryptographic state hash</td>
                  <td>Milestone sign-off & peer verification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

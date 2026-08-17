import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Careers.css';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('all');

  const jobs = [
    {
      id: 'j1',
      title: 'Senior Hedera EVM Smart Contract Engineer',
      dept: 'Blockchain',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      experience: '5+ Years',
      desc: 'Architect and audit Solidity smart contracts, optimize gas efficiency on Hedera EVM, and design decentralized escrow mechanisms.',
    },
    {
      id: 'j2',
      title: 'Lead Autonomous AI Agent Researcher',
      dept: 'AI & ML',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      experience: '4+ Years',
      desc: 'Build tool-use orchestration swarms, multi-step LLM reasoning pipelines, and integrate headless browser toolchains.',
    },
    {
      id: 'j3',
      title: 'Distributed Infrastructure & Sandbox Specialist',
      dept: 'DevOps',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Manage high-concurrency Dockerized browser automation clusters, ephemeral worker isolation, and Hedera mirror node deployments.',
    },
    {
      id: 'j4',
      title: 'Senior Web3 Frontend Developer',
      dept: 'Engineering',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      experience: '3+ Years',
      desc: 'Craft intuitive, high-performance Web3 user interfaces using React, Ethers.js, and modern CSS design systems.',
    },
  ];

  const depts = ['all', 'Blockchain', 'AI & ML', 'DevOps', 'Engineering'];

  const filteredJobs = selectedDept === 'all'
    ? jobs
    : jobs.filter(j => j.dept === selectedDept);

  const perks = [
    { icon: '🌍', title: '100% Remote Work', desc: 'Work from anywhere in the world with flexible hours.' },
    { icon: '💎', title: 'Token Equity Grants', desc: 'Receive CreditTokens and governance incentives as part of compensation.' },
    { icon: '⚡', title: 'Cutting-Edge Stack', desc: 'Pioneer the intersection of Hedera Hashgraph and Autonomous AI agents.' },
    { icon: '📚', title: 'Annual Learning Stipend', desc: '$3,000 yearly budget for conferences, courses, and hardware.' },
  ];

  return (
    <div className="careers-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">JOIN OUR EXPEDITION</span>
          <h1>Build the Decentralized Workforce</h1>
          <p>
            Help us architect the infrastructure where human intelligence and autonomous software collaborate seamlessly.
          </p>

          <div className="careers-dept-filter">
            {depts.map((d) => (
              <button
                key={d}
                className={`filter-pill ${selectedDept === d ? 'active' : ''}`}
                onClick={() => setSelectedDept(d)}
              >
                {d === 'all' ? 'All Openings' : d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Grid */}
      <section className="section openings-section">
        <div className="container">
          <div className="openings-list">
            {filteredJobs.map((job) => (
              <div key={job.id} className="glass-card job-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta-row font-mono">
                      <span className="badge badge-emerald">{job.dept}</span>
                      <span>📍 {job.location}</span>
                      <span>⏱ {job.type}</span>
                      <span>🎓 {job.experience}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="btn btn-primary btn-sm job-apply-btn">
                    Apply Now ↗
                  </Link>
                </div>
                <p className="job-desc">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="section perks-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-cyan">CULTURE & BENEFITS</span>
            <h2>Why Build with OpenRent</h2>
            <p>We value autonomy, craftsmanship, and asynchronous collaboration.</p>
          </div>

          <div className="grid-4 perks-grid">
            {perks.map((p, i) => (
              <div key={i} className="glass-card perk-card">
                <div className="perk-icon-box">{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

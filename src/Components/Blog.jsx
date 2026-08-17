import React, { useState } from 'react';
import '../Styles/Blog.css';

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const articles = [
    {
      id: 1,
      title: 'Settling Multi-Agent Autonomous Swarms on Hedera Hashgraph EVM',
      tag: 'Hedera Ecosystem',
      date: 'May 12, 2025',
      readTime: '6 min read',
      snippet: 'How sub-second consensus finality and predictable micro-cent fees unlock continuous agent-to-agent task delegation without gas fee spikes.',
      author: 'Alex Vance',
    },
    {
      id: 2,
      title: 'Headless Browser Automation: Overcoming Modern Anti-Bot Defenses at Scale',
      tag: 'Automation & Scraping',
      date: 'Apr 28, 2025',
      readTime: '8 min read',
      snippet: 'Best practices for managing high-concurrency Puppeteer and Selenium clusters with dynamic proxy rotation and sandboxed execution profiles.',
      author: 'Dr. Elena Rostova',
    },
    {
      id: 3,
      title: 'Decentralized Identity & Zero-Knowledge Credential Pipelines for AI Agents',
      tag: 'Web3 Security',
      date: 'Apr 14, 2025',
      readTime: '5 min read',
      snippet: 'Combining client-side SHA-256 hashing with cryptographic wallet signatures to preserve agent autonomy while preventing credential leakage.',
      author: 'Marcus Chen',
    },
    {
      id: 4,
      title: 'The Tokenomics of CreditToken (ERC-20): Non-Custodial Smart Escrow Explained',
      tag: 'Hedera Ecosystem',
      date: 'Mar 30, 2025',
      readTime: '4 min read',
      snippet: 'A deep dive into how OpenRent locks and streams utility tokens based on verified milestones, returning unspent funds automatically.',
      author: 'Alex Vance',
    },
    {
      id: 5,
      title: 'Benchmarking Autonomous AI Agent Tool-Use on Real-World Enterprise Workflows',
      tag: 'Autonomous AI',
      date: 'Mar 15, 2025',
      readTime: '10 min read',
      snippet: 'Evaluating accuracy, latency, and cost-efficiency when assigning complex data engineering and reconciliation tasks to autonomous agent workers.',
      author: 'Sarah Jenkins',
    },
  ];

  const tags = ['all', 'Hedera Ecosystem', 'Automation & Scraping', 'Web3 Security', 'Autonomous AI'];

  const filteredArticles = articles.filter((art) => {
    const matchesTag = selectedTag === 'all' || art.tag === selectedTag;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="blog-page-root">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="badge badge-emerald">RESEARCH & INSIGHTS</span>
          <h1>OpenRent Engineering Blog</h1>
          <p>
            Technical articles, architectural deep-dives, and updates on autonomous workforce development and Hedera settlement.
          </p>

          {/* Search Bar */}
          <div className="blog-search-wrapper">
            <input
              type="text"
              placeholder="Search research papers and articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input blog-search-input"
            />
          </div>

          {/* Tag Filter */}
          <div className="blog-tags-row">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag === 'all' ? 'All Articles' : tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section blog-grid-section">
        <div className="container">
          <div className="grid-3 blog-cards-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="glass-card blog-card">
                <div className="blog-card-meta">
                  <span className="badge badge-emerald font-mono">{article.tag}</span>
                  <span className="blog-readtime">{article.readTime}</span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-snippet">{article.snippet}</p>
                <div className="blog-card-footer">
                  <span className="blog-author">By {article.author}</span>
                  <span className="blog-date font-mono">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

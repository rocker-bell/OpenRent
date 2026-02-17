import "../Styles/Technology.css";

export default function Technology() {
    return (
        <div className="technology-page">
            <header className="technology-header">
                <div className="container">
                    <h1>Technology Stack</h1>
                    <p>Powered by cutting-edge blockchain and automation technologies</p>
                </div>
            </header>

            <section className="technology-content">
                <div className="container">
                    <div className="tech-overview">
                        <h2>Our Technology Foundation</h2>
                        <p>
                            OpenRent is built on a modern, decentralized architecture that combines 
                            blockchain technology with advanced automation tools to deliver secure, 
                            transparent, and efficient rent services.
                        </p>
                    </div>

                    <div className="tech-stack">
                        <div className="tech-item">
                            <div className="tech-icon">⛓️</div>
                            <h3>Hedera Hashgraph</h3>
                            <p>High-performance blockchain platform for secure transactions with fast consensus and low fees</p>
                            <div className="tech-features">
                                <span className="feature-tag">High Throughput</span>
                                <span className="feature-tag">Low Latency</span>
                                <span className="feature-tag">Energy Efficient</span>
                            </div>
                        </div>

                        <div className="tech-item">
                            <div className="tech-icon">🤖</div>
                            <h3>Selenium & Puppeteer</h3>
                            <p>Advanced automation tools for RDP connections and task execution with support for multiple browsers</p>
                            <div className="tech-features">
                                <span className="feature-tag">Cross-Browser</span>
                                <span className="feature-tag">Headless</span>
                                <span className="feature-tag">Scalable</span>
                            </div>
                        </div>

                        <div className="tech-item">
                            <div className="tech-icon">🔗</div>
                            <h3>Smart Contracts</h3>
                            <p>Automated contract execution with transparent verification using Solidity and Vyper</p>
                            <div className="tech-features">
                                <span className="feature-tag">Immutable</span>
                                <span className="feature-tag">Transparent</span>
                                <span className="feature-tag">Secure</span>
                            </div>
                        </div>

                        <div className="tech-item">
                            <div className="tech-icon">📊</div>
                            <h3>Real-time Analytics</h3>
                            <p>Comprehensive monitoring and reporting dashboard with real-time data visualization</p>
                            <div className="tech-features">
                                <span className="feature-tag">Live Metrics</span>
                                <span className="feature-tag">Custom Reports</span>
                                <span className="feature-tag">Alerts</span>
                            </div>
                        </div>

                        <div className="tech-item">
                            <div className="tech-icon">⚡</div>
                            <h3>Fast RDP Connections</h3>
                            <p>High-speed remote desktop connections optimized for performance and reliability</p>
                            <div className="tech-features">
                                <span className="feature-tag">Low Latency</span>
                                <span className="feature-tag">Secure</span>
                                <span className="feature-tag">Scalable</span>
                            </div>
                        </div>

                        <div className="tech-item">
                            <div className="tech-icon">🔒</div>
                            <h3>Security Infrastructure</h3>
                            <p>Enterprise-grade security with encryption, multi-factor authentication, and threat detection</p>
                            <div className="tech-features">
                                <span className="feature-tag">End-to-End Encryption</span>
                                <span className="feature-tag">DDoS Protection</span>
                                <span className="feature-tag">Regular Audits</span>
                            </div>
                        </div>
                    </div>

                    <div className="architecture-section">
                        <h2>System Architecture</h2>
                        <div className="architecture-diagram">
                            <div className="diagram-component">
                                <div className="component-icon">🌐</div>
                                <h3>User Interface</h3>
                                <p>Responsive web interface with real-time updates</p>
                            </div>
                            <div className="diagram-component">
                                <div className="component-icon">🔄</div>
                                <h3>API Gateway</h3>
                                <p>Centralized API management and authentication</p>
                            </div>
                            <div className="diagram-component">
                                <div className="component-icon">⚙️</div>
                                <h3>Backend Services</h3>
                                <p>Core business logic and task management</p>
                            </div>
                            <div className="diagram-component">
                                <div className="component-icon">⛓️</div>
                                <h3>Blockchain Layer</h3>
                                <p>Hedera Hashgraph integration for transactions</p>
                            </div>
                            <div className="diagram-component">
                                <div className="component-icon">💾</div>
                                <h3>Database</h3>
                                <p>Distributed database for data storage</p>
                            </div>
                        </div>
                    </div>

                    <div className="benefits-section">
                        <h2>Technical Advantages</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">🚀</div>
                                <h3>Scalability</h3>
                                <p>Handle thousands of concurrent users with ease</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">💪</div>
                                <h3>Performance</h3>
                                <p>Fast transaction processing with low latency</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🎯</div>
                                <h3>Reliability</h3>
                                <p>High availability and fault tolerance</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Security</h3>
                                <p>Advanced security measures to protect your data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="technology-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

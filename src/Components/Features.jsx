import "../Styles/Features.css";

export default function Features() {
    return (
        <div className="features-page">
            <header className="features-header">
                <div className="container">
                    <h1>Key Features</h1>
                    <p>Why choose OpenRent for your renting needs</p>
                </div>
            </header>

            <section className="features-content">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">🔒</div>
                            <h3>Secure & Transparent</h3>
                            <p>All transactions are recorded on the Hedera Hashgraph blockchain for maximum security and transparency</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">⚡</div>
                            <h3>Fast & Efficient</h3>
                            <p>High-speed RDP connections powered by Selenium and Puppeteer for optimal performance</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💰</div>
                            <h3>Cost Effective</h3>
                            <p>Pay only for the resources you use with our flexible hourly pricing model</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🌐</div>
                            <h3>Global Access</h3>
                            <p>Access our services from anywhere in the world with our decentralized platform</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🔄</div>
                            <h3>Real-time Monitoring</h3>
                            <p>Track your tasks in real-time with our comprehensive monitoring dashboard</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🛡️</div>
                            <h3>Smart Contracts</h3>
                            <p>Automated task verification and payment processing using smart contracts</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🤖</div>
                            <h3>AI-Powered</h3>
                            <p>Advanced AI algorithms for efficient task execution and optimization</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">👥</div>
                            <h3>Human Expertise</h3>
                            <p>Access to qualified human experts for complex tasks requiring human judgment</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">📊</div>
                            <h3>Analytics Dashboard</h3>
                            <p>Comprehensive analytics and reporting to track your usage and performance</p>
                        </div>
                    </div>

                    <div className="features-highlight">
                        <div className="highlight-content">
                            <h2>Advanced Technology Stack</h2>
                            <p>
                                Our platform is built on cutting-edge technology to ensure the best 
                                possible experience for our users.
                            </p>
                            <div className="tech-stack">
                                <div className="tech-item">
                                    <div className="tech-icon">⛓️</div>
                                    <h3>Hedera Hashgraph</h3>
                                    <p>High-performance blockchain platform for secure transactions</p>
                                </div>
                                <div className="tech-item">
                                    <div className="tech-icon">🤖</div>
                                    <h3>Selenium & Puppeteer</h3>
                                    <p>Advanced automation tools for RDP connections and task execution</p>
                                </div>
                                <div className="tech-item">
                                    <div className="tech-icon">🔗</div>
                                    <h3>Smart Contracts</h3>
                                    <p>Automated contract execution with transparent verification</p>
                                </div>
                                <div className="tech-item">
                                    <div className="tech-icon">📊</div>
                                    <h3>Real-time Analytics</h3>
                                    <p>Comprehensive monitoring and reporting dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="features-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

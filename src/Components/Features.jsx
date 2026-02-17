import "../Styles/Features.css";
import HederaLogo from "../assets/hedera-logo.png"


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
                            <div className="feature-icon">
                                                                <img width="48" height="48" src="https://img.icons8.com/color/48/keyhole-shield.png" alt="keyhole-shield"/>

                            </div>
                            <h3>Secure & Transparent</h3>
                            <p>All transactions are recorded on the Hedera Hashgraph blockchain for maximum security and transparency</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                                                <img width="50" height="50" src="https://img.icons8.com/isometric/50/lightning-bolt.png" alt="lightning-bolt"/>

                            </div>
                            <h3>Fast & Efficient</h3>
                            <p>High-speed RDP connections powered by Selenium and Puppeteer for optimal performance</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                                                <img width="48" height="48" src="https://img.icons8.com/color/48/exchange.png" alt="exchange"/>

                            </div>
                            <h3>Cost Effective</h3>
                            <p>Pay only for the resources you use with our flexible hourly pricing model</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🌐</div>
                            <h3>Global Access</h3>
                            <p>Access our services from anywhere in the world with our decentralized platform</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                                                                                    <img width="48" height="48" src="https://img.icons8.com/color/48/connection-status-on--v1.png" alt="connection-status-on--v1"/>

                            </div>
                            <h3>Real-time Monitoring</h3>
                            <p>Track your tasks in real-time with our comprehensive monitoring dashboard</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                                                <img width="48" height="48" src="https://img.icons8.com/color/48/blockchain-technology.png" alt="blockchain-technology"/>

                            </div>
                            <h3>Smart Contracts</h3>
                            <p>Automated task verification and payment processing using smart contracts</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/bard.png" alt="bard"/>
                            </div>
                            <h3>AI-Powered</h3>
                            <p>Advanced AI algorithms for efficient task execution and optimization</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">👥</div>
                            <h3>Human Expertise</h3>
                            <p>Access to qualified human experts for complex tasks requiring human judgment</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                                                <img width="48" height="48" src="https://img.icons8.com/color/48/combo-chart--v1.png" alt="combo-chart--v1"/>

                            </div>
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
                                    <div className="tech-icon">
                                                                        <img src={HederaLogo} width="200" height="100" alt="hedera-logo" />
                                        
                                    </div>
                                    <h3>Hedera Hashgraph</h3>
                                    <p>High-performance blockchain platform for secure transactions</p>
                                </div>
                                <div className="tech-item">
                                    <div className="tech-icon">
                                                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/external-link.png" alt="external-link"/>

                                    </div>
                                    <h3>Selenium & Puppeteer</h3>
                                    <p>Advanced automation tools for RDP connections and task execution</p>
                                </div>
                                <div className="tech-item">
                                    <div className="tech-icon">
                                                                        <img width="48" height="48" src="https://img.icons8.com/flat-round/64/link--v1.png" alt="link--v1"/>

                                    </div>
                                    <h3>Smart Contracts</h3>
                                    <p>Automated contract execution with transparent verification</p>
                                </div>
                                {/* <div className="tech-item">
                                    <div className="tech-icon">
                                        
                                    </div>
                                    <h3>Real-time Analytics</h3>
                                    <p>Comprehensive monitoring and reporting dashboard</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="features-footer">
                <div className="container">
                    <p>&copy; 2026 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

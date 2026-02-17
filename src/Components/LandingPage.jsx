import "../Styles/LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landing-page">
            {/* Header */}
            <header className="header">
                <nav className="nav">
                    <div className="nav-logo">
                        <span className="logo-icon">⛓️</span>
                        <span className="logo-text">OpenRent</span>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#technology">Technology</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button className="btn-primary">Get Started</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Decentralized Rent Services<br />
                            <span className="gradient-text">Powered by Hedera Hashgraph</span>
                        </h1>
                        <p className="hero-description">
                            Rent AI or human expertise for basic, intermediate, or advanced tasks.
                            Secure, transparent, and efficient RDP connections powered by Selenium and Puppeteer.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-primary btn-large">Start Renting Now</button>
                            <button className="btn-secondary btn-large">Learn More</button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">10K+</div>
                                <div className="stat-label">Active Users</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100K+</div>
                                <div className="stat-label">Tasks Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">99.9%</div>
                                <div className="stat-label">Uptime</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-container">
                            <div className="blockchain-animation">
                                <div className="block"></div>
                                <div className="block"></div>
                                <div className="block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="container">
                    <div className="section-header">
                        <h2>Services</h2>
                        <p>Choose from a range of AI and human expertise levels for your tasks</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🔍</div>
                            <h3>Basic Tasks</h3>
                            <p>Simple automated tasks requiring basic AI capabilities</p>
                            <ul className="service-features">
                                <li>Data Entry</li>
                                <li>Web Scraping</li>
                                <li>Content Moderation</li>
                                <li>Basic Analysis</li>
                            </ul>
                            <div className="service-price">$1.99/hour</div>
                        </div>
                        <div className="service-card featured">
                            <div className="featured-badge">Most Popular</div>
                            <div className="service-icon">🤖</div>
                            <h3>Intermediate Tasks</h3>
                            <p>Complex tasks requiring advanced AI and human oversight</p>
                            <ul className="service-features">
                                <li>Advanced Data Analysis</li>
                                <li>Machine Learning</li>
                                <li>Automation Scripts</li>
                                <li>API Integration</li>
                            </ul>
                            <div className="service-price">$4.99/hour</div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🚀</div>
                            <h3>Advanced Tasks</h3>
                            <p>Expert-level tasks requiring specialized knowledge and skills</p>
                            <ul className="service-features">
                                <li>Deep Learning</li>
                                <li>Blockchain Development</li>
                                <li>Security Testing</li>
                                <li>Custom Solutions</li>
                            </ul>
                            <div className="service-price">$9.99/hour</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2>Key Features</h2>
                        <p>Why choose OpenRent for your renting needs</p>
                    </div>
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
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section id="technology" className="technology">
                <div className="container">
                    <div className="section-header">
                        <h2>Technology Stack</h2>
                        <p>Powered by cutting-edge blockchain and automation technologies</p>
                    </div>
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
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <div className="container">
                    <div className="section-header">
                        <h2>Pricing</h2>
                        <p>Flexible plans to suit your requirements</p>
                    </div>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <h3>Starter</h3>
                            <div className="price">$9.99</div>
                            <div className="period">per month</div>
                            <ul className="pricing-features">
                                <li>10 hours/month</li>
                                <li>Basic tasks only</li>
                                <li>Standard support</li>
                                <li>5 projects</li>
                                <li>API access</li>
                            </ul>
                            <button className="btn-secondary">Get Started</button>
                        </div>
                        <div className="pricing-card featured">
                            <div className="featured-badge">Popular</div>
                            <h3>Professional</h3>
                            <div className="price">$29.99</div>
                            <div className="period">per month</div>
                            <ul className="pricing-features">
                                <li>50 hours/month</li>
                                <li>All task levels</li>
                                <li>Priority support</li>
                                <li>25 projects</li>
                                <li>Advanced API access</li>
                                <li>Custom integrations</li>
                            </ul>
                            <button className="btn-primary">Get Started</button>
                        </div>
                        <div className="pricing-card">
                            <h3>Enterprise</h3>
                            <div className="price">Custom</div>
                            <div className="period">contact us</div>
                            <ul className="pricing-features">
                                <li>Unlimited hours</li>
                                <li>All task levels</li>
                                <li>24/7 support</li>
                                <li>Unlimited projects</li>
                                <li>Dedicated account manager</li>
                                <li>Custom solutions</li>
                            </ul>
                            <button className="btn-secondary">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Rental Journey?</h2>
                        <p>Join thousands of users who are already leveraging our decentralized rent services</p>
                        <div className="cta-actions">
                            <button className="btn-primary btn-large">Get Started Free</button>
                            <button className="btn-secondary btn-large">Schedule a Demo</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <div className="nav-logo">
                                <span className="logo-icon">⛓️</span>
                                <span className="logo-text">OpenRent</span>
                            </div>
                            <p>Decentralized rent services powered by Hedera Hashgraph</p>
                        </div>
                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#technology">Technology</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><a href="#security">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 OpenRent. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
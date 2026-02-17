import "../Styles/Pricing.css";

export default function Pricing() {
    return (
        <div className="pricing-page">
            <header className="pricing-header">
                <div className="container">
                    <h1>Pricing</h1>
                    <p>Flexible plans to suit your requirements</p>
                </div>
            </header>

            <section className="pricing-content">
                <div className="container">
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

                    <div className="pricing-info">
                        <h2>Why Choose OpenRent?</h2>
                        <div className="info-grid">
                            <div className="info-item">
                                {/* <div className="info-icon">💰</div> */}
                                <h3>Pay As You Go</h3>
                                <p>Only pay for the resources you use with our hourly pricing model</p>
                            </div>
                            <div className="info-item">
                                {/* <div className="info-icon">⏱️</div> */}
                                <h3>Instant Access</h3>
                                <p>Get started immediately with our fast and efficient platform</p>
                            </div>
                            <div className="info-item">
                                {/* <div className="info-icon">🔄</div> */}
                                <h3>Flexible Plans</h3>
                                <p>Upgrade or downgrade your plan at any time without penalties</p>
                            </div>
                            <div className="info-item">
                                {/* <div className="info-icon">🛡️</div> */}
                                <h3>Secure Transactions</h3>
                                <p>All payments are processed through blockchain for maximum security</p>
                            </div>
                        </div>
                    </div>

                    <div className="faq-section">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3>How does billing work?</h3>
                                <p>We use an hourly billing model, and you'll be charged for the actual time your tasks are running</p>
                            </div>
                            <div className="faq-item">
                                <h3>Can I cancel at any time?</h3>
                                <p>Yes, you can cancel your subscription at any time with no cancellation fees</p>
                            </div>
                            <div className="faq-item">
                                <h3>What payment methods do you accept?</h3>
                                <p>We accept various cryptocurrencies and traditional payment methods</p>
                            </div>
                            <div className="faq-item">
                                <h3>Is there a free trial?</h3>
                                <p>We offer a 1-hour free trial for new users to test our services</p>
                            </div>
                            <div className="faq-item">
                                <h3>How do I track my usage?</h3>
                                <p>Our real-time analytics dashboard provides detailed information about your usage</p>
                            </div>
                            <div className="faq-item">
                                <h3>What support options are available?</h3>
                                <p>We offer email support for all plans, with priority support for Professional and Enterprise users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="pricing-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

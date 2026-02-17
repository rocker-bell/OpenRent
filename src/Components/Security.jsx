import "../Styles/Security.css";

export default function Security() {
    return (
        <div className="security">
            <header className="security-header">
                <div className="container">
                    <h1>Security</h1>
                    <p>Protecting your data and transactions</p>
                </div>
            </header>

            <section className="security-content">
                <div className="container">
                    <div className="content-grid">
                        <div className="intro-section">
                            <h2>Our Commitment to Security</h2>
                            <p>
                                At OpenRent, we take security seriously. Our decentralized platform 
                                is built on cutting-edge technology to ensure the safety and 
                                confidentiality of your data and transactions.
                            </p>
                        </div>

                        <div className="security-features">
                            <div className="feature-item">
                                <div className="feature-icon">⛓️</div>
                                <h3>Blockchain Technology</h3>
                                <p>All transactions are recorded on the Hedera Hashgraph blockchain for maximum security and transparency</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🔒</div>
                                <h3>Encryption</h3>
                                <p>Your data is encrypted both in transit and at rest using industry-standard encryption protocols</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🛡️</div>
                                <h3>Smart Contracts</h3>
                                <p>Automated task verification and payment processing using smart contracts</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🔐</div>
                                <h3>Multi-Factor Authentication</h3>
                                <p>Enhanced security through multi-factor authentication for all user accounts</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">📊</div>
                                <h3>Real-time Monitoring</h3>
                                <p>Continuous monitoring of our platform for suspicious activity and threats</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🔄</div>
                                <h3>Regular Audits</h3>
                                <p>Periodic security audits to identify and address vulnerabilities</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🚫</div>
                                <h3>Fraud Detection</h3>
                                <p>Advanced fraud detection algorithms to prevent and detect fraudulent activities</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">📄</div>
                                <h3>Compliance</h3>
                                <p>Adherence to industry standards and regulatory requirements for data protection</p>
                            </div>
                        </div>

                        <div className="security-measures">
                            <h2>How We Protect You</h2>
                            <div className="measures-grid">
                                <div className="measure-item">
                                    <div className="measure-header">
                                        <div className="measure-icon">🔑</div>
                                        <h3>Account Security</h3>
                                    </div>
                                    <p>Strong password requirements, multi-factor authentication, and secure login processes</p>
                                </div>

                                <div className="measure-item">
                                    <div className="measure-header">
                                        <div className="measure-icon">💳</div>
                                        <h3>Payment Security</h3>
                                    </div>
                                    <p>Secure payment processing through blockchain technology and encrypted transactions</p>
                                </div>

                                <div className="measure-item">
                                    <div className="measure-header">
                                        <div className="measure-icon">📱</div>
                                        <h3>Data Protection</h3>
                                    </div>
                                    <p>Strict data protection measures in compliance with privacy regulations</p>
                                </div>
                            </div>
                        </div>

                        <div className="best-practices">
                            <h2>Your Security Responsibilities</h2>
                            <div className="practices-list">
                                <div className="practice-item">
                                    <div className="practice-icon">✅</div>
                                    <div className="practice-content">
                                        <h3>Use Strong Passwords</h3>
                                        <p>Create unique, complex passwords and update them regularly</p>
                                    </div>
                                </div>

                                <div className="practice-item">
                                    <div className="practice-icon">✅</div>
                                    <div className="practice-content">
                                        <h3>Enable Multi-Factor Authentication</h3>
                                        <p>Add an extra layer of security to your account</p>
                                    </div>
                                </div>

                                <div className="practice-item">
                                    <div className="practice-icon">✅</div>
                                    <div className="practice-content">
                                        <h3>Be Wary of Phishing</h3>
                                        <p>Never share your login credentials or personal information through email or unsolicited messages</p>
                                    </div>
                                </div>

                                <div className="practice-item">
                                    <div className="practice-icon">✅</div>
                                    <div className="practice-content">
                                        <h3>Keep Software Updated</h3>
                                        <p>Ensure your devices and browsers are up to date with the latest security patches</p>
                                    </div>
                                </div>

                                <div className="practice-item">
                                    <div className="practice-icon">✅</div>
                                    <div className="practice-content">
                                        <h3>Monitor Your Account</h3>
                                        <p>Regularly review your account activity and report any suspicious transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-section">
                            <div className="contact-card">
                                <h2>Reporting Security Issues</h2>
                                <p>
                                    If you discover any security vulnerabilities or issues with our 
                                    platform, please report them to us immediately.
                                </p>
                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="method-icon">📧</div>
                                        <div className="method-details">
                                            <h3>Security Email</h3>
                                            <p>security@openrent.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="security-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

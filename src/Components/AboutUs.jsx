import "../Styles/AboutUs.css";

export default function AboutUs() {
    return (
        <div className="about-us">
            <header className="about-header">
                <div className="container">
                    <h1>About OpenRent</h1>
                    <p>Revolutionizing the way you rent AI and human expertise</p>
                </div>
            </header>

            <section className="about-content">
                <div className="container">
                    <div className="content-grid">
                        <div className="content-image">
                            <div className="placeholder-image">
                                <span className="image-icon">⛓️</span>
                            </div>
                        </div>
                        <div className="content-text">
                            <h2>Our Mission</h2>
                            <p>
                                OpenRent is dedicated to democratizing access to AI and human expertise through 
                                decentralized technology. We believe that everyone should have access to 
                                powerful tools and skills without the barriers of traditional service models.
                            </p>
                            <p>
                                Powered by Hedera Hashgraph, our platform ensures secure, transparent, and 
                                efficient transactions, making renting expertise more accessible than ever before.
                            </p>
                            <div className="stats">
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
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our Team</h2>
                        <p>Experts dedicated to your success</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">👨‍💼</div>
                            <h3>John Doe</h3>
                            <p className="member-role">CEO & Founder</p>
                            <p className="member-bio">Blockchain enthusiast with 10+ years of experience in distributed systems</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">👩‍💻</div>
                            <h3>Jane Smith</h3>
                            <p className="member-role">CTO</p>
                            <p className="member-bio">AI and machine learning expert specializing in automation</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">👨‍🔬</div>
                            <h3>Mike Johnson</h3>
                            <p className="member-role">Lead Developer</p>
                            <p className="member-bio">Full-stack developer with expertise in decentralized applications</p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">👩‍🎨</div>
                            <h3>Sarah Williams</h3>
                            <p className="member-role">Design Director</p>
                            <p className="member-bio">User experience designer passionate about creating intuitive platforms</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Values</h2>
                        <p>What drives us forward</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">🔒</div>
                            <h3>Security</h3>
                            <p>Your data and transactions are protected with cutting-edge blockchain technology</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">⚡</div>
                            <h3>Efficiency</h3>
                            <p>Fast, reliable, and cost-effective solutions for your tasks</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🌐</div>
                            <h3>Accessibility</h3>
                            <p>Democratizing access to AI and human expertise worldwide</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🛡️</div>
                            <h3>Transparency</h3>
                            <p>Every transaction is recorded on the blockchain for complete visibility</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="about-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

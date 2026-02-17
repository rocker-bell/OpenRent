import "../Styles/Careers.css";

export default function Careers() {
    return (
        <div className="careers">
            <header className="careers-header">
                <div className="container">
                    <h1>Careers</h1>
                    <p>Join our team and help shape the future of renting</p>
                </div>
            </header>

            <section className="careers-content">
                <div className="container">
                    <div className="intro-section">
                        <div className="intro-text">
                            <h2>Why Work at OpenRent?</h2>
                            <p>
                                We're building the future of decentralized rent services. Join our 
                                team of passionate individuals who are revolutionizing how people 
                                access AI and human expertise.
                            </p>
                        </div>
                        <div className="benefits">
                            <div className="benefit-item">
                                <div className="benefit-icon">💰</div>
                                <h3>Competitive Salary</h3>
                                <p>We offer competitive compensation packages</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">📚</div>
                                <h3>Learning Opportunities</h3>
                                <p>Continuous learning and development programs</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🌴</div>
                                <h3>Work-Life Balance</h3>
                                <p>Flexible work hours and remote options</p>
                            </div>
                        </div>
                    </div>

                    <div className="jobs-section">
                        <h2>Open Positions</h2>
                        <div className="jobs-grid">
                            <div className="job-card">
                                <div className="job-header">
                                    <h3>Blockchain Developer</h3>
                                    <span className="job-type">Full-time</span>
                                </div>
                                <p className="job-location">Remote / San Francisco</p>
                                <p className="job-description">
                                    Develop and maintain our blockchain infrastructure using 
                                    Hedera Hashgraph technology.
                                </p>
                                <div className="job-tags">
                                    <span className="tag">Blockchain</span>
                                    <span className="tag">Hedera Hashgraph</span>
                                    <span className="tag">Smart Contracts</span>
                                </div>
                                <button className="btn-primary">Apply Now</button>
                            </div>

                            <div className="job-card">
                                <div className="job-header">
                                    <h3>AI/ML Engineer</h3>
                                    <span className="job-type">Full-time</span>
                                </div>
                                <p className="job-location">Remote / New York</p>
                                <p className="job-description">
                                    Build and optimize AI models for task automation and rent services.
                                </p>
                                <div className="job-tags">
                                    <span className="tag">Machine Learning</span>
                                    <span className="tag">AI</span>
                                    <span className="tag">Python</span>
                                </div>
                                <button className="btn-primary">Apply Now</button>
                            </div>

                            <div className="job-card">
                                <div className="job-header">
                                    <h3>Frontend Developer</h3>
                                    <span className="job-type">Full-time</span>
                                </div>
                                <p className="job-location">Remote / London</p>
                                <p className="job-description">
                                    Create intuitive user interfaces for our decentralized platform.
                                </p>
                                <div className="job-tags">
                                    <span className="tag">React</span>
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">CSS</span>
                                </div>
                                <button className="btn-primary">Apply Now</button>
                            </div>

                            <div className="job-card">
                                <div className="job-header">
                                    <h3>Product Designer</h3>
                                    <span className="job-type">Full-time</span>
                                </div>
                                <p className="job-location">Remote / Berlin</p>
                                <p className="job-description">
                                    Design user-centered experiences for our renting platform.
                                </p>
                                <div className="job-tags">
                                    <span className="tag">UX/UI</span>
                                    <span className="tag">Design</span>
                                    <span className="tag">Figma</span>
                                </div>
                                <button className="btn-primary">Apply Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="apply-section">
                        <div className="apply-content">
                            <h2>Don't See the Right Role?</h2>
                            <p>We're always looking for talented individuals to join our team.</p>
                            <button className="btn-primary btn-large">Submit Your Resume</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="careers-footer">
                <div className="container">
                    <p>&copy; 2026 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

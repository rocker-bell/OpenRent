import "../Styles/Services.css";

export default function Services() {
    return (
        <div className="services-page">
            <header className="services-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Choose from a range of AI and human expertise levels for your tasks</p>
                </div>
            </header>

            <section className="services-content">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            {/* <div className="service-icon">🔍</div> */}
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
                            {/* <div className="service-icon">🤖</div> */}
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
                            {/* <div className="service-icon">🚀</div> */}
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

                    <div className="services-info">
                        <h2>How It Works</h2>
                        <div className="info-grid">
                            <div className="info-item">
                                <div className="info-icon">1</div>
                                <h3>Choose Your Service</h3>
                                <p>Select the expertise level that matches your task requirements</p>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">2</div>
                                <h3>Define Your Task</h3>
                                <p>Provide detailed instructions and requirements for your task</p>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">3</div>
                                <h3>Monitor Progress</h3>
                                <p>Track the progress of your task in real-time</p>
                            </div>
                            <div className="info-item">
                                <div className="info-icon">4</div>
                                <h3>Review & Pay</h3>
                                <p>Review the completed task and pay securely through blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="services-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

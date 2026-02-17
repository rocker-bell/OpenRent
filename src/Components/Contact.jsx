import "../Styles/Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <header className="contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team</p>
                </div>
            </header>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>
                                Have questions about OpenRent? Our team is here to help. 
                                Reach out to us through any of the following channels.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div className="method-details">
                                        <h3>Email</h3>
                                        <p>contact@openrent.com</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">📞</div>
                                    <div className="method-details">
                                        <h3>Phone</h3>
                                        <p>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">📍</div>
                                    <div className="method-details">
                                        <h3>Address</h3>
                                        <p>123 Blockchain Street<br />San Francisco, CA 94107<br />United States</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">⏰</div>
                                    <div className="method-details">
                                        <h3>Working Hours</h3>
                                        <p>Monday - Friday: 9:00 AM - 5:00 PM PST<br />Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h3>Follow Us</h3>
                                <div className="social-icons">
                                    <a href="#" className="social-icon">🐦</a>
                                    <a href="#" className="social-icon">📘</a>
                                    <a href="#" className="social-icon">📱</a>
                                    <a href="#" className="social-icon">👥</a>
                                    <a href="#" className="social-icon">📹</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <div className="form-card">
                                <h2>Send Us a Message</h2>
                                <form className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" name="subject" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" name="message" rows="5" required></textarea>
                                    </div>

                                    <button type="submit" className="btn-primary btn-large">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="contact-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

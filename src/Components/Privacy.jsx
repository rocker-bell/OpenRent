import "../Styles/Privacy.css";

export default function Privacy() {
    return (
        <div className="privacy">
            <header className="privacy-header">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>How we protect and use your information</p>
                </div>
            </header>

            <section className="privacy-content">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information about you when you use our platform, register an account, 
                            or communicate with us. This includes:
                        </p>
                        <ul>
                            <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our platform, including task history and preferences</li>
                            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                            <li><strong>Blockchain Data:</strong> Transaction information recorded on the Hedera Hashgraph blockchain</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use your information for the following purposes:</p>
                        <ul>
                            <li>To provide and maintain our services</li>
                            <li>To process transactions and payments</li>
                            <li>To improve and personalize your experience</li>
                            <li>To communicate with you about updates and offers</li>
                            <li>To protect against fraud and enhance security</li>
                            <li>To comply with legal obligations</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>
                            We may share your information with trusted third parties in the following 
                            circumstances:
                        </p>
                        <ul>
                            <li>With service providers who assist us in delivering our services</li>
                            <li>With financial institutions for payment processing</li>
                            <li>When required by law or to respond to legal processes</li>
                            <li>To protect our rights, property, or safety</li>
                            <li>With your consent or at your direction</li>
                        </ul>

                        <h2>4. Security Measures</h2>
                        <p>
                            We implement reasonable security measures to protect your information from 
                            unauthorized access, disclosure, or modification. These include:
                        </p>
                        <ul>
                            <li>Encryption of sensitive data</li>
                            <li>Secure blockchain transactions using Hedera Hashgraph</li>
                            <li>Regular security assessments and audits</li>
                            <li>Access controls and authentication mechanisms</li>
                        </ul>

                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Object to processing of your information</li>
                            <li>Restrict processing of your information</li>
                            <li>Data portability</li>
                        </ul>

                        <h2>6. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar technologies to enhance your experience on our 
                            platform, analyze usage patterns, and improve our services. You can manage 
                            your cookie preferences through your browser settings.
                        </p>

                        <h2>7. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We will notify you of 
                            any significant changes through our platform or via email.
                        </p>

                        <h2>8. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or how we handle your 
                            information, please contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong> privacy@openrent.com<br />
                            <strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94107, USA
                        </p>
                    </div>
                </div>
            </section>

            <footer className="privacy-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

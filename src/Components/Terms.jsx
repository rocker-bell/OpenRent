import "../Styles/Terms.css";

export default function Terms() {
    return (
        <div className="terms">
            <header className="terms-header">
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Rules and regulations for using OpenRent</p>
                </div>
            </header>

            <section className="terms-content">
                <div className="container">
                    <div className="content-wrapper">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using OpenRent, you agree to be bound by these Terms of 
                            Service and all applicable laws and regulations. If you do not agree with 
                            any of these terms, you are prohibited from using or accessing this platform.
                        </p>

                        <h2>2. Description of Services</h2>
                        <p>
                            OpenRent provides a decentralized platform for renting AI and human expertise 
                            for various tasks. Our services include:
                        </p>
                        <ul>
                            <li>Access to AI-powered task automation</li>
                            <li>Human expertise for complex tasks</li>
                            <li>Blockchain-based transaction processing</li>
                            <li>Real-time task monitoring</li>
                        </ul>

                        <h2>3. User Responsibilities</h2>
                        <p>As a user of OpenRent, you agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information during registration</li>
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Not engage in any activity that may harm our platform or other users</li>
                        </ul>

                        <h2>4. Payment Terms</h2>
                        <p>
                            Payment for our services must be made in accordance with the pricing and 
                            payment terms displayed on our platform. We reserve the right to change 
                            our pricing at any time.
                        </p>
                        <ul>
                            <li>All payments are processed through secure blockchain transactions</li>
                            <li>Refunds are subject to our refund policy</li>
                            <li>We may terminate services for non-payment</li>
                        </ul>

                        <h2>5. Intellectual Property</h2>
                        <p>
                            All content on OpenRent, including but not limited to text, graphics, 
                            logos, and software, is the property of OpenRent or its content suppliers 
                            and is protected by copyright and other intellectual property laws.
                        </p>

                        <h2>6. Disclaimers</h2>
                        <p>
                            Our services are provided "as is" without any warranties, express or implied. 
                            We do not guarantee the accuracy, reliability, or availability of our services.
                        </p>

                        <h2>7. Limitation of Liability</h2>
                        <p>
                            OpenRent shall not be liable for any direct, indirect, incidental, special, 
                            or consequential damages resulting from your use of our services.
                        </p>

                        <h2>8. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your account and access to 
                            our services at any time, without prior notice, for any reason.
                        </p>

                        <h2>9. Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance 
                            with the laws of the State of California, USA.
                        </p>

                        <h2>10. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. We will 
                            notify you of any changes by posting the new Terms of Service on our platform.
                        </p>

                        <h2>11. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong> terms@openrent.com<br />
                            <strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94107, USA
                        </p>
                    </div>
                </div>
            </section>

            <footer className="terms-footer">
                <div className="container">
                    <p>&copy; 2024 OpenRent. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

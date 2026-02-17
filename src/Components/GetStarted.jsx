import "../Styles/GetStarted.css";

export default function GetStarted() {
    const handleConnectWallet = () => {
        // Metamask connection logic will go here
        console.log("Connecting to MetaMask...");
    };

    const handleGuestAccess = () => {
        // Guest access logic will go here
        console.log("Guest access...");
    };

    return (
        <div className="getStarted_wrapper">
            <div className="getStarted_container">
                <div className="getStarted_header">
                    <div className="getStarted_logo">
                        <span className="logo-icon">⛓️</span>
                        <span className="logo-text">OpenRent</span>
                    </div>
                    <div className="getStarted_title">
                        <h1>Welcome to OpenRent</h1>
                        <p>Connect your wallet to get started with our decentralized rent services</p>
                    </div>
                </div>

                <div className="getStarted_content">
                    <div className="getStarted_card">
                        <div className="getStarted_card-icon">🔐</div>
                        <h2>Connect Wallet</h2>
                        <p>Connect your MetaMask wallet to access all features and services</p>
                        <button 
                            className="getStarted_btn-primary"
                            onClick={handleConnectWallet}
                        >
                            <span className="btn-icon">🦊</span>
                            Connect MetaMask
                        </button>
                    </div>

                    <div className="getStarted_divider">
                        <span>OR</span>
                    </div>

                    <div className="getStarted_card secondary">
                        <div className="getStarted_card-icon">👤</div>
                        <h2>Continue as Guest</h2>
                        <p>Explore our platform without connecting a wallet (limited features)</p>
                        <button 
                            className="getStarted_btn-secondary"
                            onClick={handleGuestAccess}
                        >
                            <span className="btn-icon">🚪</span>
                            Guest Access
                        </button>
                    </div>
                </div>

                <div className="getStarted_features">
                    <div className="getStarted_feature">
                        <div className="feature-icon">🛡️</div>
                        <h3>Secure & Private</h3>
                        <p>Your data is encrypted and never shared without your permission</p>
                    </div>
                    <div className="getStarted_feature">
                        <div className="feature-icon">⚡</div>
                        <h3>Fast Transactions</h3>
                        <p>Experience lightning-fast blockchain transactions powered by Hedera</p>
                    </div>
                    <div className="getStarted_feature">
                        <div className="feature-icon">💰</div>
                        <h3>Low Fees</h3>
                        <p>Enjoy competitive pricing with minimal transaction costs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
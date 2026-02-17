import React, { useState, useEffect, useCallback } from 'react';
import toggleSideBar from "./images/toggle-sidebar.png";
import { useNavigate } from 'react-router-dom';
// 🟢 Import all necessary ethers v6 components
import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers'; 
import "../Styles/dashboard.css"; 

import CreditTokenABI from './CreditTokenABI.js'; 

// 🚨 IMPORTANT: This MUST be the address of your deployed CreditToken
const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c"; 

// 🟢 ACCEPT PROPS: contract and creditTokenContract are now passed from App.jsx
function Dashboard({ setUserData, setMessage, userData, signer, contract, creditTokenContract }) {
    
    // --- Component State ---
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('dashboard'); 
    const navigate = useNavigate();

    const [devisView, setDevisView] = useState('buttons'); 
    const [newProductData, setNewProductData] = useState({
        name: '', manufacturer: '', manufactureDate: '', 
        initialLocation: '', metadataURI: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    
    const [checkProductId, setCheckProductId] = useState('');
    const [checkedProductResult, setCheckedProductResult] = useState(null);
    const [feeRecipient, setFeeRecipient] = useState('...'); 
    const [contractCreditTokenAddress, setContractCreditTokenAddress] = useState('...');

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev); 

    // --- Utility Functions ---

    // 🔴 REMOVED: connectAndSetup and its calling useEffect. 
    // This logic is now correctly handled ONLY in App.jsx.

    // 💡 Fetch and log Fee Recipient and CreditToken Address on load (FIXED)
    useEffect(() => {
        const checkContractConfig = async () => {
            // 🟢 FIX: Wait for the 'contract' prop to be passed down and initialized
            if (contract && contract.interface && signer) {
                try {
                    // Use array access notation for reliability
                    const feeRecipientAddr = await contract["FEE_RECIPIENT"]();
                    const creditTokenAddr = await contract["creditToken"](); 
                    
                    setFeeRecipient(feeRecipientAddr);
                    setContractCreditTokenAddress(creditTokenAddr);

                    console.log(`DEBUG: LotTrackr FEE_RECIPIENT (from contract): ${feeRecipientAddr}`);
                    console.log(`DEBUG: Contract Credit Token Address (from contract): ${creditTokenAddr}`);
                    
                    // Check if the addresses are swapped (the deployment error)
                    if (feeRecipientAddr.toLowerCase() === creditTokenAddr.toLowerCase()) {
                        setMessage("⚠️ CRITICAL ERROR: The LotTrackr Fee Recipient is set to its own CreditToken address. All transactions will fail until you redeploy.");
                    } else if (feeRecipientAddr === ethers.ZeroAddress) {
                        setMessage("CRITICAL WARNING: LotTrackr FEE_RECIPIENT is 0x0. Fee transfers will fail!");
                    }
                } catch (error) {
                    console.error("Could not fetch contract state. Check ABI, network connection, and ensure FEE_RECIPIENT/creditToken are public view functions.", error);
                    setFeeRecipient("Error fetching - Check ABI/Network");
                    setContractCreditTokenAddress("Error fetching - Check ABI/Network");
                }
            }
        };
        checkContractConfig();
    }, [contract, signer, setMessage]); // Runs when contract/signer are initialized


    const handleLogout = () => {
        if (setUserData) setUserData(null); 
        if (setMessage) setMessage("Successfully logged out. Connect or Register to continue.");
        navigate("/", { replace: true }); 
    };

    const dateToUnixTimestamp = (dateString) => {
        if (!dateString) return 0;
        const date = new Date(dateString + 'T00:00:00Z'); 
        return Math.floor(date.getTime() / 1000);
    };
    
    const formatKey = (key) => {
        const statusMap = { '0': 'Active', '1': 'Inactive', '2': 'Transferred', '3': 'Discarded' }; 
        switch (key) {
            case 'lotId': return 'Lot ID';
            case 'name': return 'Product Name';
            case 'currentHandler': return 'Current Handler';
            case 'currentLocation': return 'Current Location';
            case 'currentOwner': return 'Current Owner Address';
            case 'manufactureDate': return 'Manufacture Date';
            case 'manufacturer': return 'Manufacturer Name';
            case 'metadataURI': return 'Metadata URI';
            case 'status': return `Status (${statusMap[checkedProductResult?.status] || 'Unknown'})`; 
            default: return key.replace(/([A-Z])/g, ' $1').replace('_', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
    }


    // --- Transaction/Read Functions ---

    // const handleAddProductSubmit = async (e) => {
    //     e.preventDefault();

    //     // ⚠️ CRITICAL CHECK: Ensure props from App.jsx are available
    //     if (!contract || !creditTokenContract || !signer) {
    //         setMessage("Error: Wallet not connected or Contracts not initialized. Please connect your wallet first.");
    //         return; 
    //     }

    //     setIsSubmitting(true);
    //     setMessage(`Preparing transaction for product ${newProductData.name}...`);

    //     try {
    //         // 1. Resolve Addresses and Prepare Amounts
    //         const lotTrackrAddress = await contract.getAddress(); 
    //         const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
            
    //         // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
    //         const fixedFeeAmount = parseUnits("1", 18); 
            
    //         // Fee for the Hedera network interaction (Small HBAR fee)
    //         const interactionFee = parseUnits("100", "gwei"); 

    //         // 2. CreditToken Approval Check
    //         setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
            
    //         // Use the creditTokenContract prop passed from App.jsx
    //         const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
            
    //         console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
    //         console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
    //         console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);

    //         if (allowance < fixedFeeAmount) {
    //             const approvalAmount = parseUnits("1000", 18); 

    //             setMessage(`Insufficient allowance. Requesting approval for ${formatUnits(approvalAmount, 18)} CreditTokens...`);
                
    //             const approvalTx = await creditTokenContract.approve(
    //                 lotTrackrAddress, 
    //                 approvalAmount 
    //             );
    //             setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
    //             await approvalTx.wait(); 
    //             setMessage("✅ Approval successful. Proceeding to product insertion.");
    //         } else {
    //             setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
    //         }

    //         // 3. Execute Insert Transaction
    //         setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
            
    //         const tx = await contract.insert(
    //             newProductData.name,
    //             newProductData.manufacturer,
    //             ethers.toBigInt(timestampInSeconds),
    //             newProductData.initialLocation,
    //             newProductData.metadataURI,
    //             { 
    //                 value: interactionFee // Pays the HBAR network fee (CRITICAL for Hedera EVM)
    //             }
    //         ); 

    //         setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

    //         const receipt = await tx.wait(); 

    //         if (receipt.status === 1) {
    //             setMessage(`✅ Product "${newProductData.name}" successfully added!`);
    //         } else {
    //             setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
    //         }

    //     } catch (error) {
    //         console.error("Error in transaction flow:", error);
            
    //         let errorMessage = error.reason || (error.data?.message || error.message);
            
    //         if (errorMessage.includes('user rejected')) {
    //              errorMessage = 'Transaction rejected by user.';
    //         } else if (errorMessage.includes('Fee transfer failed')) {
    //              errorMessage = `Transaction failed: Fee transfer failed. LIKELY CAUSE: Insufficient CreditToken balance or LotTrackr allowance is too low.`;
    //         } else if (errorMessage.includes('Insufficient CreditToken balance to qualify')) {
    //              errorMessage = `Transaction failed: You need at least 100 CreditTokens to qualify for the first transaction.`;
    //         } else if (errorMessage.includes('Send ETH to pay the interaction fee')) {
    //              errorMessage = 'Transaction failed: Missing HBAR network fee. Ensure the transaction includes a small HBAR value.';
    //         }

    //         setMessage(`Transaction failed: ${errorMessage}`);
    //     } finally {
    //         setIsSubmitting(false);
    //         setNewProductData({
    //             name: '', manufacturer: '', manufactureDate: '', 
    //             initialLocation: '', metadataURI: ''
    //         });
    //         if (activeSection === 'devis') setDevisView('buttons'); 
    //     }
    // };

    // 🚀 FULL FIXED CONTRACT CALL FOR INSERT (Write Function)
const handleAddProductSubmit = async (e) => {
    e.preventDefault();

    // 1. Check Prerequisites
    if (!contract || !creditTokenContract || !signer) {
        setMessage("Error: Wallet not connected or Contracts not initialized. Please connect your wallet first.");
        return; 
    }

    setIsSubmitting(true);
    setMessage(`Preparing transaction for product ${newProductData.name}...`);

    try {
        // 2. Resolve Addresses and Prepare Amounts
        const lotTrackrAddress = await contract.getAddress(); 
        const timestampInSeconds = dateToUnixTimestamp(newProductData.manufactureDate);
        
        // Fee for the LotTrackr contract (1 CreditToken with 18 decimals)
        const fixedFeeAmount = ethers.parseUnits("1", "ether"); 
        
        // 3. CreditToken Approval Check
        setMessage("Step 1/2: Checking/Requesting CreditToken approval...");
        
        // Use the creditTokenContract prop passed from App.jsx
        const allowance = await creditTokenContract.allowance(signer.address, lotTrackrAddress);
        
        console.log(`DEBUG: LotTrackr Address: ${lotTrackrAddress}`);
        console.log(`DEBUG: Required Fee (Wei): ${fixedFeeAmount.toString()}`);
        console.log(`DEBUG: Current Allowance (Wei): ${allowance.toString()}`);

        if (allowance < fixedFeeAmount) {
            // Approve a large amount (e.g., 1000 tokens) to minimize future approval transactions
            const approvalAmount = ethers.parseUnits("1000", "ether"); 

            setMessage(`Insufficient allowance. Requesting approval for ${formatUnits(approvalAmount, 18)} CreditTokens...`);
            
            const approvalTx = await creditTokenContract.approve(
                lotTrackrAddress, 
                approvalAmount 
            );
            setMessage(`Approval transaction sent (Hash: ${approvalTx.hash}). Waiting for confirmation...`);
            await approvalTx.wait(); 
            setMessage("✅ Approval successful. Proceeding to product insertion.");
        } else {
            setMessage("✅ Sufficient CreditToken allowance already set. Proceeding...");
        }

        // 4. Execute Insert Transaction
        setMessage(`Step 2/2: Sending 'insert' transaction for product ${newProductData.name}...`);
        
        // 🟢 FIX: REMOVED the { value: ... } object.
        // The 'insert' function is no longer payable and takes its fee via transferFrom.
        const tx = await contract.insert(
            newProductData.name,
            newProductData.manufacturer,
            ethers.toBigInt(timestampInSeconds),
            newProductData.initialLocation,
            newProductData.metadataURI
            // NO VALUE OBJECT HERE
        ); 

        setMessage(`Transaction sent (Hash: ${tx.hash}). Waiting for confirmation...`);

        const receipt = await tx.wait(); 

        if (receipt.status === 1) {
            setMessage(`✅ Product "${newProductData.name}" successfully added!`);
        } else {
            setMessage(`❌ Transaction failed (reverted). Check transaction hash: ${tx.hash}`);
        }

    } catch (error) {
        console.error("Error in transaction flow:", error);
        
        let errorMessage = error.reason || (error.data?.message || error.message);
        
        // Enhanced Error Reporting based on typical contract reverts
        if (errorMessage.includes('user rejected')) {
             errorMessage = 'Transaction rejected by user.';
        } else if (errorMessage.includes('Fee transfer failed')) {
             errorMessage = `Transaction failed: Fee transfer failed. LIKELY CAUSE: Insufficient CreditToken balance or LotTrackr allowance is too low.`;
        } else if (errorMessage.includes('Insufficient CreditToken balance to qualify')) {
             errorMessage = `Transaction failed: You need at least 100 CreditTokens to qualify for the first transaction.`;
        } else if (errorMessage.includes('unsupported addressable value')) {
             errorMessage = 'Configuration Error: LotTrackr contract address or CreditToken address is missing or invalid.';
        }

        setMessage(`Transaction failed: ${errorMessage}`);
    } finally {
        setIsSubmitting(false);
        setNewProductData({
            name: '', manufacturer: '', manufactureDate: '', 
            initialLocation: '', metadataURI: ''
        });
        if (activeSection === 'devis') setDevisView('buttons'); 
    }
};
    
    // --- The rest of your component code remains largely the same ---

    const handleCheckProductSubmit = async (e) => {
        e.preventDefault();
        
        if (!contract) {
            setMessage("Error: Contract not initialized. Please connect your wallet first.");
            return;
        }

        const tokenId = checkProductId.trim();
        if (!/^\d+$/.test(tokenId)) {
            setMessage("Error: Lot ID must be a number.");
            setCheckedProductResult(null);
            return;
        }
        
        setIsChecking(true);
        setCheckedProductResult(null); 
        setMessage(`Fetching details for Lot ID ${tokenId}...`);

        try {
            // 'pull' is a view function, no fee needed
            const [lotStruct, historyArray] = await contract.pull(ethers.toBigInt(tokenId));

            const result = {
                lotId: lotStruct.lotId.toString(),
                name: lotStruct.name,
                currentHandler: lotStruct.currentHandler,
                manufacturer: lotStruct.manufacturer,
                // Assuming manufactureDate is a Unix timestamp in seconds
                manufactureDate: Number(lotStruct.manufactureDate) * 1000, 
                currentOwner: lotStruct.currentOwner,
                currentLocation: lotStruct.currentLocation,
                status: lotStruct.status.toString(),
                history: historyArray,
            };

            setMessage(`✅ Lot ID ${tokenId} data successfully retrieved.`);
            setCheckedProductResult(result);
        } catch (error) {
            console.error("Error checking product:", error);
            setMessage(`Error fetching Lot ID ${tokenId}. It may not exist or the transaction failed.`);
            setCheckedProductResult({ status: 'Product Not Found', lotId: tokenId });
        } finally {
            setIsChecking(false);
        }
    };


    // --- Render Helper Functions (Preserved) ---
    
    const renderAddDevisForm = () => (
        <form onSubmit={handleAddProductSubmit} className="devis-form">
            <h3>Add New Product (Lot/Devis)</h3>
            
            {/* Display Fee Recipient for Debugging */}
            <blockquote className="debug-note">
                <p><strong>Fee Recipient (Contract):</strong> {feeRecipient}</p>
                <p><strong>Credit Token (Contract):</strong> {contractCreditTokenAddress}</p>
                {feeRecipient === ethers.ZeroAddress ? (
                    <p style={{color: 'red'}}>⚠️ CRITICAL: The contract Fee Recipient is 0x0. The 'Fee transfer failed' error will persist until the contract is redeployed with a valid address.</p>
                ) : null}
            </blockquote>
            
            {Object.keys(newProductData).map(key => (
                <div key={key} className="form-group">
                    <label htmlFor={key}>{formatKey(key)}:</label>
                    <input
                        id={key}
                        type={key === 'manufactureDate' ? 'date' : 'text'} 
                        required
                        placeholder={key === 'initialLocation' ? 'e.g., Factory Floor A' : ''}
                        value={newProductData[key]}
                        onChange={(e) => setNewProductData(prev => ({ ...prev, [key]: e.target.value }))}
                        className="form-input"
                        disabled={isSubmitting} 
                    />
                </div>
            ))}
            
            <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting Transaction...' : `Submit Devis (Cost: 1 CreditToken + HBAR)`}
            </button>
            <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => setDevisView('buttons')}
                disabled={isSubmitting}
            >
                Back to Options
            </button>
        </form>
    );

    const renderCheckDevisForm = () => (
        <div className="devis-check-view">
            <form onSubmit={handleCheckProductSubmit} className="check-form">
                <div className="form-group-inline">
                    <label htmlFor="checkId">Enter Lot ID:</label>
                    <input
                        id="checkId"
                        type="text"
                        required
                        value={checkProductId}
                        onChange={(e) => {
                            setCheckProductId(e.target.value);
                            setCheckedProductResult(null); 
                        }}
                        className="form-input"
                        placeholder="e.g., 123 (Lot ID)"
                        disabled={isChecking}
                    />
                    <button type="submit" className="btn-check-submit" disabled={isChecking}>
                        {isChecking ? 'Checking...' : 'Check Devis (Call Pull)'}
                    </button>
                </div>
            </form>

            {checkedProductResult && (
                <div className="product-result">
                    <h4>Product Details for Lot ID: {checkedProductResult.lotId}</h4>
                    {checkedProductResult.status === 'Product Not Found' || !checkedProductResult.name ? (
                        <p className="not-found">Status: {checkedProductResult.status}</p>
                    ) : (
                        <div className="dashboard-widget">
                            {Object.entries(checkedProductResult)
                                .filter(([key]) => key !== 'history' && key !== 'status')
                                .map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{formatKey(key)}:</strong> 
                                        {key === 'manufactureDate' ? new Date(Number(value)).toLocaleString() : value}
                                    </p>
                                ))}
                            
                            <p><strong>{formatKey('status')}:</strong> {checkedProductResult.status}</p>
                            
                            <hr/>
                            <h5>Ownership History:</h5>
                            {checkedProductResult.history && checkedProductResult.history.length > 0 ? (
                                <ol>
                                    {checkedProductResult.history.map((address, index) => (
                                        <li key={index}>{address}</li>
                                    ))}
                                </ol>
                            ) : (<p>No history recorded yet.</p>)}
                        </div>
                    )}
                </div>
            )}
            
            <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => {
                    setDevisView('buttons');
                    setCheckProductId('');
                    setCheckedProductResult(null);
                }}
                disabled={isChecking}
            >
                Back to Options
            </button>
        </div>
    );

    // --- Main Content Renderer (All Cases Included) ---

    const renderContent = () => {
        
        // 🚨 CRITICAL CONDITIONAL RENDER: Block access if the wallet is not connected.
        // This waits for the 'signer' and 'contract' props from App.jsx to be ready.
        if (!signer || !contract || !userData?.address) {
             return (
                 <div className="connection-required">
                     <h2>Reconnecting Wallet...</h2>
                     <p>Restoring your session and connecting to the Hedera Testnet. Please wait...</p>
                     <p style={{marginTop: '15px', color: '#888'}}>
                         *If this persists, please return to the Demo page and connect manually.
                     </p>
                     <button className="btn-primary" onClick={() => navigate('/Demo')}>
                         Go to Connect Page
                     </button>
                 </div>
             );
        }
        
        // If signer is present, render the selected section
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="dashboard-content">
                        <h2>Your User Data</h2>
                        <div className="dashboard-widget">
                            <p><strong>Username:</strong> {userData?.username || 'N/A'}</p>
                            <p><strong>Email:</strong> {userData?.email || 'N/A'}</p>
                            <p><strong>Current Address:</strong> {signer.address}</p>
                            <p><strong>Available Credits:</strong> {userData?.credits || '0'}</p>
                            <p>
                                <strong>Creation Time : </strong> 
                                {userData?.creationTime ? new Date(Number(userData.creationTime) * 1000).toLocaleString() : 'N/A'}
                            </p>
                        </div>
                    </div>
                );
            case 'users':
                return (
                    <section className='Dashboard-users'>
                        <h2>User Management Section</h2>
                        <div className="dashboard-widget">
                            <p>This section is reserved for listing and managing registered users, typically accessible by an administrator.</p>
                            <ul>
                                <li>View user list (placeholder)</li>
                                <li>Update user roles (placeholder)</li>
                                <li>Search users by address (placeholder)</li>
                            </ul>
                        </div>
                    </section>
                );

            case 'devis':
                return (
                    <section className='Dashboard-devis'>
                        <h2>Devis Management</h2>
                        <p>Manage product additions and track existing products on the chain.</p>
                        
                        {devisView === 'buttons' && (
                            <div className="devis-container-btns">
                                <button 
                                    className='btn-add-devise' 
                                    onClick={() => setDevisView('add')}
                                >
                                    Add New Product
                                </button>
                                <button 
                                    className='btn-check-devise' 
                                    onClick={() => setDevisView('check')}
                                >
                                    Check Product Status
                                </button>
                            </div>
                        )}

                        {devisView === 'add' && renderAddDevisForm()}
                        {devisView === 'check' && renderCheckDevisForm()}

                    </section>
                ); 
            case 'settings':
                return (
                    <section className='Dashboard-settings'>
                        <h2>Account Settings</h2>
                        <div className="dashboard-widget">
                            <p>This section will contain user-specific settings:</p>
                            <ul>
                                <li>Change Username/Email (Local State Update)</li>
                                <li>Update Metadata URI (Placeholder)</li>
                                <li>View Transaction History (Placeholder)</li>
                            </ul>
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    // --- Main Component Structure ---

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
                <div className="sidebar-header">
                    <span className="sidebar-title">Dashboard</span>
                     <button onClick={toggleSidebar} className="close-btn">
            {isSidebarOpen ? (<p className='closetoggle-sideBar'>x</p>
            ) : (<img src={toggleSideBar} alt="Open" className='toggle-sideBar' />)}
        </button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#" className={`sidebar-link ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('dashboard'); }}>Dashboard</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'users' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('users'); }}>Users</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'devis' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('devis'); setDevisView('buttons'); }}>Devis</a></li>
                    <li><a href="#" className={`sidebar-link ${activeSection === 'settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveSection('settings'); }}>Settings</a></li>
                </ul>
            </div>

            <div className={`main-content ${isSidebarOpen ? '' : 'full-width'}`}>
                <header className="dashboard-header">
                    <div className="header-left">
                        <h1>Welcome{userData?.username ? ` back, ${userData.username}` : ''}</h1> 
                    </div>
                    <div className="header-right">
                        <button className="header-btn">Notifications</button>
                        {/* <button className="header-btn">Profile</button> */}
                        <button 
                    className="header-btn" 
                    onClick={() => setActiveSection('dashboard')} // Link Profile button to Dashboard section
                >
                    Profile
                </button>
                        
                    </div>
                </header>

                <main className="dashboard-body">
                    {renderContent()} {/* Main content rendered here */}
                </main>

                <footer className="dashboard-footer">
                    <p>&copy; 2025 PharmaExpert. All rights reserved.</p>
                </footer>
            </div>

            <div className="back-to-website">
                <button className="back-btn logout-btn" onClick={handleLogout}>
                    Logout 🚪
                </button>
                <button className="back-btn" onClick={() => navigate('/')}> 
                    Back to Website 
                </button>
            </div>
        </div>
    );
}

export default Dashboard;



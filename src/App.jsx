// import {Routes, Route} from "react-router-dom";
// import LandingPage from "./Components/LandingPage";
// import GetStarted from "./Components/GetStarted";
// import AboutUs from "./Components/AboutUs";
// import Blog from "./Components/Blog";
// // import Careers from "./Components/Careers";
// import Contact from "./Components/Contact";
// import Privacy from "./Components/Privacy";
// import Terms from "./Components/Terms";
// import Security from "./Components/Security";
// import Services from "./Components/Services";
// import Features from "./Components/Features";
// import Technology from "./Components/Technology";
// import Pricing from "./Components/Pricing";
// import { ToastContainer, toast } from 'alert-handler-lite';
// import 'alert-handler-lite/dist/index.css';

// import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers';
// import ClientDashboard from "./Components/ClientDashboard.jsx"



// import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers';
// const App = () => {
//   return (
//     <>
//       <ToastContainer  />
//         <Routes>
//             <Route path="/" element={<LandingPage/>}/>
//             <Route path="/get-started" element={<GetStarted/>}/>
//             <Route path="/about" element={<AboutUs/>}/>
//             <Route path="/blog" element={<Blog/>}/>
//             {/* <Route path="/careers" element={<Careers/>}/> */}
//             <Route path="/contact" element={<Contact/>}/>
//             <Route path="/privacy" element={<Privacy/>}/>
//             <Route path="/terms" element={<Terms/>}/>
//             <Route path="/security" element={<Security/>}/>
//             <Route path="/services" element={<Services/>}/>
//             <Route path="/features" element={<Features/>}/>
//             <Route path="/technology" element={<Technology/>}/>
//             <Route path="/pricing" element={<Pricing/>}/>

//             <Route path="/RentListingsPage" element={< ClientDashboard/>} />
//         </Routes>
//     </>
//   )
// }

// export default App;


// import React, { useState, useCallback } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { ethers, Contract, BrowserProvider } from "ethers";

// // Public Pages
// import LandingPage from "./Components/LandingPage";
// import GetStarted from "./Components/GetStarted";
// import AboutUs from "./Components/AboutUs";
// import Blog from "./Components/Blog";
// import Contact from "./Components/Contact";
// import Privacy from "./Components/Privacy";
// import Terms from "./Components/Terms";
// import Security from "./Components/Security";
// import Services from "./Components/Services";
// import Features from "./Components/Features";
// import Technology from "./Components/Technology";
// import Pricing from "./Components/Pricing";

// // Dashboards
// import ClientDashboard from "./Components/ClientDashboard";
// import AdminDashboard from "./Components/AdminDashboard";

// // Contract
// import ContractABI from "./Components/CreditTokenABI.js";

// const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c";

// const App = () => {
//   const navigate = useNavigate();

//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [userAddress, setUserAddress] = useState(null);

//   // 🔵 Connect Wallet from GetStarted page
//   const connectWallet = useCallback(async () => {
//     if (!window.ethereum) {
//       alert("Install MetaMask");
//       return;
//     }

//     try {
//       const provider = new BrowserProvider(window.ethereum);
//       await provider.send("eth_requestAccounts", []);

//       const _signer = await provider.getSigner();
//       const address = await _signer.getAddress();

//       const _contract = new Contract(
//         CONTRACT_ADDRESS,
//         ContractABI,
//         _signer
//       );

//       setSigner(_signer);
//       setContract(_contract);
//       setUserAddress(address);

//       // 🟢 Role Check
//       const owner = await _contract.owner();

//       if (owner.toLowerCase() === address.toLowerCase()) {
//         navigate("/admin_dashboard");
//       } else {
//         navigate("/dashboard");
//       }

//     } catch (error) {
//       console.error("Connection failed:", error);
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Routes>
//         {/* 🌍 Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/get-started"
//           element={<GetStarted connectWallet={connectWallet} />}
//         />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/security" element={<Security />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/pricing" element={<Pricing />} />

//         {/* 🔐 Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <ClientDashboard
//               signer={signer}
//               contract={contract}
//               userAddress={userAddress}
//             />
//           }
//         />

//         <Route
//           path="/admin_dashboard"
//           element={
//             <AdminDashboard
//               signer={signer}
//               contract={contract}
//               userAddress={userAddress}
//             />
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;


// import React, { useState, useCallback } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers';

// // 🌍 Public Pages
// import LandingPage from "./Components/LandingPage";
// import GetStarted from "./Components/GetStarted";
// import AboutUs from "./Components/AboutUs";
// import Blog from "./Components/Blog";
// import Contact from "./Components/Contact";
// import Privacy from "./Components/Privacy";
// import Terms from "./Components/Terms";
// import Security from "./Components/Security";
// import Services from "./Components/Services";
// import Features from "./Components/Features";
// import Technology from "./Components/Technology";
// import Pricing from "./Components/Pricing";

// // 🔐 Dashboards
// import ClientDashboard from "./Components/ClientDashboard";
// import AdminDashboard from "./Components/AdminDashboard";

// // 📜 Contract ABI
// import ContractABI from "./Components/CreditTokenABI.js";

// // ✅ Your Contract Address
// const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c";

// const App = () => {
//   const navigate = useNavigate();

//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [userAddress, setUserAddress] = useState(null);

//   // 🔵 Connect Wallet (Called from GetStarted)
//   const connectWallet = useCallback(async () => {
//     if (!window.ethereum) {
//       alert("Please install MetaMask.");
//       return;
//     }

//     try {
//       const provider = new BrowserProvider(window.ethereum);

//       // Request wallet connection
//       await provider.send("eth_requestAccounts", []);

//       const _signer = await provider.getSigner();
//       const address = await _signer.getAddress();

//       const _contract = new Contract(
//         CREDIT_TOKEN_ADDRESS,
//         ContractABI,
//         _signer
//       );

//       setSigner(_signer);
//       setContract(_contract);
//       setUserAddress(address);

//       console.log("Connected:", address);

//       // 🟢 ROLE CHECK
//       // If your contract has owner()
//       const owner = await _contract.owner();

//       if (owner.toLowerCase() === address.toLowerCase()) {
//         console.log("Admin detected");
//         navigate("/admin_dashboard", { replace: true });
//       } else {
//         console.log("Client detected");
//         navigate("/dashboard", { replace: true });
//       }

//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   }, [navigate]);

//   return (
//     <>
//       <Routes>

//         {/* 🌍 Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route
//           path="/get-started"
//           element={<GetStarted connectWallet={connectWallet} />}
//         />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/security" element={<Security />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/technology" element={<Technology />} />
//         <Route path="/pricing" element={<Pricing />} />

//         {/* 🔐 Client Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             <ClientDashboard
//               signer={signer}
//               contract={contract}
//               userAddress={userAddress}
//             />
//           }
//         />

//         {/* 🔐 Admin Dashboard */}
//         <Route
//           path="/admin_dashboard"
//           element={
//             <AdminDashboard
//               signer={signer}
//               contract={contract}
//               userAddress={userAddress}
//             />
//           }
//         />

//       </Routes>
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"; 
import { ethers, Contract, BrowserProvider, formatUnits, parseUnits } from 'ethers';

// Import Components and ABIs...
import Demo from "./Components/Demo.jsx";
import LandingPage from "./Components/LandingPage";

import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Security from "./Components/Security";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Technology from "./Components/Technology";
import Pricing from "./Components/Pricing";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"; 
import Dashboard from "./Components/ClientDashboard";
import AdminDashboard from "./Components/AdminDashboard";

import LotTrackerABI from "./Components/LotTrackerABI.js";
import CreditTokenABI from './Components/CreditTokenABI.js'; 
// import { ToastContainer, toast } from 'alert-handler-lite';
// import 'alert-handler-lite/dist/index.css';


// Constants
const LOTTRACKR_ADDRESS = "0xdB04e79caEa24AF20b4ad1AaAb0Ed2e67DCb9449"; 
const CREDIT_TOKEN_ADDRESS = "0x42a05014306386b823329f777eb09ec1f493d69c";
const HEDERA_TESTNET_CHAIN_ID = '0x128'; 

const App = () => {
    const navigate = useNavigate();
    
    // 1. State (including localStorage initialization)
    const [userData, setUserData] = useState(() => {
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null;
    }); 
    
    const [signer, setSigner] = useState(null); 
    const [message, setMessage] = useState("");
    const [contract, setContract] = useState(null); 
    const [creditTokenContract, setCreditTokenContract] = useState(null); 
    
    const isLoggedIn = !!userData && !!userData.address;

    // 2. Centralized Connection Logic
    const connectAndSetup = useCallback(async () => {
        if (typeof window.ethereum === 'undefined') {
            setMessage("MetaMask is not installed. Please install it.");
            return;
        }

        try {
            const provider = new BrowserProvider(window.ethereum);
            
            // 💡 Check if accounts are already connected (avoids unnecessary popup)
            const accounts = await provider.listAccounts();
            if (accounts.length === 0) {
                 // If no accounts, request connection
                 await provider.send("eth_requestAccounts", []);
            }

            const network = await provider.getNetwork();
            if (network.chainId !== BigInt(HEDERA_TESTNET_CHAIN_ID)) {
                setMessage("MetaMask is connected but on the wrong network. Please switch to **Hedera Testnet**.");
                setSigner(null);
                setContract(null);
                setCreditTokenContract(null);
                return;
            }

            const _signer = await provider.getSigner();
            const _lotTrackrContract = new Contract(LOTTRACKR_ADDRESS, LotTrackerABI, _signer);
            const _creditTokenContract = new Contract(CREDIT_TOKEN_ADDRESS, CreditTokenABI, _signer);
            
            setSigner(_signer);
            setContract(_lotTrackrContract);
            setCreditTokenContract(_creditTokenContract);

            setMessage(`Wallet connected: ${_signer.address.substring(0, 6)}... on Hedera Testnet.`);
        } catch (error) {
            console.error("MetaMask connection failed:", error);
            const errorMessage = (error.message && error.message.includes('user rejected')) ? 'User rejected connection.' : error.message || "Network error.";
            setMessage(`Connection failed. Error: ${errorMessage}`);
            setSigner(null);
            setContract(null);
            setCreditTokenContract(null);
        }
    }, []); // Removed setMessage from dependencies


    // 3. 🟢 CRITICAL FIX: Handle Wallet Events AND Auto-Connect on Refresh
    useEffect(() => {
        // If we have a user session (from localStorage) but no signer (from refresh), connect.
        if (isLoggedIn && !signer) {
            console.log("App.js: User session found, attempting wallet auto-reconnect...");
            connectAndSetup();
        }
        
        // Listen for external wallet changes
        window.ethereum?.on('accountsChanged', connectAndSetup);
        window.ethereum?.on('chainChanged', connectAndSetup);

        return () => {
            window.ethereum?.removeListener('accountsChanged', connectAndSetup);
            window.ethereum?.removeListener('chainChanged', connectAndSetup);
        };
    }, [isLoggedIn, signer, connectAndSetup]); 
    
    // 4. Synchronize userData state with localStorage
    useEffect(() => {
        if (userData && userData.address) {
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            localStorage.removeItem('userData');
            // Clear signer/contract on logout
            setSigner(null);
            setContract(null);
            setCreditTokenContract(null);
        }
    }, [userData]); 

    return (
        <>
          

            <Routes>
             
  {/* 🌍 Public Routes */}
  <Route path="/" element={<LandingPage />} />

  <Route 
    path="/Demo" 
    element={
      <Demo 
        userData={userData}
        setUserData={setUserData}
        setSigner={setSigner}
        signer={signer}
        message={message}
        setMessage={setMessage}
        contract={contract}
        setContract={setContract}
        creditTokenContract={creditTokenContract}
        connectAndSetup={connectAndSetup}
      />
    } 
  />

  <Route path="/about" element={<AboutUs />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/privacy" element={<Privacy />} />
  <Route path="/terms" element={<Terms />} />
  <Route path="/security" element={<Security />} />
  <Route path="/services" element={<Services />} />
  <Route path="/features" element={<Features />} />
  <Route path="/technology" element={<Technology />} />
  <Route path="/pricing" element={<Pricing />} />

  {/* 🔐 Dashboards (NO ProtectedRoute wrapper) */}
   <Route element={<ProtectedRoute isLoggedIn={!!userData?.address} redirectPath="/Demo" />}>
    <Route 
        path="/Dashboard" 
        element={
            <Dashboard
                userData={userData}
                setUserData={setUserData}
                setMessage={setMessage}
                signer={signer}
                contract={contract}
                creditTokenContract={creditTokenContract}
            />
        }
    />
</Route>


  <Route
    path="/admin_dashboard"
    element={<AdminDashboard userData={userData} />}
  />

</Routes>

        </>
    );
}

export default App;



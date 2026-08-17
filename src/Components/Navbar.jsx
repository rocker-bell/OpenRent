import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

export default function Navbar({ userData, signer, connectAndSetup }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Technology', path: '/technology' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const isAuthPage = location.pathname === '/Demo';
  const isDashboardPage = location.pathname.toLowerCase().includes('dashboard');

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" id="nav-brand-logo">
          <div className="logo-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">Open<span className="brand-accent">Rent</span></span>
            <span className="network-subtext">HEDERA EVM</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
                {isActive && <span className="active-dot" />}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Network Indicator */}
          <div className="network-pill" title="Hedera Testnet (Chain ID 296)">
            <span className="badge-dot pulse-dot" />
            <span className="network-name">Hedera Testnet</span>
          </div>

          {/* User Session / Auth Action */}
          {userData?.address ? (
            <div className="user-nav-group">
              <Link to="/Dashboard" className="user-wallet-chip" id="nav-user-dashboard-btn">
                <span className="wallet-avatar">⚡</span>
                <div className="wallet-info">
                  <span className="wallet-name">{userData.username || 'Client'}</span>
                  <span className="wallet-credits">{userData.credits || '0'} CT</span>
                </div>
              </Link>
            </div>
          ) : (
            <Link to="/Demo" className="btn btn-primary btn-sm nav-cta-btn" id="nav-get-started-btn">
              <span>Launch App</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            {userData?.address ? (
              <Link
                to="/Dashboard"
                className="btn btn-primary btn-lg full-width"
                onClick={() => setMobileMenuOpen(false)}
              >
                Go to Dashboard ({userData.credits || '0'} CT)
              </Link>
            ) : (
              <Link
                to="/Demo"
                className="btn btn-primary btn-lg full-width"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect / Launch App
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

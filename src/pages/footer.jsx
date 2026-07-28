// footer.jsx
import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 className="footer-logo">FOREX</h2>
                    <p className="footer-description">
                        Trade Stocks, Forex, Commodities, Indices and more across multiple markets.
                        Empowering traders worldwide with cutting-edge technology and exceptional support.
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="social-link" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a href="#" className="social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Platforms</h3>
                    <ul className="footer-links">
                        <li><a href="#">WebTrader</a></li>
                        <li><a href="#">Mobile App</a></li>
                        <li><a href="#">MetaTrader 5</a></li>
                        <li><a href="#">TradingView</a></li>
                        <li><a href="#">Platform Features</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading">Markets</h3>
                    <ul className="footer-links">
                        <li><a href="#">Forex</a></li>
                        <li><a href="#">Stocks</a></li>
                        <li><a href="#">Commodities</a></li>
                        <li><a href="#">Indices</a></li>
                        <li><a href="#">Cryptocurrency</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading">Support</h3>
                    <ul className="footer-links">
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Trading Guide</a></li>
                        <li><a href="#">Glossary</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-heading">About</h3>
                    <ul className="footer-links">
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Regulation</a></li>
                        <li><a href="#">Risk Management</a></li>
                        <li><a href="#">Press & Media</a></li>
                    </ul>
                </div>
            </div>

            {/* Contact Info Bar */}
            <div className="footer-contact-bar">
                <div className="footer-contact-inner">
                    <div className="contact-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span>123 Trading Street, Financial District, NY 10005</span>
                    </div>
                    <div className="contact-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span>+1 (800) 555-FOREX</span>
                    </div>
                    <div className="contact-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        <span>support@forex.com</span>
                    </div>
                    <div className="contact-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                        </svg>
                        <span>24/7 Live Support</span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-inner">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} FOREX. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <span className="legal-divider">|</span>
                        <a href="#">Terms of Service</a>
                        <span className="legal-divider">|</span>
                        <a href="#">Cookie Policy</a>
                        <span className="legal-divider">|</span>
                        <a href="#">Risk Disclosure</a>
                    </div>
                </div>
            </div>

            {/* Risk Disclaimer */}
            <div className="footer-disclaimer">
                <p>
                    <strong>Risk Warning:</strong> Trading forex, stocks, commodities, and indices carries a high level of risk
                    and may not be suitable for all investors. Before deciding to trade, you should carefully consider your
                    investment objectives, level of experience, and risk appetite. Past performance is not indicative of
                    future results.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
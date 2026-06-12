import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">P</span>
              <span className="logo-text">PNPGLOBALPAYMENT</span>
            </div>
            <p>Connecting Africa Through Reliable Payments</p>
          </div>
          
          <div className="footer-section">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#rates">Exchange Rates</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>OUR SERVICES</h4>
            <ul>
              <li><a href="#">Exchange Rates</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Business Payment Solutions</a></li>
              <li><a href="#">Cross-Border Payments</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="social-links">
              <a href="#" title="Facebook">f</a>
              <a href="#" title="Instagram">📷</a>
              <a href="#" title="WhatsApp">💬</a>
              <a href="#" title="Twitter">𝕏</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 PNPGLOBALPAYMENT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

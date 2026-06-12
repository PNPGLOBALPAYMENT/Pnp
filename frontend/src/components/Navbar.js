import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-text">P</span>
          <span className="logo-brand">PNGLOBALPAYMENT</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#rates">EXCHANGE RATES</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
        <button className="btn-primary btn-started">GET STARTED</button>
      </div>
    </nav>
  );
};

export default Navbar;

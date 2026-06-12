import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">FAST • SECURE • RELIABLE</div>
          <h1>Fast, Secure & Trusted<br/>Money Transfers<br/><span>Across Africa</span></h1>
          <p>Exchange Dollars to Naira at competitive rates and send money across Africa with confidence.</p>
          <div className="hero-buttons">
            <button className="btn-primary">GET STARTED</button>
            <button className="btn-secondary">CONTACT US</button>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <p>Call Us</p>
                <strong>07089734369</strong>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">💬</span>
              <div>
                <p>WhatsApp</p>
                <strong>07089734369</strong>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <div>
                <p>Email Us</p>
                <strong>adebayot002@gmail.com</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="globe"></div>
          <div className="phone-mockup">
            <div className="phone-content">
              <h3>PNP<br/>GLOBALPAYMENT</h3>
              <p>Secure Payments<br/>Trusted Worldwide</p>
              <div className="shield">🔒</div>
            </div>
          </div>
          <div className="money-stack">💵</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

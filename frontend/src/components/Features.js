import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'Your funds are handled with the highest level of security and professionalism.'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Quick and efficient money exchange and transfers you can rely on.'
    },
    {
      icon: '🌍',
      title: 'Africa-Wide Transfers',
      description: 'Send and receive money across multiple African countries.'
    },
    {
      icon: '💵',
      title: 'Competitive Rates',
      description: 'Excellent exchange rates for Dollar to Naira and other major currencies.'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Our customer support team is always available to assist you anytime, anywhere.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>WHY CHOOSE <span>PNPGLOBALPAYMENT?</span></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

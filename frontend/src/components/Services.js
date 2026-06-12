import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💱',
      title: 'Dollar to Naira Exchange',
      description: 'Convert your Dollars to Naira at the best competitive rates with fast payment.'
    },
    {
      icon: '🌐',
      title: 'International Money Transfers',
      description: 'Send money securely to your loved ones and business partners across Africa.'
    },
    {
      icon: '🏦',
      title: 'Business Payment Solutions',
      description: 'Reliable payment solutions tailored for businesses of all sizes.'
    },
    {
      icon: '🔄',
      title: 'Cross-Border Payments',
      description: 'Seamless cross-border payments across multiple African countries.'
    },
    {
      icon: '🛡️',
      title: 'Fast & Secure Transactions',
      description: 'We ensure your transactions are fast, secure and 100% reliable.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

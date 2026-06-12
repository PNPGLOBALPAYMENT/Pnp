import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: '📞',
      title: 'Contact Us',
      description: 'Reach out to us with your transaction details.'
    },
    {
      icon: '💬',
      title: 'Get Exchange Rate',
      description: 'Receive the latest exchange rate and payment instructions.'
    },
    {
      icon: '💳',
      title: 'Make Payment',
      description: 'Make your payment securely using our trusted methods.'
    },
    {
      icon: '✈️',
      title: 'Receive Funds',
      description: 'Your funds are processed and delivered promptly.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>HOW IT WORKS</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector">···</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

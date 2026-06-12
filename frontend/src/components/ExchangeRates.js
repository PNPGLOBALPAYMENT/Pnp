import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExchangeRates.css';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/rates`);
      if (response.data.success) {
        setRates(response.data.data.rates);
        setError(null);
      }
    } catch (err) {
      setError('Failed to fetch exchange rates');
      console.error('Error fetching rates:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/rates/convert`, {
        amount: parseFloat(amount),
        from: fromCurrency,
        to: toCurrency
      });
      if (response.data.success) {
        setConvertedAmount(response.data.data.convertedAmount);
      }
    } catch (err) {
      console.error('Error converting:', err);
    }
  };

  if (loading) return <div className="loading">Loading exchange rates...</div>;

  return (
    <section className="exchange-rates" id="rates">
      <div className="container">
        <h2>EXCHANGE RATES</h2>
        
        <div className="converter-card">
          <h3>Currency Converter</h3>
          <div className="converter-form">
            <div className="form-group">
              <label>From</label>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                <option value="USD">USD (US Dollar)</option>
                <option value="EUR">EUR (Euro)</option>
                <option value="GBP">GBP (British Pound)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div className="form-group">
              <label>To</label>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                <option value="NGN">NGN (Nigerian Naira)</option>
                <option value="GHS">GHS (Ghanaian Cedi)</option>
                <option value="KES">KES (Kenyan Shilling)</option>
                <option value="ZAR">ZAR (South African Rand)</option>
                <option value="EGP">EGP (Egyptian Pound)</option>
              </select>
            </div>
            <button className="btn-primary btn-convert" onClick={handleConvert}>
              CONVERT
            </button>
          </div>
          {convertedAmount > 0 && (
            <div className="conversion-result">
              <p>{amount} {fromCurrency} = <strong>{convertedAmount} {toCurrency}</strong></p>
            </div>
          )}
        </div>

        <div className="rates-display">
          <h3>Current Rates</h3>
          <div className="rates-grid">
            {Object.entries(rates).map(([from, currencyPairs]) => (
              <div key={from} className="rate-column">
                <h4>{from}</h4>
                {Object.entries(currencyPairs).map(([to, rate]) => (
                  <div key={`${from}-${to}`} className="rate-item">
                    <span className="rate-pair">{from}/{to}</span>
                    <span className="rate-value">{rate.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
      </div>
    </section>
  );
};

export default ExchangeRates;

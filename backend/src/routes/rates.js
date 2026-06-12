const express = require('express');
const NodeCache = require('node-cache');
const router = express.Router();

// Cache exchange rates for 5 minutes
const cache = new NodeCache({ stdTTL: 300 });

// Mock exchange rates data
const exchangeRates = {
  USD: {
    NGN: 1550.00,
    GHS: 12.50,
    KES: 130.00,
    ZAR: 19.00,
    EGP: 33.50
  },
  EUR: {
    NGN: 1680.00,
    GHS: 13.60,
    KES: 141.00,
    ZAR: 20.50,
    EGP: 36.50
  },
  GBP: {
    NGN: 1950.00,
    GHS: 15.80,
    KES: 163.00,
    ZAR: 23.80,
    EGP: 42.50
  }
};

// Get all current exchange rates
router.get('/', (req, res) => {
  const cachedRates = cache.get('all_rates');
  
  if (cachedRates) {
    return res.json({
      success: true,
      data: cachedRates,
      source: 'cache',
      timestamp: new Date()
    });
  }

  const ratesData = {
    timestamp: new Date(),
    rates: exchangeRates,
    lastUpdated: new Date().toISOString(),
    status: 'live'
  };

  cache.set('all_rates', ratesData);

  res.json({
    success: true,
    data: ratesData,
    source: 'api'
  });
});

// Get specific currency pair rate
router.get('/pair/:from/:to', (req, res) => {
  const { from, to } = req.params;
  const fromUpper = from.toUpperCase();
  const toUpper = to.toUpperCase();

  if (!exchangeRates[fromUpper] || !exchangeRates[fromUpper][toUpper]) {
    return res.status(404).json({
      success: false,
      error: `Exchange rate for ${fromUpper}/${toUpper} not found`
    });
  }

  res.json({
    success: true,
    data: {
      from: fromUpper,
      to: toUpper,
      rate: exchangeRates[fromUpper][toUpper],
      timestamp: new Date()
    }
  });
});

// Convert amount
router.post('/convert', (req, res) => {
  const { amount, from, to } = req.body;

  if (!amount || !from || !to) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: amount, from, to'
    });
  }

  const fromUpper = from.toUpperCase();
  const toUpper = to.toUpperCase();

  if (!exchangeRates[fromUpper] || !exchangeRates[fromUpper][toUpper]) {
    return res.status(404).json({
      success: false,
      error: `Conversion not supported for ${fromUpper}/${toUpper}`
    });
  }

  const rate = exchangeRates[fromUpper][toUpper];
  const convertedAmount = (amount * rate).toFixed(2);

  res.json({
    success: true,
    data: {
      originalAmount: amount,
      originalCurrency: fromUpper,
      convertedAmount: parseFloat(convertedAmount),
      targetCurrency: toUpper,
      rate: rate,
      timestamp: new Date()
    }
  });
});

// Get rate history (mock data)
router.get('/history/:pair', (req, res) => {
  const { pair } = req.params;
  const [from, to] = pair.split('-').map(p => p.toUpperCase());

  if (!exchangeRates[from] || !exchangeRates[from][to]) {
    return res.status(404).json({
      success: false,
      error: `Rate history not available for ${pair}`
    });
  }

  // Generate mock historical data
  const baseRate = exchangeRates[from][to];
  const history = [];
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const variance = (Math.random() - 0.5) * 50;
    history.push({
      date: date.toISOString().split('T')[0],
      rate: parseFloat((baseRate + variance).toFixed(2))
    });
  }

  res.json({
    success: true,
    data: {
      pair: `${from}/${to}`,
      history: history,
      current: baseRate
    }
  });
});

module.exports = router;

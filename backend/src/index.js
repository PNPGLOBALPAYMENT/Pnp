const express = require('express');
const cors = require('cors');
require('dotenv').config();
const ratesRouter = require('./routes/rates');
const transactionsRouter = require('./routes/transactions');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rates', ratesRouter);
app.use('/api/transactions', transactionsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running', timestamp: new Date() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

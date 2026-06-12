const express = require('express');
const router = express.Router();

// Mock transactions storage
const transactions = [];
let transactionId = 1000;

// Create transaction
router.post('/', (req, res) => {
  const { amount, fromCurrency, toCurrency, recipient, senderPhone } = req.body;

  if (!amount || !fromCurrency || !toCurrency || !recipient || !senderPhone) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  const transaction = {
    id: `TXN${transactionId++}`,
    amount,
    fromCurrency: fromCurrency.toUpperCase(),
    toCurrency: toCurrency.toUpperCase(),
    recipient,
    senderPhone,
    status: 'pending',
    createdAt: new Date(),
    estimatedDelivery: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  };

  transactions.push(transaction);

  res.status(201).json({
    success: true,
    data: transaction,
    message: 'Transaction created successfully'
  });
});

// Get transaction by ID
router.get('/:id', (req, res) => {
  const transaction = transactions.find(t => t.id === req.params.id);

  if (!transaction) {
    return res.status(404).json({
      success: false,
      error: 'Transaction not found'
    });
  }

  res.json({
    success: true,
    data: transaction
  });
});

// Get all transactions
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: transactions,
    total: transactions.length
  });
});

// Update transaction status
router.patch('/:id', (req, res) => {
  const { status } = req.body;
  const transaction = transactions.find(t => t.id === req.params.id);

  if (!transaction) {
    return res.status(404).json({
      success: false,
      error: 'Transaction not found'
    });
  }

  transaction.status = status || transaction.status;
  transaction.updatedAt = new Date();

  res.json({
    success: true,
    data: transaction,
    message: 'Transaction updated successfully'
  });
});

module.exports = router;

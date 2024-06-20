const express = require('express');
const Sale = require('../models/Sale');
const router = express.Router();

// Get sales with date filter
router.get('/', async (req, res) => {
  const { startDate, endDate } = req.query;
  const filter = {};
  if (startDate) filter.date = { $gte: new Date(startDate) };
  if (endDate) filter.date = { ...filter.date, $lte: new Date(endDate) };

  try {
    const sales = await Sale.find(filter).populate('products.product');
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new sale
router.post('/', async (req, res) => {
  const sale = new Sale({
    products: req.body.products,
  });

  try {
    const newSale = await sale.save();
    res.status(201).json(newSale);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

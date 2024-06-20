const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Sale', SaleSchema);

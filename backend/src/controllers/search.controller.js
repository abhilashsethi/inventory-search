import { inventory } from '../data/inventory.js';

export const searchInventory = (req, res) => {
  let results = inventory;
  const { q, category, minPrice, maxPrice } = req.query;

  const min = minPrice ? Number(minPrice) : null;
  const max = maxPrice ? Number(maxPrice) : null;

  if ((min !== null && isNaN(min)) || (max !== null && isNaN(max))) {
    return res.status(400).json({ message: 'Invalid price values' });
  }

  if (min !== null && max !== null && min > max) {
    return res.status(400).json({ message: 'minPrice cannot be greater than maxPrice' });
  }

  if (q) {
    results = results.filter(item =>
      item.productName.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    results = results.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (min !== null) {
    results = results.filter(item => item.price >= min);
  }

  if (max !== null) {
    results = results.filter(item => item.price <= max);
  }

  res.json(results);
};

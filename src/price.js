function applyDiscount(price, percent) {
  return price * (1 - percent / 100);
}

module.exports = { applyDiscount };

const { applyDiscount } = require('./price');

describe('applyDiscount percent handling', () => {
  test('applies a 10% discount to 100', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  test('applies a 50% discount to 80', () => {
    expect(applyDiscount(80, 50)).toBe(40);
  });

  test('0% discount leaves the price unchanged', () => {
    expect(applyDiscount(100, 0)).toBe(100);
  });
});

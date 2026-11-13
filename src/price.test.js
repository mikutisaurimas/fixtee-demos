const { applyDiscount } = require('./price');

describe('applyDiscount', () => {
  test('applyDiscount(100, 10) = 90', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  test('applyDiscount(80, 50) = 40', () => {
    expect(applyDiscount(80, 50)).toBe(40);
  });

  test('applyDiscount(100, 0) = 100', () => {
    expect(applyDiscount(100, 0)).toBe(100);
  });
});

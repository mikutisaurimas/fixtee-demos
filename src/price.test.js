const { applyDiscount } = require('./price');

describe('applyDiscount', () => {
  it('applies a 10% discount to 100', () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  it('applies a 50% discount to 80', () => {
    expect(applyDiscount(80, 50)).toBe(40);
  });

  it('applies 0% discount', () => {
    expect(applyDiscount(100, 0)).toBe(100);
  });
});

import { isEven } from './isEven';

describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});

import { randomInRange } from './randomInRange';

describe('randomInRange', () => {
  it('generates values within the specified range', () => {
    for (let i = 0; i < 100; i++) {
      const num = randomInRange(1, 10);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
    }
  });
});

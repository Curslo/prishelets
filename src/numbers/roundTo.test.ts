import { roundTo } from './roundTo';

describe('roundTo', () => {
  it('rounds to the correct number of decimal places', () => {
    expect(roundTo(3.14159, 2)).toBe(3.14);
    expect(roundTo(3.14159, 3)).toBe(3.142);
    expect(roundTo(3.14159, 0)).toBe(3);
  });
});

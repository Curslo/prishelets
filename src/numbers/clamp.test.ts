// src/number/clamp.test.ts

import { clamp } from './clamp';

describe('clamp', () => {
  it('should return the value if within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it('should return the min if value is below range', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });

  it('should return the max if value is above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it('should work when value equals min or max', () => {
    expect(clamp(0, 0, 100)).toBe(0);
    expect(clamp(100, 0, 100)).toBe(100);
  });
});

import { isOdd } from "./isOdd";

describe("isOdd", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
  });

  it("should return false for negative even numbers", () => {
    expect(isOdd(-2)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });

  it("should return true for negative odd numbers", () => {
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });
});
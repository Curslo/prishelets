import { toFixedNumber } from "./toFixedNumber";

describe("toFixedNumber", () => {
  it("should round to the specified number of decimal places", () => {
    expect(toFixedNumber(1.234567, 2)).toBe(1.23);
    expect(toFixedNumber(1.234567, 3)).toBe(1.235);
    expect(toFixedNumber(1.234567, 4)).toBe(1.2346);
    expect(toFixedNumber(1.234567, 5)).toBe(1.23457);
  });

  it("should handle negative numbers", () => {
    expect(toFixedNumber(-1.234567, 2)).toBe(-1.23);
    expect(toFixedNumber(-1.234567, 3)).toBe(-1.235);
    expect(toFixedNumber(-1.234567, 4)).toBe(-1.2346);
    expect(toFixedNumber(-1.234567, 5)).toBe(-1.23457);
  });

  it("should handle zero", () => {
    expect(toFixedNumber(0, 2)).toBe(0);
    expect(toFixedNumber(0, 3)).toBe(0);
    expect(toFixedNumber(0, 4)).toBe(0);
    expect(toFixedNumber(0, 5)).toBe(0);
  });
  it("should handle large numbers", () => {
    expect(toFixedNumber(123456789.987654321, 2)).toBe(123456789.99);
    expect(toFixedNumber(123456789.987654321, 3)).toBe(123456789.988);
    expect(toFixedNumber(123456789.987654321, 4)).toBe(123456789.9877);
    expect(toFixedNumber(123456789.987654321, 5)).toBe(123456789.98765);
  });
  it("should handle very small numbers", () => {
    expect(toFixedNumber(0.000000123456789, 2)).toBe(0);
    expect(toFixedNumber(0.000000123456789, 3)).toBe(0);
    expect(toFixedNumber(0.000000123456789, 4)).toBe(0);
    expect(toFixedNumber(0.000000123456789, 5)).toBe(0);
  });
  it("should handle very small numbers", () => {
    expect(toFixedNumber(1e-20, 2)).toBe(0);
    expect(toFixedNumber(1e-20, 3)).toBe(0);
    expect(toFixedNumber(1e-20, 4)).toBe(0);
    expect(toFixedNumber(1e-20, 5)).toBe(0);
  });
  it("should handle NaN", () => {
    expect(toFixedNumber(NaN, 2)).toBe(NaN);
    expect(toFixedNumber(NaN, 3)).toBe(NaN);
    expect(toFixedNumber(NaN, 4)).toBe(NaN);
    expect(toFixedNumber(NaN, 5)).toBe(NaN);
  });
  it("should handle Infinity", () => {
    expect(toFixedNumber(Infinity, 2)).toBe(Infinity);
    expect(toFixedNumber(Infinity, 3)).toBe(Infinity);
    expect(toFixedNumber(Infinity, 4)).toBe(Infinity);
    expect(toFixedNumber(Infinity, 5)).toBe(Infinity);
  });
});

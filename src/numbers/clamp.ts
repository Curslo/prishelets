// src/number/clamp.ts

/**
 * Clamps a number between a minimum and maximum value.
 * 
 * @param value - The number to clamp.
 * @param min - Minimum value.
 * @param max - Maximum value.
 * @returns A number within the specified range.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

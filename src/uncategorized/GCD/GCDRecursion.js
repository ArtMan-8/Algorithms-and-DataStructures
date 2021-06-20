/**
 * GCD - Greatest common divisor / Euclidean Algorithm
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export default function GCD(a, b) {
  if (a === 0 || b === 0 || a === b) {
    return a || b;
  }

  return a > b ? GCD(a % b, b) : GCD(a, b % a);
}

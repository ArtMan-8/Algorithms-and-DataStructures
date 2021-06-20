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

  while (a && b) {
    a > b ? (a %= b) : (b %= a);
  }

  return a + b;
}

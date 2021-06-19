/**
 * GCD - Euclidean Algorithm
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export default function euclideanAlgorithm(a, b) {
  if (a === 0 || b === 0 || a === b) {
    return a || b;
  }

  return a > b ? euclideanAlgorithm(a % b, b) : euclideanAlgorithm(a, b % a);
}

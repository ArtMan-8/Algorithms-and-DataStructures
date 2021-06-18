/**
 * Recursion Factorial
 * @param {number} number
 * @returns {number}
 */
export default function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

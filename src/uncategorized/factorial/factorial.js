/**
 * Factorial
 * @param {number} number
 * @returns {number}
 */
export default function factorial(number) {
  let result = 1;

  while (number > 0) {
    result *= number--;
  }

  return result;
}

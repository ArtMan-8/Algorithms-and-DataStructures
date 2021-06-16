/**
 * getSortedArray
 * @param {number} length
 * @returns {Array}
 */
export function getSortedArray(length) {
  return [...new Array(length).keys()];
}

/**
 * Shuffle array
 * @param {Array} array
 * @returns {Array}
 */
export function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

/**
 * Linear Search
 * @param {Array} array
 * @param {*} searchValue
 * @returns {(number|null)}
 */
export default function linearSearch(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (searchValue === array[i]) {
      return i;
    }
  }

  return null;
}

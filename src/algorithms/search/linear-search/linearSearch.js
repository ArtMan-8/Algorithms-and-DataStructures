/**
 * Linear Search
 * @param {Array} unSortedArray
 * @param {*} searchValue
 * @returns {(number|null)}
 */
export default function linearSearch(unSortedArray, searchValue) {
  for (let i = 0; i < unSortedArray.length; i++) {
    if (searchValue === unSortedArray[i]) {
      return i;
    }
  }

  return null;
}

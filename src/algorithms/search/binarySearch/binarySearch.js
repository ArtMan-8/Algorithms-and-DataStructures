/**
 * Binary Search
 * @param {Array} sortedArray
 * @param {*} searchValue
 * @returns {(number|null)}
 */
export default function binarySearch(sortedArray, searchValue) {
  let firstIndex = 0;
  let lastIndex = sortedArray.length - 1;

  while (firstIndex <= lastIndex) {
    const middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (searchValue === sortedArray[middleIndex]) {
      return middleIndex;
    }

    searchValue < sortedArray[middleIndex]
      ? (lastIndex = middleIndex - 1)
      : (firstIndex = middleIndex + 1);
  }

  return null;
}

/**
 * Merge array
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
function merge(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    left[0] < right[0]
      ? sortedArray.push(left.shift())
      : sortedArray.push(right.shift());
  }

  return [...sortedArray, ...left, ...right];
}

/**
 * Merge sort
 * @param {Array} unSortedArray
 * @returns {Array}
 */
export default function mergeSort(unSortedArray) {
  if (unSortedArray.length <= 1) {
    return unSortedArray;
  }

  const oldArray = [...unSortedArray];
  const pivot = Math.floor(oldArray.length / 2);
  const left = oldArray.splice(0, pivot);
  return merge(mergeSort(left), mergeSort(oldArray));
}

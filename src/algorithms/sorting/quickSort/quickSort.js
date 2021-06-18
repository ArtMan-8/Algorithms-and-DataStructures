/**
 * Quick sort
 * @param {Array} unSortedArray
 * @returns {Array}
 */
export default function quickSort(unSortedArray) {
  if (unSortedArray.length <= 1) {
    return unSortedArray;
  }

  const oldArray = [...unSortedArray];
  const pivot = oldArray[0];

  const left = [];
  const right = [];

  for (let i = 1; i < oldArray.length; i++) {
    oldArray[i] < pivot ? left.push(oldArray[i]) : right.push(oldArray[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

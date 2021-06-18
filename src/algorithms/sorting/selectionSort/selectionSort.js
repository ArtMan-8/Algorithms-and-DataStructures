/**
 * Selection Sort
 * @param {Array} unSortedArray
 * @returns {Array}
 */
export default function selectionSort(unSortedArray) {
  const sortedArray = [...unSortedArray];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let smallestIndex = i;

    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[smallestIndex]) {
        smallestIndex = j;
      }
    }

    if (sortedArray[smallestIndex] < sortedArray[i]) {
      [sortedArray[i], sortedArray[smallestIndex]] = [
        sortedArray[smallestIndex],
        sortedArray[i],
      ];
    }
  }

  return sortedArray;
}

import { getSortedArray, shuffleArray } from "../../../utils";
import mergeSort from "./mergeSort";

describe("Merge Sort", () => {
  test("should sort numbers", () => {
    const sortedArray = getSortedArray(100);
    const unSortedArray = shuffleArray(sortedArray);
    expect(mergeSort(unSortedArray)).toEqual(sortedArray);
  });
});

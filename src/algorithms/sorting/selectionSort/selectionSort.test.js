import { getSortedArray, shuffleArray } from "../../../utils";
import selectionSort from "./selectionSort";

describe("Selection Sort", () => {
  test("should sort numbers", () => {
    const sortedArray = getSortedArray(100);
    const unSortedArray = shuffleArray(sortedArray);
    expect(selectionSort(unSortedArray)).toEqual(sortedArray);
  });
});

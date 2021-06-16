import { getSortedArray } from "../../../utils";
import binarySearch from "./binarySearch";

describe("Binary Search", () => {
  const sortedArray = getSortedArray(100);

  it("should search numbers in array", () => {
    expect(binarySearch(sortedArray, 10)).toEqual(10);
    expect(binarySearch(sortedArray, 48)).toEqual(48);
  });
});

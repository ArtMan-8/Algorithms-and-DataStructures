import binarySearch from "./binarySearch";

describe("Binary Search", () => {
  const sortedArray = [...new Array(100).keys()];

  it("should search numbers in array", () => {
    expect(binarySearch(sortedArray, 10)).toEqual(10);
    expect(binarySearch(sortedArray, 48)).toEqual(48);
  });

  it("should search non-existent value", () => {
    expect(binarySearch(sortedArray, -12)).toBeNull();
    expect(binarySearch(sortedArray, 123)).toBeNull();
  });
});

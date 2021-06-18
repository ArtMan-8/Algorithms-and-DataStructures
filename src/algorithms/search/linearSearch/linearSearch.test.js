import linearSearch from "./linearSearch";

describe("Linear Search", () => {
  test("should search numbers in array", () => {
    const unSortedArray = [1, 6, 9, 5, 8, 3];
    expect(linearSearch(unSortedArray, 6)).toEqual(1);
  });

  test("should search string in array", () => {
    const unSortedArray = ["a", "b", "h", "t", "v", "c"];
    expect(linearSearch(unSortedArray, "t")).toEqual(3);
  });
});

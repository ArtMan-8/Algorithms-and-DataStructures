import linearSearch from "./linearSearch";

describe("Linear Search", () => {
  it("should search numbers in array", () => {
    const array = [1, 6, 9, 5, 8, 3];
    expect(linearSearch(array, 6)).toEqual(1);
  });

  it("should search string in array", () => {
    const array = ["a", "b", "h", "t", "v", "c"];
    expect(linearSearch(array, "t")).toEqual(3);
  });

  it("should search non-existent value", () => {
    const array = ["a", 4, "h", "t", 1, "c"];
    expect(linearSearch(array, 0)).toBeNull();
  });
});

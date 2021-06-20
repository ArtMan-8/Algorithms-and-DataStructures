import GCD from "./GCD";
import GCDRecursion from "./GCDRecursion";

describe("GCD - Euclidean Algorithm", () => {
  test("should while loop", () => {
    expect(GCD(25, 0)).toEqual(25);
    expect(GCD(1680, 640)).toEqual(80);
  });

  test("should recursion", () => {
    expect(GCD(25, 0)).toEqual(25);
    expect(GCDRecursion(1680, 640)).toEqual(80);
  });
});

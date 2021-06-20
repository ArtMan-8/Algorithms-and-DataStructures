import factorial from "./factorial";
import factorialRecursion from "./factorialRecursion";

describe("Recursion Factorial", () => {
  test("should while loop", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(5)).toEqual(120);
  });

  test("should recursion", () => {
    expect(factorialRecursion(0)).toEqual(1);
    expect(factorialRecursion(5)).toEqual(120);
  });
});

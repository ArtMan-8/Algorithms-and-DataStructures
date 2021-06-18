import factorial from "./factorial";

describe("Recursion Factorial", () => {
  test("should 5 factorial", () => {
    const number = 5;
    const result = 120;
    expect(factorial(number)).toEqual(result);
  });
});

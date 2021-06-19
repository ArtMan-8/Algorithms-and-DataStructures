import euclideanAlgorithm from "./euclideanAlgorithm";
import euclideanAlgorithmRecursion from "./euclideanAlgorithmRecursion";

describe("Euclidean Algorithm", () => {
  test("should while loop", () => {
    expect(euclideanAlgorithm(25, 25)).toEqual(25);
    expect(euclideanAlgorithm(1680, 640)).toEqual(80);
  });

  test("should recursion", () => {
    expect(euclideanAlgorithmRecursion(25, 25)).toEqual(25);
    expect(euclideanAlgorithmRecursion(1680, 640)).toEqual(80);
  });
});

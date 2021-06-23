import { getSortedArray } from "../../utils";
import fisherYates from "./fisherYates";

describe("Fisher–Yates shuffle", () => {
  test("testing", () => {
    const sortedArray = getSortedArray(100);
    const shuffleArray = fisherYates(sortedArray);

    expect(shuffleArray).not.toEqual(sortedArray);
    expect(shuffleArray).toEqual(expect.arrayContaining(sortedArray));
  });
});

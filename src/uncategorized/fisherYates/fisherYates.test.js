import { getSortedArray } from "../../utils";
import fisherYates from "./fisherYates";

describe("Fisher–Yates shuffle", () => {
  test("testing", () => {
    const sortedArray = getSortedArray(100);
    const sortedArrayString = JSON.stringify(sortedArray.sort());

    const shuffleArray = fisherYates(sortedArray);
    const shuffleArrayString = JSON.stringify(shuffleArray.sort());

    expect(shuffleArrayString).toEqual(sortedArrayString);
  });
});

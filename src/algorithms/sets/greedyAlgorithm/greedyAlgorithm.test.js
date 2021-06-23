import greedyAlgorithm from "./greedyAlgorithm";

describe("Greedy Algorithm", () => {
  describe("Simple", () => {
    test("states needed", () => {
      const stations = {};
      stations["kone"] = new Set(["id", "nv", "ut"]);
      stations["ktwo"] = new Set(["wa", "id", "mt"]);
      stations["kthree"] = new Set(["or", "nv", "ca"]);
      stations["kfour"] = new Set(["nv", "ut"]);
      stations["kfive"] = new Set(["ca", "az"]);

      const statesNeeded = new Set([
        "mt",
        "wa",
        "or",
        "id",
        "nv",
        "ut",
        "ca",
        "az",
      ]);

      const expectStation = new Set(["kone", "ktwo", "kthree", "kfive"]);

      expect(greedyAlgorithm(stations, statesNeeded)).toEqual(expectStation);
    });
  });
});

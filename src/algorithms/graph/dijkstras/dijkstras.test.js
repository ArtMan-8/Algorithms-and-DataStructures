import dijkstras from "./dijkstras";

describe("dijkstras", () => {
  describe("Simple", () => {
    const graph = {};
    graph["start"] = {};
    graph["start"]["a"] = 6;
    graph["start"]["b"] = 2;

    graph["a"] = {};
    graph["a"]["fin"] = 1;

    graph["b"] = {};
    graph["b"]["a"] = 3;
    graph["b"]["fin"] = 5;

    graph["fin"] = {};

    const costs = {};
    costs["a"] = 6;
    costs["b"] = 2;
    costs["fin"] = Infinity;

    const parents = {};
    parents["a"] = "start";
    parents["b"] = "start";
    parents["fin"] = null;

    test("Cost from the start to each node", () => {
      expect(dijkstras(graph, costs, parents)).toEqual({ a: 5, b: 2, fin: 6 });
    });
  });
});

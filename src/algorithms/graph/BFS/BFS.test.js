import BFS from "./BFS";

describe("BFS", () => {
  describe("Simple", () => {
    const graph = {};
    graph["you"] = ["alice", "bob", "claire"];
    graph["bob"] = ["anuj", "peggy"];
    graph["alice"] = ["peggy"];
    graph["claire"] = ["thom", "jonny"];
    graph["anuj"] = [];
    graph["peggy"] = [];
    graph["thom"] = [];
    graph["jonny"] = [];

    test("find seller", () => {
      expect(BFS(graph, "peggy")).toBeFalsy();
      expect(BFS(graph, "you")).toBe("thom");
    });
  });
});

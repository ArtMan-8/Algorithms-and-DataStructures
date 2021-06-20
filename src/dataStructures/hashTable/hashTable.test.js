import HashTableSimple from "./hashTableSimple";

describe("Hash Table", () => {
  describe("Simple", () => {
    const ht = new HashTableSimple();
    beforeEach(() => {
      ht.clear();
      ht.set("alfa", 10);
      ht.set("beta", 20);
      ht.set("gamma", 30);
    });

    test("should HashTable length", () => {
      expect(ht.length).toEqual(3);
    });

    test("should add item", () => {
      expect(ht.set("zeta", 50)).toEqual(true);
      expect(ht.set("gamma", 40)).toEqual(false);
    });

    test("should get item", () => {
      expect(ht.get("alfa")).toEqual(10);
      expect(ht.get("zeta")).toEqual(null);
    });

    test("should has item", () => {
      expect(ht.has("beta")).toEqual(true);
      expect(ht.has("tetha")).toEqual(false);
    });

    test("should delete item", () => {
      expect(ht.delete("beta")).toEqual(true);
      expect(ht.delete("tetha")).toEqual(false);
    });

    test("should clear HashTable", () => {
      ht.clear();
      expect(ht.length).toEqual(0);
    });
  });
});

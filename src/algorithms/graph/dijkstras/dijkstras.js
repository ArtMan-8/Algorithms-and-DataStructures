/**
 * Dijkstras - simple impementation
 * from book Grokking Algorithms
 * @param {object} graph
 * @param {object} cost
 * @param {object} parents
 * @returns {object}
 */
export default function dijkstras(graph, costs, parents) {
  let processed = [];

  function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
      const cost = costs[node];
      if (cost < lowestCost && processed.indexOf(node) === -1) {
        lowestCost = cost;
        lowestCostNode = node;
      }
    }
    return lowestCostNode;
  }

  let node = findLowestCostNode(costs);

  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    Object.keys(neighbors).forEach(function (n) {
      const new_cost = cost + neighbors[n];
      if (costs[n] > new_cost) {
        costs[n] = new_cost;
        parents[n] = node;
      }
    });

    processed = processed.concat(node);
    node = findLowestCostNode(costs);
  }

  return costs;
}

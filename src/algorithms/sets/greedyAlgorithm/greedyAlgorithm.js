/**
 * Greedy Algorithm - simple impementation
 * from book Grokking Algorithms
 * @param {object} sets
 * @returns
 */
export default function greedyAlgorithm(stations, statesNeeded) {
  let needsStations = new Set(statesNeeded);
  const finalStations = new Set();

  while (needsStations.size) {
    let bestStation = null;
    let statesCovered = new Set();
    for (let station in stations) {
      const states = stations[station];
      const covered = new Set([...needsStations].filter((x) => states.has(x)));
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    needsStations = new Set(
      [...needsStations].filter((x) => !statesCovered.has(x))
    );
    finalStations.add(bestStation);
  }

  return finalStations;
}

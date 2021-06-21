/**
 * BFS - simple impementation
 * from book Grokking Algorithms
 * @param {object} graph
 * @param {string} name
 * @returns {(string|false)}
 */
export default function BFS(graph, name) {
  let searchQueue = [];
  const searched = [];
  searchQueue = searchQueue.concat(graph[name]);

  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (searched.includes(person) === false) {
      if (isSeller(person)) {
        return person;
      }

      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }

  return false;
}

/**
 * Person is seller
 * @param {string} name
 * @returns {boolean}
 */
function isSeller(name) {
  return name[name.length - 1] === "m";
}

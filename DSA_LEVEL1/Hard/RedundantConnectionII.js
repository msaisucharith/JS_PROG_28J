function findRedundantDirectedConnection(edges) {
  const n = edges.length;
  const parent = Array(n + 1).fill(0);
  let first = null;
  let second = null;

  for (let [u, v] of edges) {
    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      first = [parent[v], v];
      second = [u, v];
      break;
    }
  }

  const ufParent = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  console.log(ufParent);

  function find(x) {
    if (ufParent[x] !== x) ufParent[x] = find(ufParent[x]);
    return ufParent[x];
  }

  function union(u, v) {
    const rootU = find(u);
    const rootV = find(v);
    if (rootU === rootV) return false; // cycle found
    ufParent[rootV] = rootU;
    return true;
  }

  for (let [u, v] of edges) {
    if (second && u === second[0] && v === second[1]) continue;

    if (!union(u, v)) {
      if (first) return first;
      return [u, v];
    }
    console.log(ufParent);
    return second;
  }
}

edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(findRedundantDirectedConnection(edges));

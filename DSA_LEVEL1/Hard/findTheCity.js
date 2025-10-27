function findTheCity(n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (const [u, v, w] of edges) {
    dist[u][v] = w;
    dist[v][u] = w;
  }

  console.log(dist);
}

edges = [
  [0, 1, 3],
  [1, 2, 1],
  [1, 3, 4],
  [2, 3, 1],
];

n = 4;
distanceThreshold = 4;

console.log(findTheCity(n, edges, distanceThreshold));

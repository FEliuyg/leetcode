// K 站中转内最便宜的航班
// dp[t][i] = min(dp[t-1][j], dp[1][i])
export default function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const f = Array.from({ length: k + 2 }).map(() =>
    Array.from({ length: n }).map(() => Number.MAX_SAFE_INTEGER)
  );

  f[0][src] = 0;

  for (let i = 1; i <= k + 1; i++) {
    for (const flight of flights) {
      const [from, to, cost] = flight;
      f[i][to] = Math.min(f[i][to], f[i - 1][from] + cost);
    }
  }

  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i <= k + 1; i++) {
    result = Math.min(result, f[i][dst]);
  }

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
}

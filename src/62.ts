export default function uniquePaths(m: number, n: number): number {
  const resultArr = Array.from({ length: m }).map((d) =>
    Array.from({ length: n }).map((a) => 0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        resultArr[i][j] = 1;
      } else if (i === 0) {
        resultArr[i][j] = resultArr[i][j - 1];
      } else if (j === 0) {
        resultArr[i][j] = resultArr[i - 1][j];
      } else {
        resultArr[i][j] = resultArr[i - 1][j] + resultArr[i][j - 1];
      }
    }
  }

  return resultArr[m - 1][n - 1];
}

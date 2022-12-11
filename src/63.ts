// 不同路径 II
// 公式：dp(m, n) = dp(m -1, n) + dp(m, n - 1);
export default function uniquePathsWithObstacles(
  obstacleGrid: number[][]
): number {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }

  for (let m = 0; m < obstacleGrid.length; m++) {
    for (let n = 0; n < obstacleGrid[0].length; n++) {
      if (obstacleGrid[m][n] !== 1) {
        if (m === 0 && n === 0) {
          obstacleGrid[m][n] = 1;
        } else if (m === 0) {
          obstacleGrid[m][n] = obstacleGrid[m][n - 1];
        } else if (n === 0) {
          obstacleGrid[m][n] = obstacleGrid[m - 1][n];
        } else {
          obstacleGrid[m][n] = obstacleGrid[m][n - 1] + obstacleGrid[m - 1][n];
        }
      } else {
        obstacleGrid[m][n] = 0;
      }
    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
}

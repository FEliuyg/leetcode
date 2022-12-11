import { expect, test } from 'vitest';
import uniquePathsWithObstacles from '../src/63';

test('测试不同路径 II', () => {
  const obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  expect(uniquePathsWithObstacles(obstacleGrid)).toBe(2);

  const obstacleGrid2 = [
    [0, 1],
    [0, 0],
  ];
  expect(uniquePathsWithObstacles(obstacleGrid2)).toBe(1);

  const obstacleGrid3 = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ];
  expect(uniquePathsWithObstacles(obstacleGrid3)).toBe(7);
});

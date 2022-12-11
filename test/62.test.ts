import { expect, test } from 'vitest';
import uniquePaths from '../src/62';

test('不同路径', () => {
  expect(uniquePaths(3, 7)).toBe(28);
  expect(uniquePaths(3, 2)).toBe(3);
  expect(uniquePaths(3, 3)).toBe(6);
});

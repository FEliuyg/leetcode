import { expect, test } from 'vitest';
import findCheapestPrice from '../src/787';

test('K 站中转内最便宜的航班', () => {
  expect(
    findCheapestPrice(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      1
    )
  ).toBe(200);

  expect(
    findCheapestPrice(
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      0
    )
  ).toBe(500);

  expect(
    findCheapestPrice(
      5,
      [
        [4, 1, 1],
        [1, 2, 3],
        [0, 3, 2],
        [0, 4, 10],
        [3, 1, 1],
        [1, 4, 3],
      ],
      2,
      1,
      1
    )
  ).toBe(-1);
});

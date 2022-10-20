import { expect, test } from "vitest";
import countBinarySubstrings from "../src/696";

test("696.计数二进制子串", () => {
  expect(countBinarySubstrings("00110011")).toBe(6);
  expect(countBinarySubstrings("10101")).toBe(4);
});

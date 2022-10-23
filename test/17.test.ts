import { test, expect } from "vitest";
import letterCombinations from "../src/17";

test("17.电话号码组合", () => {
  expect(letterCombinations("23")).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);

  expect(letterCombinations("")).toEqual([]);

  expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
});

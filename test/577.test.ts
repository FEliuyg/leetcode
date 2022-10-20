import { test, expect } from "vitest";
import reverseWords from "../src/577";

test("577.反转字符串", () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  );
});

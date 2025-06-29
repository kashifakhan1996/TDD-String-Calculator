const { add } = require("./stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for one input", () => {
  expect(add("1")).toBe(1);
});

test("returns sum for two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("handles unknown amount of numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom single-character delimiter", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws on negative numbers with all negatives listed", () => {
  expect(() => add("1,-2,3,-5")).toThrow("negatives not allowed -2,-5");
});

test("ignores numbers greater than 1000", () => {
  expect(add("2,1001")).toBe(2);
});

test("supports custom delimiter of any length", () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test("supports multiple delimiters", () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports multiple multi-character delimiters", () => {
  expect(add("//[**][%%]\n1**2%%3")).toBe(6);
});

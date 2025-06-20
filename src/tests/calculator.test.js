const { sum } = require("../app/calculator");

describe("sum", () => {
  test("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("adds positive and negative number", () => {
    expect(sum(5, -2)).toBe(3);
  });

  test("adds two negative numbers", () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  test("adds zero", () => {
    expect(sum(0, 7)).toBe(7);
    expect(sum(0, 0)).toBe(0);
  });
});
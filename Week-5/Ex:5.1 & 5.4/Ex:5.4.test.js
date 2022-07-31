/* This is a test file for the math operations. */
const MathOps = require("./Ex:5.4");

describe("Math Operation test using jest", () => {
  test("40 + 60 = 100", () => {
    expect(MathOps.add(40, 60)).toBe(100);
  });

  test("400 - 150 = 250", () => {
    expect(MathOps.subtract(400, 150)).toBe(250);
  });

  test("20 x 40 = 800", () => {
    expect(MathOps.multiply(20, 40)).toBe(800);
  });
}); 
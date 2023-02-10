import calculator from "./calculator";

test("Should return 10", () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test("Should return 20", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test("Should return 80", () => {
  expect(calculator.subtract(100, 20)).toBe(80);
});

test("Should return 5", () => {
  expect(calculator.divide(20, 4)).toBe(5);
});

test("Should throw errors", () => {
  expect(() => calculator.add("Ffds", [234])).toThrow(Error);
  expect(() => calculator.add(324, "5")).toThrow(Error);
  expect(() => calculator.add([56756756], [567567])).toThrow(Error);
  expect(() => calculator.add(324, [1])).toThrow(Error);
  expect(() => calculator.add("34234", "32498")).toThrow(Error);
});

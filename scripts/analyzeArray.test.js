import analyzeArray from "./analyzeArray";

test("Should return an object", () => {
  const obj = {
    "average": 4,
    "min": 1,
    "max": 8,
    "length": 6
  };
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(obj);
})

test("Should return an object", () => {
  const obj = {
    "average": 0,
    "min": 0,
    "max": 0,
    "length": 5
  };
  expect(analyzeArray([0,0,0,0,0])).toStrictEqual(obj);
})

test("Should return an object", () => {
  const obj = {
    "average": 7.5,
    "min": 5,
    "max": 10,
    "length": 8
  };
  expect(analyzeArray([5,5,5,5,10,10,10,10])).toStrictEqual(obj);
})

test("Should return an object", () => {
  const obj = {
    "average": 1.375,
    "min": 1,
    "max": 1.5,
    "length": 4
  };
  expect(analyzeArray([1.5, 1, 1.5, 1.5])).toStrictEqual(obj);
})

test("Should throw an error", () => {
  expect(() => analyzeArray([])).toThrow(Error);
  expect(() => analyzeArray([1,8,3,"4",2,6])).toThrow(Error);
  expect(() => analyzeArray(1398)).toThrow(Error);
  expect(() => analyzeArray("4, 6, 8")).toThrow(Error);
  expect(() => analyzeArray([{1:1}, {2:2}])).toThrow(Error);
})
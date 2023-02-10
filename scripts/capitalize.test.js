import capitalize from "./capitalize";

test("Should return 'TESt'", () => {
  expect(capitalize("tESt")).toBe("TESt");
});

test("Should return 'tgf4335345%$#%@%352523523'", () => {
  expect(capitalize("tgf4335345%$#%@%352523523")).toBe("Tgf4335345%$#%@%352523523");
});

test("Should return 'Derfewdsfswe'", () => {
  expect(capitalize("Derfewdsfswe")).toBe("Derfewdsfswe");
});

test("Should return an error", () => {
  expect(() => capitalize("393423kf")).toThrow(Error);
});

test("Should return 'HJHsfgdsfgsdg'", () => {
  expect(capitalize("hJHsfgdsfgsdg")).toBe("HJHsfgdsfgsdg");
});


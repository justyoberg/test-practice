import reverseString from "./reverseString";

test("Should return '123456789'", () => {
  expect(reverseString("987654321")).toBe("123456789");
});

test("Should return 'ASD#@$afgregjIFJESIDJF8383w28JMDFS'", () => {
  expect(reverseString("SFDMJ82w3838FJDISEJFIjgergfa$@#DSA")).toBe("ASD#@$afgregjIFJESIDJF8383w28JMDFS");
});

test("Should return 'Hello, world!'", () => {
  expect(reverseString()).toBe("Hello, world!");
});

test("Should return 'dh34y3y3w4yt8jrf8sefIDMASIDM*#*#@$@#*$&#@*$&@#*$@#($J*Fkdcsimflfo owfkowkfw fsfse fasdf sa '", () => {
  expect(
    reverseString(" as fdsaf esfsf wfkwokfwo oflfmiscdkF*J$(#@$*#@&$*@#&$*#@$@#*#*MDISAMDIfes8frj8ty4w3y3y43hd"))
    .toBe("dh34y3y3w4yt8jrf8sefIDMASIDM*#*#@$@#*$&#@*$&@#*$@#($J*Fkdcsimflfo owfkowkfw fsfse fasdf sa ");
});

test("Should throw an error", () => {
  expect(() => reverseString(3424)).toThrow(Error);
})
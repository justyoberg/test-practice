import caesarCipher from "./caesarCipher";

test("Should return 'abcDEF'", () => {
  expect(caesarCipher("abcDEF", 0)).toBe("abcDEF"); 
});

test("Should return ''", () => {
  expect(caesarCipher("", 2342)).toBe(""); 
});

test("Should return 'nkmpnqKMZKrm39'", () => {
  expect(caesarCipher("gdfigjDFSDkf39", 7)).toBe("nkmpnqKMZKrm39"); 
});

test("Should return 'zrcwzcw5r45prKPW@!$XK!@$!$!$kyxkyylxy lbtlh yhltwy //y lwthydb #@$(@*#($) '", () => {
  expect(caesarCipher("gyjdgjd5y45wyRWD@!$ER!@$!$!$rferffsef siaso fosadf //f sdaofki #@$(@*#($) ", 19))
    .toBe("zrcwzcw5r45prKPW@!$XK!@$!$!$kyxkyylxy lbtlh yhltwy //y lwthydb #@$(@*#($) "); 
});

test("Should return 'obq43 q34qdc3g48cgh49h(HCA(BAC(TBH(AC*OT#FLOH32tWWNNWNngfalfcaftc'", () => {
  expect(caesarCipher("ret43 t34tgf3j48fjk49k(KFD(EDF(WEK(DF*RW#IORK32wZZQQZQqjidoifdiwf", 23))
    .toBe("obq43 q34qdc3g48cgh49h(HCA(BAC(TBH(AC*OT#FLOH32tWWNNWNngfalfcaftc"); 
});

test("Should throw an error", () => {
  expect(() => caesarCipher("Hello world", 34)).toThrow(Error);
  expect(() => caesarCipher(["Dasdsad"], 5)).toThrow(Error);
  expect(() => caesarCipher([3242], 25)).toThrow(Error);
  expect(() => caesarCipher("Hello", "5")).toThrow(Error);
})

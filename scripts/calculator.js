const calculator = (() => {

  const argsAreNumbers = (x, y) =>  {
    if (typeof(x) === 'number' && typeof(y) === "number") return true;
    else throw new Error("Arguments must be numbers.");
  };

  const add = (x, y) => {
    if (argsAreNumbers(x, y)) return x + y;
  };

  const subtract = (x, y) => {
    if (argsAreNumbers(x, y)) return x - y;
  };

  const divide = (x, y) => {
    if (argsAreNumbers(x, y)) return x / y;
  };

  const multiply = (x, y) => {
    if (argsAreNumbers(x, y)) return x * y;
  };

  return {add, subtract, divide, multiply};

})();

export default calculator
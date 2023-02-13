const analyzeArray = (arr) => {
  
  checkArguments(arr);

  let array = arr.sort((a, b) => a - b);

  let length = array.length;
  let average = array.reduce((acc, cur) => acc + cur) / length;
  let min = array[0];
  let max = array[length - 1];

  return {
    "average": average,
    "min": min,
    "max": max,
    "length": length
  }
}

const checkArguments = (arr) => {

  if (!Array.isArray(arr)) {
    throw new Error("Must supply an array");
  } else if (arr.some((item) => typeof item !== "number")) {
    throw new Error("Array must contain only numbers");
  }

}

export default analyzeArray
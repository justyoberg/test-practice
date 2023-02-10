const caesarCipher = (string, factor) => {
  // Check arguments
  if (string === "") return "";
  if (typeof string !== "string") throw new Error("Must enter a string");
  if (factor > 26 || factor < 0 || typeof factor !== "number") {
    throw new Error("Must enter a factor between 0 and 26")
  };

  let returnValue = [];

  const isUpperCase = (letter) => {
    // Return true if the character is Upper case
    return letter === letter.toUpperCase();
  }

  for (let i = 0; i < string.length; i++) {
    // Push the character code of the current letter in the string to the return array
    if (string[i].match(/[a-zA-Z]/i)) returnValue.push(string.charCodeAt(i));
    // Push anything that isn't a letter to the return array
    else returnValue.push(string[i]);
  }
  
  for (let item in returnValue) {
    // Only execute if the array item is a number (converted string)
    if (typeof returnValue[item] === "number") {
      // Create the new character code
      let newValue = returnValue[item] + factor;
      
      if (newValue > 90 && isUpperCase(String.fromCharCode(returnValue[item]))){
        // newValue goes beyond "Z" in ASCII, make it wrap back to "A"
        newValue = newValue - 90;
        returnValue[item] = 64 + newValue;
      } else if (newValue > 122) {
        // newValue goes beyond "z" in ASCII, make it wrap back to "a"
        newValue = newValue - 122;
        returnValue[item] = 96 + newValue;
      } else {
        // Apply the factor normally
        returnValue[item] = newValue;
      };
      
      // Convert the item back to a letter
      returnValue[item] = String.fromCharCode(returnValue[item]);
    }
  }
  return returnValue.join("");
};

export default caesarCipher

const caesarCipher = (string, factor) => {
  // Validate arguments
  if (string === "") return "";
  checkArguments(string, factor);
  
  let strArray = string.split("");

  // Convert each letter in the split string to its ASCII code
  strArray.forEach((item) => {
    if (isLetter(item)){
      let index = strArray.indexOf(item);
      strArray[index] = item.charCodeAt(0);
    }
  });

  // Modify each letter's ASCII code to include the new factor
  // Code inside only executes if the current array item is ASCII code
  strArray.forEach((item) => {
    if (isNumber(item)){
      // Create string from the item to supply it to helper functions
      let itemStr = String.fromCharCode(item);
      let index = strArray.indexOf(item);
      let newValue = item + factor;
      
      if (isUpperCase(itemStr)){

        let exceeded = (newValue - 90) + 64;
        // If the newValue exceeds "Z", make it wrap back to "A", or proceed normally
        newValue > 90 ? strArray[index] = exceeded : strArray[index] = newValue;

      } else if (isLowerCase(itemStr)){

        let exceeded = (newValue - 122) + 96;
        // If the newValue exceeds "z", make it wrap back to "a", or proceed normally
        newValue > 122 ? strArray[index] = exceeded : strArray[index] = newValue;

      }
      // Change the ASCII code back to its letter representation
      strArray[index] = String.fromCharCode(strArray[index]);
    }
  });

  return strArray.join("");
}

// Check if arg is a letter
const isLetter = letter => {return letter.match(/[a-zA-Z]/i)};

// Check if arg is a number and not a string of a number
const isNumber = number => {
  return number.toString().match(/.[0-9]*/i) && typeof number !== "string"
};

// Check if character is uppercase
const isUpperCase = letter => {return letter === letter.toUpperCase()};

// Check if character is lowercase
const isLowerCase = letter => {return letter === letter.toLowerCase()};

// Throw an error if supplied with improper args
const checkArguments = (string, factor) => {

  if (typeof string !== "string") {
    throw new Error("First argument must be a string");
  } else if (factor > 26 || factor < 0 || typeof factor !== "number") {
    throw new Error("Second argument must be a number from 0 to 26");
  };

};

export default caesarCipher

// OLD CODE //////////////////////////////////////////////////// 

// const caesarCipher = (string, factor) => {
//   // Check arguments
//   if (string === "") return "";
//   if (typeof string !== "string") throw new Error("First argument must be a string");
//   if (factor > 26 || factor < 0 || typeof factor !== "number") {
//     throw new Error("Second argument must be a number from 0 to 26")
//   };

//   let returnValue = [];

//   const isUpperCaseCase = (letter) => {
//     // Return true if the character is Upper case
//     return letter === letter.toUpperCase();
//   }

//   for (let i = 0; i < string.length; i++) {
//     // Push the character code of the current letter in the string to the return array
//     if (string[i].match(/[a-zA-Z]/i)) returnValue.push(string.charCodeAt(i));
//     // Push anything that isn't a letter to the return array
//     else returnValue.push(string[i]);
//   }
  
//   for (let item in returnValue) {
//     // Only execute if the array item is a number (converted string)
//     if (typeof returnValue[item] === "number") {
//       // Create the new character code
//       let newValue = returnValue[item] + factor;
      
//       if (newValue > 90 && isUpperCaseCase(String.fromCharCode(returnValue[item]))){
//         // newValue goes beyond "Z" in ASCII, make it wrap back to "A"
//         newValue = newValue - 90;
//         returnValue[item] = 64 + newValue;
//       } else if (newValue > 122) {
//         // newValue goes beyond "z" in ASCII, make it wrap back to "a"
//         newValue = newValue - 122;
//         returnValue[item] = 96 + newValue;
//       } else {
//         // Apply the factor normally
//         returnValue[item] = newValue;
//       };
//       // Convert the item back to a letter
//       returnValue[item] = String.fromCharCode(returnValue[item]);
//     }
//   }
//   return returnValue.join("");
// };
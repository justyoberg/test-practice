const capitalize = (string) => {

  if (string[0].toUpperCase() !== string[0].toLowerCase()) {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    throw new Error("Cannot capitalize that string.");
  };

};

export default capitalize
const capitalize = (string) => {

  if (string[0].toUpperCase() !== string[0].toLowerCase()) {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    throw new Error("Can only capitalize strings that begin with a letter");
  };

};

export default capitalize
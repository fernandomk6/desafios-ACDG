const booleanToString = boolean => {
  if (typeof boolean !== "boolean") {
    return "Parametro deve ser do tipo boolean";
  }

  return boolean.toString();
};

const yourParam = "true";
const result = booleanToString(yourParam);

console.log(result);


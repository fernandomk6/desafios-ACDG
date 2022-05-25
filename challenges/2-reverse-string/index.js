const reverseString = (string) => {
  if (typeof string !== "string") {
    return "Parametro deve ser do tipo string";
  }

  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
};

const yourParam = "fernando";
const result = reverseString(yourParam);

console.log(result);
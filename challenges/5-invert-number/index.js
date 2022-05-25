const invertNumber = (number) => {

  if (typeof number !== "number") {
    return "O parametro deve ser do tipo number";
  };

  number = number - number - number;
  return number;     
};

const number = 60;
const result = invertNumber(number);
console.log(result);
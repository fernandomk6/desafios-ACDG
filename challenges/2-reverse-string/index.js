const reverseString = (string) => {
  if (typeof string !== "string") {
    return "Parametro deve ser do tipo string";
  }

  let newString = "";

  // i = ultimo indice da string
  // cada iteração o i é decrementado ate ficar = 0, que é o primeiro indice da string
  // para cada iteração o caractere do indice i, é concatenado na newString
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
};

const yourParam = "fernando";
const result = reverseString(yourParam);

console.log(result);
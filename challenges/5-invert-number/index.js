const invertNumber = (number) => {

  if (typeof number !== "number") {
    return "O parametro deve ser do tipo number";
  };

  number = number - number - number;
  return number;     
};

const yourParam = 60;
const result = invertNumber(yourParam);
console.log(result);

/**
 * pode parecer um pouco estranho essa expressão, a principio parece que
 * -60 -60 -60 dará -180,
 * 
 * porem o javascript interpreta como
 * (-60) - (-60) - (-60)
 * isso é o mesmo que 
 * -60 + 60 + 60 = 60
 * 
 * o mesmo exemplo com numero positivo
 * 
 * (+60) - (+60) - (+60) 
 * isso é o mesmo que
 * 60 -60 -60 = -60
 */
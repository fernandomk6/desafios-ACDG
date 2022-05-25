const checkTestResult = (scores) => {
  if (!Array.isArray(scores) || scores.length !== 2) {
    return "O parametro deve ser um array com 2 elementos do tipo number";
  }

  for (const score of scores) {
    if (typeof score !== "number" || score < 0) {
      return "Um dos elementos da lista não é um numero válido";
    }
  }

  const av1 = scores[0];
  const av2 = scores[1];
  let regularAverage = (av1 + av2) / 2;
  
  if (regularAverage >= 8) {
    return "Aprovado direto";
  } else if (regularAverage < 4) {
    return "Reprovado direto";
  } else if (regularAverage >= 4 && regularAverage <= 7.9) {

    for (let i = 1; i <= 10; i++) {
      if (((regularAverage + i) / 2) >= 5) {
        return `Ira para a final, precisando tirar pelo menos ${i} para ser aprovado`;
      }
    }
    
  }
};

const scoreList = [4, 4];
const result = checkTestResult(scoreList);
console.log(result);
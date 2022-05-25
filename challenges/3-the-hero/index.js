const confrontDragons = (ammo, dragons) => {
  if (typeof ammo !== "number" || typeof dragons !== "number") {
    return "Os parametros precisam ser do tipo inteiro";
  }
  
  let myAmmo = ammo;
  let totalDragons = dragons;
  let killedDragons = 0;
  let survived;
  
  // cata iteração é uma batalha contra um dragao
  for (let i = 0; i < totalDragons; i++) {

    // verificando se tem munição para derrotar o dragao atual
    if (myAmmo < 2) {

      // caso não tenha, a mensagem de retorno é setada e o codigo é fechado.
      survived = "não";
      killedDragons = i;
      return `Balas restantes: ${myAmmo}. Dragoes abatidos: ${killedDragons}. Irei sobreviver? ${survived}`;
    }

    // caso tenha municão, decrementa em 2, e incrementa o numero de dragoes derrotados
    myAmmo -= 2;
    killedDragons++;
  }

  // se o loop foi concluido, o heroi sobreviveu
  survived = "sim";

  // setando a mensagem de retorno
  return `Balas restantes: ${myAmmo}. Dragoes abatidos: ${killedDragons}. Irei sobreviver? ${survived}`;
};

const ammoNumber = 1;
const dragonsNumber = 0;

const result = confrontDragons(ammoNumber, dragonsNumber);

console.log(result);
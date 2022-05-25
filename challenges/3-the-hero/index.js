const confrontDragons = (ammo, dragons) => {
  if (typeof ammo !== "number" || typeof dragons !== "number") {
    return "Os parametros precisam ser do tipo inteiro";
  }
  
  let myAmmo = ammo;
  let totalDragons = dragons;
  let killedDragons = 0;
  let survived;
  
  for (let i = 0; i < totalDragons; i++) {
    if (myAmmo < 2) {
      survived = "não";
      killedDragons = i;
      return `Balas restantes: ${myAmmo}. Dragoes abatidos: ${killedDragons}. Irei sobreviver? ${survived}`;
    }

    myAmmo -= 2;
    killedDragons++;
  }

  survived = "sim";

  return `Balas restantes: ${myAmmo}. Dragoes abatidos: ${killedDragons}. Irei sobreviver? ${survived}`;
};

const ammoNumber = 1;
const dragonsNumber = 0;

const result = confrontDragons(ammoNumber, dragonsNumber);

console.log(result);
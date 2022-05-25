const addingArray = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Parametros invalidos";
  }

  for (const iterator of arr1) {
    if (typeof iterator !== "number") {
      return "O array deve conter apenas numeros";
    }
  }

  for (const iterator of arr2) {
    if (typeof iterator !== "number") {
      return "O array deve conter apenas numeros";
    }
  }

  let newArray = [];

  if (arr1.length <= arr2.length) {
    for (let index = 0; index < arr1.length; index++) {
      const element = arr1[index];
      newArray.push(element + arr2[index]);
    }

    return newArray;
  } 

  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    newArray.push(element + arr2[index]);
  }

  return newArray;
};

const array1 = [10,20,30,40,50] ;
const array2 = [1,2,3,4,"5"];
const result = addingArray(array1, array2);
console.log(result);
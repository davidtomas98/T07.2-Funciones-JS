const readline = require('readline');

// Función para rellenar un array con números aleatorios
function rellenarArrayAleatorio(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Función para crear un nuevo array con la multiplicación de elementos de dos arrays
function multiplicarArrays(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error("Los arrays deben tener la misma dimensión.");
  }

  const resultado = [];
  for (let i = 0; i < array1.length; i++) {
    resultado.push(array1[i] * array2[i]);
  }
  return resultado;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce la dimensión de los arrays: ", (dimension) => {
  const array1 = new Array(parseInt(dimension));
  const array2 = new Array(parseInt(dimension));

  rellenarArrayAleatorio(array1, 1, 100);
  rellenarArrayAleatorio(array2, 1, 100);

  console.log("Array 1:", array1);
  console.log("Array 2:", array2);

  try {
    const resultado = multiplicarArrays(array1, array2);
    console.log("Resultado de la multiplicación:", resultado);
  } catch (error) {
    console.error(error.message);
  }

  rl.close();
});

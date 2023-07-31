const readline = require('readline');

// Función para rellenar el array con números aleatorios
function rellenarArrayAleatorio(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Función para mostrar el contenido y la suma del array
function mostrarArray(array) {
  array.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
  });

  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  console.log(`La suma de los valores es: ${suma}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el tamaño del array: ", (tamaño) => {
  const array = new Array(parseInt(tamaño));
  rl.question("Introduce el valor mínimo para los números aleatorios: ", (min) => {
    rl.question("Introduce el valor máximo para los números aleatorios: ", (max) => {
      rellenarArrayAleatorio(array, parseInt(min), parseInt(max));
      mostrarArray(array);
      rl.close();
    });
  });
});

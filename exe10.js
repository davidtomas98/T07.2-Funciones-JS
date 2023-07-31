const readline = require('readline');

// Función para comprobar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  if (numero % 2 === 0 || numero % 3 === 0) return false;

  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Función para generar el array de números primos
function generarArrayPrimos(tamaño, min, max) {
  const arrayPrimos = [];
  while (arrayPrimos.length < tamaño) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    if (esPrimo(numeroAleatorio)) {
      arrayPrimos.push(numeroAleatorio);
    }
  }
  return arrayPrimos;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el tamaño del array de números primos: ", (tamaño) => {
  rl.question("Introduce el valor mínimo para los números primos: ", (min) => {
    rl.question("Introduce el valor máximo para los números primos: ", (max) => {
      const arrayPrimos = generarArrayPrimos(parseInt(tamaño), parseInt(min), parseInt(max));
      console.log(`El array de números primos es: ${arrayPrimos}`);
      const maximo = Math.max(...arrayPrimos);
      console.log(`El mayor número primo es: ${maximo}`);
      rl.close();
    });
  });
});

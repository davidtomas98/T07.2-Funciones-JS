const readline = require('readline');

// Función para rellenar un array con números aleatorios entre 1 y 300
function rellenarArrayAleatorio(array, min, max) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Función para filtrar los números que terminan en un dígito específico
function filtrarNumerosTerminadosEn(array, digito) {
  return array.filter(numero => numero % 10 === digito);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce el tamaño del array: ", (tamaño) => {
  const array = new Array(parseInt(tamaño));

  rellenarArrayAleatorio(array, 1, 300);

  console.log("Array original:", array);

  rl.question("Introduce el dígito para filtrar (0-9): ", (digito) => {
    const digitoFiltrar = parseInt(digito);
    if (isNaN(digitoFiltrar) || digitoFiltrar < 0 || digitoFiltrar > 9) {
      console.error("Debes introducir un dígito válido (0-9).");
    } else {
      const numerosFiltrados = filtrarNumerosTerminadosEn(array, digitoFiltrar);
      console.log(`Números que terminan en ${digitoFiltrar}:`, numerosFiltrados);
    }
    rl.close();
  });
});

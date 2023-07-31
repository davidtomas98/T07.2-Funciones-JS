const readline = require("readline");

// Función para verificar si un número es primo
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Función principal para obtener el número del usuario y verificar si es primo
function verificarNumeroPrimo() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Introduce un número para verificar si es primo: ", (numero) => {
    rl.close();

    numero = parseInt(numero);

    if (isNaN(numero)) {
      console.log("Por favor, introduce un número válido.");
      return;
    }

    const resultado = esPrimo(numero);

    if (resultado) {
      console.log(`${numero} es un número primo.`);
    } else {
      console.log(`${numero} no es un número primo.`);
    }
  });
}

// Llamada a la función para verificar si el número es primo
verificarNumeroPrimo();

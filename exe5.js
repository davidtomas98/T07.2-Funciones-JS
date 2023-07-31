const readline = require("readline");

// Función para convertir un número decimal a binario
function decimalABinario(numero) {
  if (numero === 0) {
    return "0";
  }

  let binario = "";
  while (numero > 0) {
    const resto = numero % 2;
    binario = resto + binario;
    numero = Math.floor(numero / 2);
  }

  return binario;
}

// Función principal para obtener el número del usuario y convertirlo a binario
function convertirDecimalABinario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Introduce un número decimal para convertir a binario: ", (numero) => {
    rl.close();

    numero = parseInt(numero);

    if (isNaN(numero)) {
      console.log("Por favor, introduce un número válido.");
      return;
    }

    const binario = decimalABinario(numero);
    console.log(`El número en binario es: ${binario}`);
  });
}

// Llamada a la función para convertir el número a binario
convertirDecimalABinario();

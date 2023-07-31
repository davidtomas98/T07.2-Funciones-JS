const readline = require("readline");

// Función para calcular el factorial de un número
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}

// Función principal para obtener el número del usuario y calcular su factorial
function calcularFactorialUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Introduce un número para calcular su factorial: ", (numero) => {
    rl.close();

    numero = parseInt(numero);

    if (isNaN(numero)) {
      console.log("Por favor, introduce un número válido.");
      return;
    }

    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
  });
}

// Llamada a la función para calcular el factorial del número
calcularFactorialUsuario();

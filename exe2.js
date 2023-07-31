const readline = require("readline");

// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función principal para generar la cantidad de números aleatorios especificada por el usuario
function generarNumerosAleatorios() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Introduce el valor mínimo del rango: ", (min) => {
    rl.question("Introduce el valor máximo del rango: ", (max) => {
      rl.question("Introduce la cantidad de números aleatorios a generar: ", (cantidadNumeros) => {
        rl.close();

        // Convertir las entradas del usuario a números enteros
        min = parseInt(min);
        max = parseInt(max);
        cantidadNumeros = parseInt(cantidadNumeros);

        // Validar si las entradas son números válidos
        if (isNaN(min) || isNaN(max) || isNaN(cantidadNumeros)) {
          console.log("Por favor, introduce valores numéricos válidos.");
          return;
        }

        console.log("Números aleatorios generados:");
        for (let i = 0; i < cantidadNumeros; i++) {
          const numeroAleatorio = generarNumeroAleatorio(min, max);
          console.log(numeroAleatorio);
        }
      });
    });
  });
}

// Llamada a la función para generar los números aleatorios
generarNumerosAleatorios();

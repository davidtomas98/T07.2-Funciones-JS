const readline = require('readline');

// Función para contar el número de cifras de un número entero positivo
function contarCifras(numero) {
  if (numero < 0 || !Number.isInteger(numero)) {
    throw new Error("Por favor, introduce un número entero positivo.");
  }

  let cifras = 0;
  while (numero !== 0) {
    cifras++;
    numero = Math.floor(numero / 10);
  }

  return cifras;
}

// Crear interfaz de lectura de la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Obtener el número del usuario y contar cifras
rl.question("Introduce un número entero positivo: ", (numeroUsuario) => {
  try {
    const cifras = contarCifras(parseInt(numeroUsuario));
    console.log(`El número de cifras de ${numeroUsuario} es: ${cifras}`);
  } catch (error) {
    console.log(error.message);
  }
  rl.close();
});

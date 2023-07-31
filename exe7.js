const readline = require('readline');

// Función para realizar la conversión de euros a otras monedas
function convertirMoneda(cantidadEuros, moneda) {
  switch (moneda.toLowerCase()) {
    case 'libras':
      console.log(`${cantidadEuros} euros son ${cantidadEuros * 0.86} libras.`);
      break;
    case 'dólares':
      console.log(`${cantidadEuros} euros son ${cantidadEuros * 1.28611} dólares.`);
      break;
    case 'yenes':
      console.log(`${cantidadEuros} euros son ${cantidadEuros * 129.852} yenes.`);
      break;
    default:
      console.log(`La moneda ${moneda} no es válida.`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce la cantidad de euros: ", (cantidadEuros) => {
  rl.question("Introduce la moneda a la que quieres convertir (libras, dólares o yenes): ", (moneda) => {
    convertirMoneda(parseFloat(cantidadEuros), moneda);
    rl.close();
  });
});

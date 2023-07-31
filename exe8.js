const readline = require('readline');

// Función para rellenar el array con valores ingresados por el usuario
function rellenarArray(array) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let contador = 0;

  const llenarValor = () => {
    if (contador < array.length) {
      rl.question(`Introduce el valor para la posición ${contador}: `, (valor) => {
        array[contador] = parseFloat(valor);
        contador++;
        llenarValor();
      });
    } else {
      rl.close();
      mostrarArray(array);
    }
  };

  llenarValor();
}

// Función para mostrar el contenido y la suma del array
function mostrarArray(array) {
  array.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
  });

  const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
  console.log(`La suma de los valores es: ${suma}`);
}

const array = new Array(10);

rellenarArray(array);

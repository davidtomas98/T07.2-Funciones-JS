const readline = require('readline');

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  return Math.PI * radio ** 2;
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Función para calcular el área de un cuadrado
function calcularAreaCuadrado(lado) {
  return lado * lado;
}

// Función para obtener los valores y calcular el área según la figura
function calcularAreaFigura() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Introduce la figura (circulo, triangulo o cuadrado): ", (figura) => {
    const figuraLowerCase = figura.toLowerCase();

    if (figuraLowerCase === 'circulo') {
      rl.question("Introduce el radio del círculo: ", (radio) => {
        const area = calcularAreaCirculo(parseFloat(radio));
        console.log(`El área del círculo es: ${area}`);
        rl.close();
      });
    } else if (figuraLowerCase === 'triangulo') {
      rl.question("Introduce la base del triángulo: ", (base) => {
        rl.question("Introduce la altura del triángulo: ", (altura) => {
          const area = calcularAreaTriangulo(parseFloat(base), parseFloat(altura));
          console.log(`El área del triángulo es: ${area}`);
          rl.close();
        });
      });
    } else if (figuraLowerCase === 'cuadrado') {
      rl.question("Introduce el lado del cuadrado: ", (lado) => {
        const area = calcularAreaCuadrado(parseFloat(lado));
        console.log(`El área del cuadrado es: ${area}`);
        rl.close();
      });
    } else {
      console.log("Figura no válida. Por favor, introduce 'circulo', 'triangulo' o 'cuadrado'.");
      rl.close();
    }
  });
}

// Llamada a la función para calcular el área de la figura
calcularAreaFigura();

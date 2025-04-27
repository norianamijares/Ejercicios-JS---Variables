//Solicita al usuario el radio de un círculo y calcula el perímetro usando la fórmula P=2πr. Muestra el resultado en la consola.

let radio = prompt("Introduce el radio del círculo: ");

radio = parseFloat(radio);

let perimetro = 2 * Math.PI * radio;

console.log("El perímetro del círculo es: " + perimetro);
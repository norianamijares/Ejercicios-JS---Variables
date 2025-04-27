//Pide al usuario tres números, calcula el promedio y muestra el resultado en la consola.

let num1 = prompt("Introduce un número: ");
let num2 = prompt("Introduce otro número: ");
let num3 = prompt("Introduce un tercer número: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

let promedio = (num1 + num2 + num3) / 3;

console.log("El promedio de los tres números es: " + promedio);
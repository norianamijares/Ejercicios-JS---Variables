let num1 = prompt("Ingrese un número:");
let num2 = prompt("Ingrese otro número:");
let operacion = prompt("Ingrese la operación deseada: +, -, *, /");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "/") {
    resultado = num1 / num2;
} else {
    resultado = "Operación no válida";
}

alert("El resultado es: " + resultado);
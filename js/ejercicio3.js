//Pide al usuario un número y muestra en un alert si el número es par o impar.

let numero = prompt("Introduce un número: ");

numero = parseInt(numero);

if (numero % 2 === 0) {
    alert("El número es par.");
} else {
    alert("El número es impar.");
}
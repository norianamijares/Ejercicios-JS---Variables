//Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.

let minutos = prompt ("Ingresa una cantidad de minutos");

let segundos = minutos * 60;
let horas = minutos / 60;

alert(`La cantidad de minutos ingresada equivale a ${segundos} segundos y ${horas} horas`);
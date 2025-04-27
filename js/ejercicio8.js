//Calcular el IVA de un producto. Solicita al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Muestra el precio total en un alert.

let precioDolar = prompt("Ingrese el precio del producto en dólares: ");

let precioPeso = precioDolar * 1130;
let IVA = precioPeso * 0.21;
let precioTotal = precioPeso + IVA;

alert(`Precio en pesos sin IVA: $${precioPeso} 
IVA (21%): $${IVA} 
Precio total: $${precioTotal}`);
let precioDolar = prompt("Ingrese el precio del producto en dólares: ");

let precioPeso = precioDolar * 1130;
let IVA = precioPeso * 0.21;
let precioTotal = precioPeso + IVA;

alert(`Precio en pesos sin IVA: $${precioPeso} 
IVA (21%): $${IVA} 
Precio total: $${precioTotal}`);
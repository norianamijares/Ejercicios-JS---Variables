//Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log. Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo: document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de object.propiedad2 por hora!`)

let auto = {
    marca: "Ford",
    modelo: "Mustang GT",
    año: 2022,
    color: "Negro",
    motor: "V8 5.0L",
    caballosDeFuerza: 480,
    tipo: "Deportivo",
    peso: "1650 kg",
};

console.log("Información del auto:", auto);

document.write(`El modelo ${auto.modelo} de ${auto.marca} tiene un poderoso motor ${auto.motor}, ideal para los amantes de los autos ${auto.tipo}.`)
let miListaDePendientes = [
    "Reacher",
    "Yellowjackets",
    "The White Lotus",
    "Dune",
    "Renfield"
];

let nuevaPelicula = prompt("Ingresa una pelicula o serie que quieras agregar a la lista:")

miListaDePendientes.push(nuevaPelicula);

miListaDePendientes[1] = "The Last of Us";

console.log("Mi lista actualizada de pendientes es:")
console.log(miListaDePendientes);
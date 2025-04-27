//Películas o series para ver. Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
//•Pide al usuario que ingrese una nueva película y usa el método push para agregar una quitan película.
//•Modifica el nombre de la 2da película del array por una nueva.
//•Muestra el array actualizado por consola.

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
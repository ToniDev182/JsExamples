'use strict'; /* Se pone siempre al principio, sirve para que las variables no puedan cambiar de tipo de dato */

alert("hola mundo"); /*Muestra un mensaje emergente en la página*/

const nombre = prompt("Cual es tu nombre?")
document.querySelector(".contenido").innerHTML = `${ nombre } está aprendiendo JavaScript`; /*Selecciona una parte del html. y la modifica*/

const hola = "Hola desde consola";
console.log(hola); /*Guardo un valor en una constante y la muestro por consola*/
console.log([1, 2, 3, 4]); /*Array*/

let obj = { nombre: "Fran", profesion: "Profesor" } /*Creación de objetos*/
console.log(obj);

console.table([1, 2, 3, 4]); /*mostrar como tabla*/

console.error("Algo a salido mal");

console.clear(); /*Limpiar la consola*/

console.warn(); /*Warning*/

console.time("Hola"); console.warn("Eso no se puede hacer"); console.warn("Eso no se puede hacer"); console.warn("Eso no se puede hacer");
console.timeEnd("Hola") /*Te dice el tiempo que pasa desde que se ejecuta el primer hola, hasta el segundo en consola */

console.log("Hola");
console.log("Mundo");

function hola() {
    console.log("ok")  /*Creacion de una funcion y su llamada */
}

hola();
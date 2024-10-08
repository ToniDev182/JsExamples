// repeat te va a permitir repetir una cadena de texto
'use strict'
const producto = 'Monitor 24 pulgadas';
const texto = 'en promocion'.repeat(3);

console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero

console.log(`${producto} ${texto}!!!`);
console.log(producto + texto + '!!!');

console.log(texto);

//split
const actividad = 'Estoy aprendiendo JavaScript';
console.log(actividad.split(" "));

const hobbies = 'leer, cambiar, escuchar musica, escribir, aperender a programar';
console.log(hobbies.split(", "));





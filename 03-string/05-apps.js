// replace
'use strict'
const producto = 'Monitor 20 Pulgadas';

console.log(producto.replace("20","24"));
console.log(producto.replace('pulgadas','"'));

// slice te va a permitir extraer una parte de una cadena
console.log(producto.slice(0,10)); // iniciar en 0 y cortar hasta 10
console.log(producto(8)); // desde el 8 hasta el fin
console.log(producto.slice(2,10)); //cortar desde el 2 hasta el 10

console.log(producto.slice(2,1)); // si el primer numero es mayor, no va cortar hacia atras

//Existe uno similiar a slice que se llama substring
console.log(producto.substring(0, 10));

console.log(producto.substring(2,1)); // si el numero es mayor al segundo, va a cortar hacia atras (voltea los numeros)

// si has visto algunos sitios web muestran tu primer letra de tu nombre;ç

const nombre = 'juan';
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));





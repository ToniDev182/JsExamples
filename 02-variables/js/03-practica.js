'use strict';

const producto = 'Monitor 30 pulgadas';

console.log(producto);

/*const producto = 'Monitor 23 pulgadas';*/

//te da error por que es una constante y no le puedes cambiar el valor


//Veamo el 3er tipo de forma de crear variables, const
//Existen pocas difeencia entre let y const, asi que vamos a varias;

//Primero una variable con const su valor no puede ser re-asignada;


//Por otro lado, las variables con const, deben iniciarse con un valor;
const precio = 0;
precio = 20;
console.log(precio);

console.log(typeof(precio));

//Existen otras diferencias entre const y Ley especialmente cuando se trabajan con arreglos y objetos,
// que te mostraré más adelante, pero recuerda, las variables con const, no se pueden re-asignar y tampoco puede iniciar sin un valor.
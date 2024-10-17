'use strict';

//Las variable son una caracteristica de cualquier lenguaje

//existen 3 formas de crear variables en JavaScript

//Variables con var

var producto = 'Monitor 23 Pulgadas'; //Inicializamos una variable con un valor;

//Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

console.log(producto);

//Javascript en un Lenguaje de tipo Dinamico,
//No se especifican tipos de datos cuando
// se crea la variable
var precio = 200;
console.log(precio);

//También se puede unicializar una variable sin valor y asignarlo después

var disponible;
disponible = true;

//Inicializar multiples variables
var categoria = 'Computadoras',
marca = 'Marca Famosas';
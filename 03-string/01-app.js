
// las otras 2 formas crean lo que se conoce como una cadena primitiva

const producto = ' Monitor 20 Pulgadas';
const producto2 = String("Monitor 24 Pulgadas");

// la sisguiente forma es menos comun 

const producto3 = new String("Monitor 30 Pulgadas");

// veasmos algunas reglas para crear los strings:

const producto = "Monitor 20 Pulgadas"; // utiliza comillas sencillas
const producto2 = 'Monitor 20 Pulgadas'; // utiliza comillas dobles

// pero nunca las mezcles

const producto3 = "Monitor 20 Pulgadas';

//Ejemplo con Pulgadas
const producto4 = "Monitor 20\"";

console.log(producto);
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
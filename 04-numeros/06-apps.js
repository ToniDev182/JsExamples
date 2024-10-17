'use strict'
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20;

console.log(numero1);

// convertir de strings a numeros flotantes o enteros.
console.log(Number.parseInt(numero1)); // convertir de string a numero
console.log(Number.parseFloat(numero1)); // convertir a numero con decimales
console.log(Number.parseInt(numero3));

// revisar si un numero es entero

console.log(Number.isInteger(numero4)); // Revisar si un numero es entero o no
console.log(Number.isInteger(numero3)); // 

// convertir de nuemero a string
console.log((numero4).toString());

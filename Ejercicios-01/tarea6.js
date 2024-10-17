'use strict'

let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

function mayorDeTres(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        alert("El primer número es el mayor: " + num1);
    } else if (num2 > num1 && num2 > num3) {
        alert("El segundo número es el mayor: " + num2);
    } else {
        alert("El tercer número es el mayor: " + num3);
    }
}

// Llamada a la función
mayorDeTres(num1, num2, num3);

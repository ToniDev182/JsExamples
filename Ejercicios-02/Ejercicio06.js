'use strict';

let num1, num2;

num1 = parseInt(promt("Inserte el primero numero"));


if (isNaN(num1)) {
    console.log("Introduce numeros validos");

} else {

    if (num1 % 2 !== 0) {
        console.log("El numero es impar");
    } else {
        console.log("El numero es par");


    }
}
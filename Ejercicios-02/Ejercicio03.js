'use strict';

let num1, num2;

num1 = parseInt(promt("Inserte el primero numero"));
num2 = parseInt(promt("Inserte el segundo numero"));


if (isNaN(num1) || isNaN(num2)) {
    console.log("Introduce numeros validos");

} else {

    if (num1 < num2) {

        for (let i = num1 + 1; i < num2; i++) {
            console.log(i);
        }

    } else if (num1 > num2) {

        for (let i = num2 + 1; i < num2; i++) {
            console.log(i);

        }
    } else {

        console.log("No hay numeros entre ellos porque son iguales");


    }

}
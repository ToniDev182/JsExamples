'use strict';

let num1, num2;

num1 = parseInt(promt("Inserte el primero numero"));


if (isNaN(num1)) {
    Document.write("Introduce un numero valido");

} else {

    Document.write("Tabla de multiplicar del ${num1}");

    for (let i = 1; i <= 10; i++) {
        Document.write("${num1} x ${i} = ${num1 *1} <br>");

    }

}
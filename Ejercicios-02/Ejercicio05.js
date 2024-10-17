'use strict';

let num1, num2;

num1 = parseInt(promt("Inserte el primero numero"));


if (isNaN(num1) || num1 <= 0) {
    console.log("Introduce un numero valido");

} else {

   let divisores = [];

        for (let i = 1; i <= num1; i++) {
           if(num1 % i === 0)
                divisores.push(i);
        }
        // arrowFunction
        divisores.forEach(divisor=>{console.log(divisor);
        });
    }
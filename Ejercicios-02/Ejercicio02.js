'use strict';

let num2, num1;
let suma = 0;
let contador = 0;

do {

    num1 = parseInt(promt("Inserte el primero numero"));
    if (num1 < 0) break;
    num2 = parseInt(promt("Inserte el segundo numero"));
    if (num2 < 0) break; 

    if (!isNaN(num1) && !isNaN(num2)) {
        suma += num1 + num2;
        contador += 2; // sumamos 2 porque subimos dos numeros el contador 
    }
}

while (num1 >= 0 && num2 >= 0);

if (contador > 0) {
    let media = suma / contador;
    console.log("la suma de los numeros es : {$suma}");
    console.log("la media de los numeros: {$media");
} else {
    console.log("No se han introducido numeros correctos");
}
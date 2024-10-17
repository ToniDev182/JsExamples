'use strict';

let num1, num2;

do {

    num1 = parseInt(prompt("Introduce el primer numero"))

} while (isNaN(num1) || num1 <= 0);

do {
    num2 = parseInt(prompt("Introduce el segundo numero"))

} while (isNaN(num2) || num2 <= 0);

if (num1 > num2) {

 console.log("El numero mayor es: ${num1}");
 

}else if (num2 < num1){

    console.log("El numero mayor es el: ${num2}");
    
} else{

    console.log("Los dos numeros son iguales");
    

}
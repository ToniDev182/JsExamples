'use strict'

let num1 = prompt("Ingrse el primer numero");
let num2 = prompt("Ingrese el segundo numero");

num1 = parseInt (num1);
num2 = parseInt (num2);

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division;
if (num2==0){
alert("no se puede dividir por 0")    
}else {
   division = num1 / num2;
}

alert("suma "+suma);
alert("resta "+resta);
alert("multiplicacion "+multiplicacion);
alert("division "+division);

;




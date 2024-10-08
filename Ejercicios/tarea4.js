'use strict'

let num1 = prompt("Ingrse el primer numero");
let num2 = prompt("Ingrese el segundo numero");

num1 = parseInt (num1);
num2 = parseInt (num2);

function ascendente(num1,num2){
    if(num1 > num2){
        alert("el orden ascendente es "+num2+", "+num1);
    }else{
        alert("el orden ascendente es "+num1+", "+num2);
    }
}

ascendente(num1,num2);
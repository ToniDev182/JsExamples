'use strict'

let num1 = prompt("Ingrse el primer numero");
let num2 = prompt("Ingrese el segundo numero");

num1 = parseInt (num1);
num2 = parseInt (num2);

function mayorque(num1, num2){
    if(num1 > num2){
        alert("El numero uno es el mayor")
    }else{
        alert("El numero dos es mayor")
    }
}

mayorque(num1,num2);
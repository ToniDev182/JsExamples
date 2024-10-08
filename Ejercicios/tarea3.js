let num1 = prompt("Ingrse el primer numero");

num1 = parseInt (num1);

function positiveOrNot(num1){
    if(num1 >= 0){
        alert("El numero uno es positivo")
    }else{
        alert("El numero es negativo")
    }
}

positiveOrNot(num1);
'use strict'; //usado para que no cambien el tipo de dato que son las variables

//usando VAR

var numero = 40;
console.log(numero); //valor 40

if (true) {
    var numero = 50;
}

console.log(numero);

//usando LET

var numero = 40;
console.log(numero); //valor 40

if (true) {
    let numero = 50;    
    //let es local y el log posterior no imprime el valor 50 ya que esta fuera del if
    //let solo le puede cambiar el valor dentro del if
}

console.log(numero);
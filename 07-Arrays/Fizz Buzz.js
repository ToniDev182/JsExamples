'use strict'

let num =parseInt(prompt("Inserte un numero entre 0 y 100"))

for(let i = 0; i <= num; i++){
    if(i %3===0 && i %5===0){
        console.log("FIZ BUZZ");
    }else if( i %5===0){
        console.log("BUZZ");
    }else if( i %3===0){
        console.log("FIZZ");
    }else{

        console.log("no es FIZZ ni BUZZ ni FIZZ BUZZ");
    }
}
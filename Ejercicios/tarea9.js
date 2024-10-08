'use strict'

let calificacion = prompt("Ingrese una calificación entre 0 y 10");

calificacion = parseFloat(calificacion); // Convertimos la entrada a número decimal

function convertirCalificacion(calificacion) {
    if (calificacion >= 0 && calificacion < 3) {
        return "Muy Deficiente";
    } else if (calificacion >= 3 && calificacion < 5) {
        return "Insuficiente";
    } else if (calificacion >= 5 && calificacion < 6) {
        return "Bien";
    } else if (calificacion >= 6 && calificacion < 9) {
        return "Notable";
    } else if (calificacion >= 9 && calificacion <= 10) {
        return "Sobresaliente";
    } else {
        return "Calificación inválida";
    }
}

// Llamada a la función y mostrar el resultado
let resultado = convertirCalificacion(calificacion);
alert("La calificación alfabética es: " + resultado);

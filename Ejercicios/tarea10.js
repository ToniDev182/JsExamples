'use strict'

let horas = parseInt(prompt("Ingrese las horas (0-23):"));
let minutos = parseInt(prompt("Ingrese los minutos (0-59):"));
let segundos = parseInt(prompt("Ingrese los segundos (0-59):"));

function incrementarSegundo(horas, minutos, segundos) {
    segundos++; // Incrementamos los segundos en 1
    
    if (segundos === 60) { // Si los segundos llegan a 60, reseteamos a 0
        segundos = 0;
        minutos++; // Aumentamos los minutos

        if (minutos === 60) { // Si los minutos llegan a 60, reseteamos a 0
            minutos = 0;
            horas++; // Aumentamos las horas

            if (horas === 24) { // Si las horas llegan a 24, reseteamos a 0
                horas = 0;
            }
        }
    }

    return {
        horas: horas,
        minutos: minutos,
        segundos: segundos
    };
}

// Calculamos la nueva hora
let nuevaHora = incrementarSegundo(horas, minutos, segundos);

// Mostramos el resultado
alert("La hora es "+ nuevaHora.horas+" h "+nuevaHora.minutos+" m "+nuevaHora.segundos+" s ");

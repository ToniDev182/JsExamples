'use strict'

let rol = prompt("Ingrese su rol (admin, editor, usuario, visitante)");

function accionesPorRol(rol) {
    switch (rol.toLowerCase()) {
        case 'admin':
            alert("El rol 'admin' puede: Crear, editar, eliminar contenidos y gestionar usuarios.");
            break;
        case 'editor':
            alert("El rol 'editor' puede: Crear y editar contenidos.");
            break;
        case 'usuario':
            alert("El rol 'usuario' puede: Ver y comentar contenidos.");
            break;
        case 'visitante':
            alert("El rol 'visitante' puede: Ver contenidos.");
            break;
        default:
            alert("Rol no reconocido.");
            break;
    }
}

// Llamada a la función
accionesPorRol(rol);

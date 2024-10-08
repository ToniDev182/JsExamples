'use strict'

let metodoPago = prompt("Ingrese su método de pago (efectivo, cheque, tarjeta, noPagado)");

switch (metodoPago.toLowerCase()) {
    case 'efectivo':
        alert("Has pagado en efectivo.");
        break;
    case 'cheque':
        alert("Has pagado con cheque.");
        break;
    case 'tarjeta':
        alert("Has pagado con tarjeta.");
        break;
    case 'nopagado':
        alert("No has pagado aún.");
        break;
    default:
        alert("Método de pago no reconocido.");
        break;
}

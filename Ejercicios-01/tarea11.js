'use strict'

// Función para calcular el salario neto
function calcularSalarioNeto(nombre, horasTrabajadas, tarifaNormal) {
    // Calcular el salario bruto
    let salarioBruto;
    
    if (horasTrabajadas <= 35) {
        salarioBruto = horasTrabajadas * tarifaNormal; // Salario normal
    } else {
        let horasExtra = horasTrabajadas - 35;
        salarioBruto = (35 * tarifaNormal) + (horasExtra * tarifaNormal * 1.5); // Salario normal + horas extra
    }

    // Calcular los impuestos
    let impuestos = 0;

    if (salarioBruto > 500) {
        // Los primeros 500 son libres de impuestos
        if (salarioBruto <= 900) { // (500 + 400)
            impuestos += (salarioBruto - 500) * 0.25; // 25% sobre lo que pase de 500
        } else {
            impuestos += 400 * 0.25; // 25% sobre los siguientes 400
            impuestos += (salarioBruto - 900) * 0.45; // 45% sobre el resto
        }
    }

    // Calcular el salario neto
    let salarioNeto = salarioBruto - impuestos;

    // Mostrar resultados
    alert("Nombre: "+nombre);
    alert("Salario bruto es: "+salarioBruto);
    alert("Impuestos: ")+ impuestos;
    alert("Salario neto: "+ salarioNeto);
}

// Ejemplo de uso
let nombre = prompt("Ingrese el nombre del trabajador:");
let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));
let tarifaNormal = parseFloat(prompt("Ingrese la tarifa normal por hora:"));

calcularSalarioNeto(nombre, horasTrabajadas, tarifaNormal);

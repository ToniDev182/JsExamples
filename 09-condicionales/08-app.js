// Buenas practicas con ifs...

// Veamos algunas buenas practicas, sencillas para escribirs ifs

// una muy común es que muchas personas hacen lo siguiente...

const autenticado = true;

if(autenticado === true) {
    console.log('El Usuario esta autenticado')
}


// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..

// También muchas personas escriben ifs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el if solo va aejecutar la primera que se cumpla...

const dinero = 500;

if(dinero > 300) {
    console.log('Buen dinero... felicidades');
} else if(dinero > 400) {
    console.log('Excelente esfuerzo')
} else {
    console.log('No sabria decirte, pero buen esfuerzo...')
}

// puedes ver que ambas condiciones se cumplen, la de 300 y 400, muchas personas creen que se van a ejecutar ambas porque ambas se cumplen pero el if va a ejecutar la que más pronto cumpla su condición, también recuerda que el orden puede ser importante, lo más seguro es que quieras cambiar el orden del 300 y 400
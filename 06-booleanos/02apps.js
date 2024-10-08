 const boolean1 = true;
 const boolean2 = true;
 
 console.log(boolean1 === boolean2); // comparar 2 variables

 console.log(boolean2 === true); //comparar si un boolean es verdadero
 console.log(boolean2 === true); //comparar si un boolean es verdadero

 // aun no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben codigo javascript en un if

 if(boolean1 === true){  // pero este codigo se puede simplificar quitando el === true porque ya sabemos que la variable es true
    // este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una pagina, asi como si ya tienes una cuenta en netflix y has pagado.
    console.log("si es true");
    
 }else {
    console.log("no, no es true");
    
 }
 
 // otra forma de hacer el if de arriba

 console.log(boolean1 ? 'si es true ' : ' no, no es true');
 
 
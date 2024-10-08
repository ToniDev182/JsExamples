//Veamos como concatenar o unir 2 texto o variables
const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.concat(' En descuento')); // Concatenar un string
console.log(producto.concat(precio)); //Concatenar una variable

//Otras forma de concatenar
console.log(producto + precio);
console.log(producto + " con un precio de "+ precio);
console.log("El Producto " + producto + " tiene un precio de " + precio); //Esta forma se puede complicar
console.log("El Producto " , producto , " tiene un precio de " , precio); //Otra forma de concatenar

//ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal

console.log('El Producto $(Producto) tiene un precio de $(precio)');
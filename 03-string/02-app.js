// veamos algunos metodos existentes en los strings o cadenas de Texto

const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD';

console.log(producto.lengh); // conocer la extension de una cadena de texto

console.log(precio.length);

// indexOf

console.log(producto.indexOf('Pulgadas')) // nos dirá la posicion que tiene el texto en caso de encontrarlo

console.log(producto.indexOf("Tablet"));  // -1 significa que no lo pudo encontrar

// includes

console.log(producto.includes("Monitor"));  // conocer si un texto existe, devolverá True o False, 
console.log(producto.includes("monitor"));  // en este caso solo devolverá True en la que empieza por mayuscula ya que es como está definida la constante. 
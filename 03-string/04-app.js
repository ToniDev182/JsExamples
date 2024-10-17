// 3 metodos para strings

'use strict'
const producto =  '                Monitor 20 Pulgadas          ';
console.log(producto);
console.log(producto.length);

// eliminar al inicio
console.log(producto.trimStart());
console.log(producto.trimEnd());

// los metodos en javascript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd());

// un metodo (que ya tiene rato) es trim que hace lo mismo
console.log(producto.trim().length);




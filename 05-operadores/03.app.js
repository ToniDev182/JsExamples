
// veamos un ejemplo de undefined
let numero;

console.log(numero); // la variable esta definida pero su valor no, por lo tanto es undefined...

console.log(typeof numero);

// En caso de null es mas bien asignarlo
let numero2 = null;
console.log(numero2);
console.log(typeof numero2);// ahora esto nos dira que es un objeto, la especificacion de ecma que es quien define el standard del lenguaje diece que null debe ser un objeto

//comparando nul y undefined - comparar un valor null y un undefined puede ser de las cosas mas complicadas 
console.log(numero == numero2);

// puedes ver que el resultado es true, a pesar de que numero no tiene un valor, eso usualmente nos lleva a ejecucion de codigo no deseada o con comportamientos extraños ya que comparamos un valor que no existe, y nos retorna true
// para ello llega a ser muy util el comparador estricto
console.log(numero == numero2);
// de esta manera comparamos un falso positivo y evitamos errores




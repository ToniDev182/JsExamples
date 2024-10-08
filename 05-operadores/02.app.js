
const num1 = 20;
const num2 = "20";
const num3 = 30;

// revisar si 2 valores son inguales

console.log(num1 == num3);
console.log(num1 == num2);

// typeof
console.log(typeof num1); // tipo de variable que es int
console.log(typeof num2);// string

// operador estricto (revisa valor y tipo de dato)
console.log((num1 === num2));

//diferente a

console.log(num1 != num3); // numero 1 es igual tipo de dato a numero 3 // true
console.log(num1 != num2); // numero 1 es diferente tipo de dato // false
console.log(num1 !== num3); //  compara tanto el valor como el tipo. En este caso: 20 !== 30 será true, porque los valores son diferentes




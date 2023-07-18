/*
Operadores para realizar operaciones:
*/

// Asignación:
let x = 5;
let y = 22;

// Aritméticos: suma, resta, multiplicación, división, modulo:
console.log(x + y);

// Asignamos a una variable una operación:
let suma = x + y;
console.log(suma);

let resta = x - y;
console.log(resta);

let producto = x * 2 + 2 * y;
console.log(producto);

let division = x / y;
console.log(division);

// Para cálculo de pares o impares:
let modulo = 4 % 2;
console.log(modulo);

// En JavaScript podemos sumar cadenas: Concatenar cadenas: OJO solo la suma, la resta y resto da NaN.
console.log("Hola soy " + "un dev de JavaScript");
console.log(22 + " Dolares");

console.log(typeof NaN); // number

// Asignación de adición: dos formas de escribir:
x = x + 15;
console.log(x);

x += 5;
console.log(x);

x++; // -> x = x + 1;
console.log(x);

y--;
console.log(y);

// Operadores de comparación: Tenemos el igual simple (==) y estricto (===), resultado sera true o false:
let a = 5;
let b = 8;

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

// La comparación simple (==) compara solo tipos, la comparación estricta (===) compara valor y tipo.
console.log(1 == "1"); //true
console.log(1 === "1"); //false

console.log(true == 1); // true
console.log(true === 1); // false

console.log(null == undefined); //true
console.log(null === undefined); // false

let f = NaN;
console.log(f == NaN); // false
console.log(f === NaN); // false

console.log(0 == "");
console.log(0 === "");

// Metemos en una variable la condición:
let isFalse = 0 == "";
console.log(isFalse);

// Operadores lógicos: || or, && and y ! negacion:
let w = 5;
let z = 10;

console.log(w > 3 && z < 20); // Recordar la tabla de la verdad.

console.log(w > 3 || z < 20);

// Asignamos en una variable:
let operLogico = w > 3 || z < 20;
console.log(operLogico);

// Operador de negación: Bastante comun en Reactjs:
let isGreaterThan3 = w > 3;
console.log(isGreaterThan3);
console.log(!isGreaterThan3);

// Operador coma: ,: Declaración en una misma linea:
let numero = 23,
  numero2 = 32,
  numero3 = 45;

/*
Ejercicio:
Determinar si la multiplicación de estos números es igual al valorFinal?

const numero1 = 20;
const numero2 = 5;
const valorFinal = 120;

Usar operador aritméticos,
Usar operador lógicos,
Mostrar con console.log
*/

const n1 = 20;
const n2 = 5;
const valorFinal = 120;

const product = n1 * n2;
console.log(product === valorFinal); // false

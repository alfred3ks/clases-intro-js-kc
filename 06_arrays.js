/*
Los Arrays en JavaScript:
Los arreglos en JS nos permiten meter muchos datos o variables en una lista que podemos recorrer.
*/

// Para crear un array:
let fruits = ['apple', 'banana', 'kiwi'];
console.log(fruits);
console.log(typeof fruits); // object

// Continuacion dia 2, segunda parte:
// En un array podemos meter diferentes tipos de datos:
let frutas = ['apple', 'banana', 'kiwi', true, 21];
console.log(fruits);

// Lo ideal es siempre tener el mismo tipo en un array.
// Asignamos al array que sea vacio:
// fruits = [];
console.log(fruits);

// Para acceder a los valores del array: Por los indices, comienza en cero:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Para acceder al ultimo valor: Metodo .at() Tambien podemos acceder a los indices con este metodo que es nuevo.
console.log('at:' + fruits.at(-1));
console.log('at:' + fruits.at(0));
console.log('at:' + fruits.at(1));
console.log('at:' + fruits.at(2));

// Para cambiar un elemento del array:
fruits[1] = 'orange';
console.log(fruits);

// Metodos para los arrays:
// Añadir un elemento al final del array: OJO pasamos por comas todos los elementos que queramos:
fruits.push('watermelon');
console.log(fruits);

// Para eliminar elementos, y elimina el ultimo elemento:
fruits.pop();
console.log(fruits);

// Para añadir elementos al inicio: OJO podemos añadir los elementos que queramos pasados por comas:
fruits.unshift('mango');
console.log(fruits);

// Para eliminar el primer elemento:
fruits.shift();
console.log(fruits);

// Para saber si un elemento esta o no incluido en el array, devuelve true o false:
let isInclude = fruits.includes('mango');
console.log(isInclude);
isInclude = fruits.includes('apple');
console.log(isInclude);

// Para saber la longitud del array:
console.log(fruits.length);

/*
Cuidado con push, pop, shift, unshift:
Estos metodos si los metemos en console.log() nos devuelven el numero de elemento que esta incluyendo o el elemento cuando lo esta borrando.
*/
const newArrFruits = fruits.push('watermelon');
console.log(newArrFruits);

// console.log(fruits.unshift('sandia'));
// console.log(fruits.shift('sandia'));
// console.log(fruits);

// Para crear nuevos array, conservando el array anterior:
const newArrayFruits = fruits.concat('banana');
console.log(newArrayFruits);
console.log(fruits);

// Para ver si un elemento esta tal cual lo pasamos, su indice:
const index = fruits.indexOf('watermelon');
console.log(index);

/* Para eliminar elementos a partir de ese indice encontrado, osea con el indexOf buscamos el indice y se lo pasamos al splice.

Segun MDN:

Array.prototype.splice()
El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

Recibe dos parametros, el primero el indice y luego el numeros de elementos a aliminar a partir de ese indice.
Ahora si esta claro.
*/

const newArrSplice = fruits.splice(index, 1);
console.log(newArrSplice);
console.log(fruits);

console.log('Ejercicio ------------------------------------');
/*
Ejercicio:

Paso 1: Crea un array vacío llamado "numeros"

Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding

Paso 3: Imprime el contenido del array "numeros" en la consola

Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números

Paso 5: Agrega el número 10 al inicio del array "numeros"

Paso 6: Imprime el contenido del array "numeros" en la consola

Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding

Paso 8: Elimina la palabra keepcoding a partir del índice anterior

Paso 9: Imprime el contenido del array "numeros" en la consola

Paso 10: Imprime la longitud del array "numeros" en la consola
*/

// Paso 1: Crea un array vacío llamado "numeros"
let numeros = [];

// Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
numeros.push(1, 2, 3, 'keepcoding', 4, 5);

// Paso 3: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
const isKeepcodingIncludes = numeros.includes('keepcoding');

if (isKeepcodingIncludes) {
  console.log('Este array no tiene solo números.');
} else {
  console.log('Este array tiene solo números.');
}

// Paso 5: Agrega el número 10 al inicio del array "numeros"
numeros.unshift(10);

// Paso 6: Imprime el contenido del array "numeros" en la consola:
console.log(numeros);

// Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding

const indexKeep = numeros.indexOf('keepcoding');
console.log(indexKeep);

// Paso 8: Elimina la palabra keepcoding a partir del índice anterior
const newArrNumeros = numeros.splice(indexKeep, 1);
console.log(newArrNumeros);

// Paso 9: Imprime el contenido del array "numeros" en la consola
console.log(numeros);

// Paso 10: Imprime la longitud del array "numeros" en la consola
console.log(numeros.length);

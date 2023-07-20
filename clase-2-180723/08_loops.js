/*
Los bucles en JavaScript.
Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.
*/

// Bucle for: Muy usado para recorrer array:
console.log('INICIO');
for (let i = 0; i < 5; i++) {
  console.log(`Dentro del bucle for i:${i} incremento`);
}
console.log('FIN');

console.log('INICIO');
for (let i = 5; i > 0; i--) {
  console.log(`Dentro del bucle for i:${i} decremento`);
}
console.log('FIN');

// Veamos como añadir/recorrer un array:
let count = [];
for (let i = 0; i <= 5; i++) {
  count.push(i);
  console.log(count);
}

let fruits = ['apple', 'banana', 'kiwi', 'watermelon'];
for (let i = 0; i < fruits.length; i++) {
  // console.log(`Las frutas son: ${fruits[i]}`);
  if (fruits[i].toLowerCase() != 'kiwi') {
    console.log(`Las frutas son: ${fruits[i]}`);
  }
}

// Bucle while:

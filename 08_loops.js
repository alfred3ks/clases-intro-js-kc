/*
Los bucles en JavaScript.
Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.
Veremos los bucles for y while.
*/

// Bucle for: Muy usado para recorrer array:
console.log('----Bucle for----');
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

let fruits = ['apple', 'banana', 'kiwi', 'watermelon', 'orange', 'Kiwi'];
for (let i = 0; i < fruits.length; i++) {
  // console.log(`Las frutas son: ${fruits[i]}`);
  if (fruits[i].toLowerCase() != 'kiwi') {
    console.log(`Las frutas son: ${fruits[i]}`);
  }
}

/*
  -> Si usamos esta condicion en el for: bucle for infinito.
  for (let i = 0; i>=0.length; i++){
    if (fruits[i].toLowerCase() != 'kiwi') {
      console.log(`Las frutas son: ${fruits[i]}`);
    }
  }
*/

// Veamos estas dos palabras que podemos usar en los boucles: break y continue:
console.log('----break y continue----');
// continue:
console.log('continue');
for (let i = 0; i <= 10; i++) {
  // continue: Se salta la iteración y pasa a la siguiente, lo de la condicion no los ejecuta.
  if (i === 2 || i === 8) {
    continue;
  }

  console.log('i', i);
}

// Break
console.log('break');
for (let i = 0; i <= 10; i++) {
  // El break para el bucle en donde le digamos, resto de iteraciones no se dan
  if (i === 2 || i === 8) {
    break;
  }

  console.log('i', i);
}

/*
Ejercicio:
Enunciado: Dada una lista de números, crea una nueva lista que contenga únicamente los números impares de la lista original.

Lista de números: 1, 2, 33, 41, 5, 60, 74, 87, 90, 101

Paso 1: Crea un array llamado numbers que contenga al menos estos números
Paso 2: Crea un array vacío llamado oddNumbers.
Paso 3: Utiliza un bucle for para iterar sobre cada número en la lista numbers.
Paso 4: En cada iteración, verifica si el número actual es impar.
Si es impar, agrégalo al array oddNumbers utilizando el método push().
NOTA: números pares son aquellos que al dividirlos por 2 el residuo/resto es 0
Paso 5: Después del bucle, imprime en la consola el contenido del array oddNumbers.
*/

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number % 2 !== 0) {
    // Vemos tres formas de hacerlo:
    // oddNumbers[oddNumbers.length] = number;
    oddNumbers.push(number);
    // oddNumbers = oddNumbers.concat(number);
  }
}
console.log(oddNumbers);

// Bucle while: OJO a los bucles infinitos sin que nos demos cuenta.
console.log('----Bucle while----');
// Necesitamos un contador:
// Y incrementar ese contador:

let numWhile = [];
let countWhile = 0;
while (countWhile <= 5) {
  numWhile.push(countWhile);
  countWhile++;
}

console.log(numWhile);

// Bucle infinito controlado:  Usando break:
// while (true) {
//   const message = prompt('¿exit Y o N?');
//   if (message.toLowerCase() === 'y') {
//     break;
//   }
// }

/*
Ejercicio:
// Vamos a hacer un piedra, papel tijera.
// Vamos a preguntar al usuario su jugada, la cual tiene que ser piedra papel o tijera, si no es nuinguna de estas mostrar mensaje opcion incorrecta.
// Si el usuario quiere salir que pulse q.
// El rival siempre va a tener piedra.

// Ganaste tu tienes papel y el rival piedra.
// Perdiste tu tienes tijeras y el rival piedra,
// Empate ambos tienen piedra.

*/

while (true) {
  let message = prompt('Ingresa a:piedra, b:papel, c:tijera, q:salir');
  message = message.toLowerCase();
  const rival = 'piedra';

  if (message === 'q') {
    console.log('Adios!!!');
    break;
  }

  if (message === 'a' && rival === 'piedra') {
    console.log('Empate ambos tienen piedra');
  } else if (message === 'b' && rival === 'piedra') {
    console.log('Ganaste tu tienes papel y el rival piedra');
  } else if (message === 'c' && rival === 'piedra') {
    console.log('Perdiste tu tienes tijeras y el rival piedra');
  } else {
    console.log('Valor incorrecto. Introduce un valor valido.');
  }
}

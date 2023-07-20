/*
Vamos a ver array de arrays, osea arrays de varias dimensiones. Son array con otros array dentros
Este tipo de estructuras se ven mucho en la web.
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);

// Accedemos a los valores de cada array:
console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[0][2]);

console.log(matrix[1][0]);
console.log(matrix[1][1]);
console.log(matrix[1][2]);

console.log(matrix[2][0]);
console.log(matrix[2][1]);
console.log(matrix[2][2]);

// ESte tipo de array usa los mismo metodos anteriores:
// matrix.pop();
console.log(matrix);

// Ahora que ya sabemos los bucles vamos a ver como recorrer los array usando bucles. Bucles anidados:
console.log('---bucle for---');
for (let i = 0; i < matrix.length; i++) {
  const row = matrix[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

/*
Ejercicio:
// Crear un array bidimensional con 5 columnas y con 3 filas como las que aparecen abajo

--*--
-***-
*****

Luego de definirlo recorrerlo para que se pinte como en el dibujo
*/

let christmasTree = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*'],
];

for (let i = 0; i < christmasTree.length; i++) {
  // fila que vamos a pintar:
  let row = '';
  for (let j = 0; j < christmasTree[i].length; j++) {
    row += christmasTree[i][j];
  }
  // Pintamos las filas
  console.log(row);
}

// Vemos un metodo muy interesante usando el join(())
const hi = ['h', 'o', 'l', 'a'];
console.log(hi.join(''));

// otra forma
for (let index = 0; index < christmasTree.length; index++) {
  const row = christmasTree[index];
  console.log(row.join(''));
}

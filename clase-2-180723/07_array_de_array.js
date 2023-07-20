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
matrix.pop();
console.log(matrix);

/*
Estructuras de control y bloques:
- Expresiones condicionales if..else.
- Bloques.
- Hoisting.
- Switch.
- Ternario

Con las estructuras de control le podemos decir que nuestro codigo se ejecute en funcion de diversar situaciones.
*/

// if..else: ()-> dentro de los parentesis se mete la condición: Con la instruccion debugger podemos hacerlo con el navegador:

let edad = 30;
console.log("Inicio");
if (edad >= 18) {
  console.log(`Eres mayor de edad y tienes ${edad} años.`);
} else if (14 <= edad) {
  console.log(`Eres adolescente.`);
} else {
  console.log(`No eres mayor de edad porque tienes ${edad} años.`);
}
console.log("Final");

/* Las variables definidas dentro de {} solo viven dentro de las {} y no se puede acceder a ellas desde fuera del bloque {}. Esto solo pasa con let y const. Eso es el ambito de la variable. Las variables lo ideal es declararlas localmente, que no sean globales para evitar cambios extraños en nuestro código. Si declaramos una variable con var este hace hoisting. Y es como si declaran de manera global.

Continuando hablando con los if podemos concatenar else if()
*/

// El condicional ternario: Operador ternario:
let result = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(result);

let result2 = edad === 30;
let message = result2 ? "Tienes mi edad " : "No tienes mi edad";
console.log(message);

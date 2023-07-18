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

// ----------------------------------------------------------------
// Continuación clase dia 2.
// Las condiciones true or false, hay variables que son true o false.
// En javascript las expresiones se pueden evaluar y dar true o false.

console.log("example:");
let value = true;
value = false;
value = "Hello";
value = " ";
value = "";
value = 12;
value = 0;
value = NaN;
value = null;
value = undefined;
value = Infinity;
value = 10 / 0;

if (value) {
  console.log(`Value: ${value}`);
} else {
  console.log(`Else-> , ${value}`);
}

// El control de flujo con switch: Otro alternativa a los if...else

const day = "Monday";

// Vemos como pedir valores por el navegador, con el prompt:
// const day = prompt("Give me a day of the week");

// Versión con if..else:
if (day === "Monday") {
  console.log("It's Monday");
} else if (day === "Tuesday") {
  console.log("It's Tuesday");
} else if (day === "Wednesday") {
  console.log("It's Wednesday");
} else {
  console.log("It is neither Monday, Tuesday nor Wednesday");
}

// Versión con switch:
switch (day) {
  case "Monday":
    console.log("Monday in switch");
    break;
  case "Tuesday":
    console.log("Tuesday in switch");
    break;
  case "Wednesday":
    console.log("Wednesday in switch");
    break;
  default:
    console.log("Its is neither Monday, Tuesday nor Wednesday");
}

/*
Ejercicio: Conversor de temperatura:

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura (Celsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura:"
"Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"

Casos para probar:

0 Cº son 273.15K
10 Cº son 283.15K
-10 Cº son 263.15K
*/

let temperatura = parseFloat(prompt("Ingresa la temperatura:"));
let escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
);

// Version con if...else:
if (escala === "C") {
  let kelvin = temperatura + 273.15;
  console.log(temperatura + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura - 273.15;
  console.log(temperatura + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}

// Versión con switch:
switch (escala) {
  case "C":
    console.log("Temperature = ", temperatura - 273.15);
    break;
  case "K":
    console.log("Temperature = ", temperatura + 273.15);
    break;
  default:
    console.log("Pon un valor correcto de escala");
}

/*
Los tipos en JavaScript: Los primitivos: No pueden mutar.
Number
String
Boolean -> true/false
null
undefined
BigInt

Los tipos en JS pueden cambiar a lo largo de la ejecucion del codigo.
Para saber que tipo tiene la variable usaremos la palabra typeof.

Tambien tenemos la palabra Infinity. Si algo da infinito. Puede que un resultado no arroje el resultado. OJO las palabras reservadas no se pueden usar como variables.
*/

let resultado = 10;
console.log(typeof resultado);
resultado = true;
console.log(typeof resultado);

let precio = 19.99;
console.log(typeof precio);

let cantidad = Infinity;
console.log(typeof cantidad);

// null y undefined
let = variableNula = null;
console.log(typeof variableNula);

let variableUndefined;
console.log(typeof variableUndefined); // Variable declarada sin asignacion.

let portal = "2D";
let direccion = "Calle Mayor, 1D";
console.log(direccion);
direccion = "Calle Mayor, " + portal;
console.log(typeof portal);
console.log(typeof direccion);
console.log(direccion);

// Interpolacion de estring: Template String
direccion = `Calle Mayor, ${portal}`;
console.log(direccion);
console.log(typeof direccion);

// BigInt: Numero muy largo y al final la n.
let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGrande);

/*
Ejercicio:
Ejercicio 2: Crea y muestra el tipo de estas variables:

Años: 35;
Jugador: Jordan;
Dorsal: 23;
Pertenece al salon de la fama: Sí
Equipo actual: ninguno

Y muestra un mensaje como este

"Soy Jordan de 35 años ahora mi equipo es: ninguno"

*/

const age = 35;
const dorsal = 23;
const isSalonFama = true;
const team = "ninguno";

const mensaje = `Soy Jordan tengo ${age} años, ahora mi equipo es ${team}`;
console.log(mensaje);

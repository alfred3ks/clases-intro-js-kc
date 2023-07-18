/*
La estructura básica del lenguaje.
*/

// Comentario de una linea
/*
Comentario multilinea.
*/

// En JavaScrip usaremos camelCase para nombrar variables. Es la mas usada en este lenguaje. Tenemos tambien snake_case y kebab-case. Pero en JS usaremos camelCase.

// JS es case sensitive. Toma en cuenta las mayusculas y las minusculas. No es igual declarar una variable en mayuscula y otra en minuscula, serian dos variables distintas.

// Las variables: Vemos las palabras reservadas var, let const:
var edad; // Variable solo con declaración.
edad = 22; // Variable donde le asignamos un valor.

var nombreTest = "KeepCoding"; // Los puntos y como dependera del equipo de trabajo.
var mensaje = "Hola KeepCoding!!!"; // Podemos usar comillas simples o dobles

// Mostramos por pantalla nuestras variables con var
console.log(edad);
console.log(nombreTest);
console.log(mensaje);

// Definimos varaibles con const, la cual nos permite decir que nuestra variable sea constante. No puede cambiar en el desarrollo del codigo.
const esMayorEdad = 21;
console.log(esMayorEdad);

// Declaramos variable con let, podemos reasignar variables.
let nombreUsuario = "Usuario 1";
console.log(nombreTest);
nombreUsuario = "Usuario 2";

// var hace hoisting y da undefined, esto con let y const no pasa nos daria un error por consola.
console.log(isActive);
var isActive = true;

// Con JS no existe el tipado de las variables, podemos definir una variable con un tipo y luego asiganarle otro tipo y no nos daria error, esto es que JS no es tipado.
let msj = "Hola";
console.log(msj);
msj = 12;
console.log(msj);

// Podemos encontrar en algunos casos ver las constantes en mayusculas toda la variable. Pero no es obligatorio.
const PI = 3.141617;

// Ejercicio - 1:
/*
Define 3 variables: nombre, número favorito, color favorito. Todo con cammelCase
*/

let nombre = "Alfredo";
let numeroFavorito = 7;
let colorFavorito = "Rojo";

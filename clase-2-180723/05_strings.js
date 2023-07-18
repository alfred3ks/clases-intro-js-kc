/*
Los strings metodos y propiedades.
Nos ayuda a validad la información.
Podemos concatenar metodos y propiedades.
*/

let username = "keepcoding_useR";
let word = "keep";
let number = "10";

let textWithSpace = `   Hello ${username}`;

// Métodos y propiedades que podemos usar para los string:
// Longitud del string: Con la nomenclatura del punto.
console.log(username.length); // 15

// Todas las letras en mayusculas:
console.log(username.toUpperCase());

// Todas las letras en minusculas:
console.log(username.toLowerCase());

// Pasa de number a string, conversión de tipo: El prompt recibe string
console.log(parseInt(number));
console.log(parseFloat(number));
console.log(+number);
console.log(Number(number));

// Si una palabra esta contenida en otra o no, retorna true o false:
const includesKeepcoding = word.includes(word);
console.log(includesKeepcoding); // true o false

// Limpiar los espacios vacio de la cadena:
const textCleand = textWithSpace.trim();
console.log(textCleand);

/*
Ejercicio: El de las temperaturas pero con las validaciones:
*/

const temperatura = parseFloat(prompt("Ingresa la temperatura:"));
const escala = prompt(
  "Ingresa la escala a la que quieras cambiar tu temperatura (C o K):"
)
  .trim()
  .toLowerCase();

if (isNaN(temperatura)) {
  console.log("Debes poner un numeros para la temperatura");
} else {
  switch (escala) {
    case "c":
      console.log(`Temperatura = ${temperatura} - 273.15`);
      break;
    case "k":
      console.log(`Temperatura = ${temperatura} + 273.15`);
      break;
    default:
      console.log("Pon un valor correcto de escala");
  }
}

// solución de compañero:
if (isNaN(temperatura)) {
  console.log("Pon un número");
} else if (escala === "C") {
  let kelvin = temperatura + 273.15;
  console.log(temperatura + " °C son " + kelvin + " K");
} else if (escala === "K") {
  let celsius = temperatura - 273.15;
  console.log(temperatura + " K son " + celsius + " °C");
} else {
  console.log("Escala no válida. Por favor, ingresa 'C' o 'K'.");
}

// 📌 DATES: Fechas. Como trabajar con ellas.
const currentDate = new Date();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const time = `${hour}:${minute}:${seconds}`;

console.log(currentDate);
console.log(currentDate.getFullYear());
console.log(time);

// Para fechas se suele usar una libreria llamada moment.js: Ya no se usa por falta de soporte. Pero existen otras que podemos usar.

// 📌 REGEX: Expresiones regulares:
const texto = 'Hola mi telefono es 123-456-7890';
let pattern = /\d{3}-\d{3}-\d{4}/;

// Primera forma: método test()
const result = pattern.test(texto); // retorna true o false
console.log(result);

// Segunda forma: método match()
const result1 = texto.match(pattern);
console.log(result1); // Retorna un [], en la posicion 0: retorna lo que ha encontrado. Las siguintes posiciones los grupos de nuestro patter.
console.log(result1[0]);

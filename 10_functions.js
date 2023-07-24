/*
Las funciones en JavaScript.
Podemos crear funciones como declaración. Como expresión. Tambíen tenemos las arrow function.
*/

// Vemos funciones como declaración:
// Definimos la función:
function sayHi() {
  const saludo = 'Hola!!';
  console.log(`${saludo} developers`);
}

// Invocamos la función:
sayHi();

// Vemos como una función recibe parámetros
function mayorDeEdad(age, legalAge) {
  if (age < 1) {
    console.log('Valor incorrecto.');
  } else {
    if (age >= legalAge) {
      console.log('Eres mayor de edad. ' + age + ' años.');
    } else {
      console.log('Eres menor de edad. ' + age + ' años.');
    }
  }
}

mayorDeEdad(50, 18);
mayorDeEdad(10, 21);
mayorDeEdad(18, 21);
mayorDeEdad(-100, 18);

/*
📌 Instrucción return: Cuando ejecutamos la función su valor de salida sera lo que nos dice la Instrucción return. OJO todo codigo colocado después de la instrucción return no se ejecutara.
*/
function foo() {
  return 2;
}

// Asignamos a una variable una función:
const variable = foo();
console.log(variable);

//📌 Vemos un otro ejemplo: Parametros por defecto y parametros de mas.
function sumar(num1 = 0, num2 = 0, ...params) {
  console.log(params);
  // Retornamos directamente la operación:
  return num1 + num2;
}

console.log(sumar());
console.log(sumar(1, 2));
console.log(sumar(1, 7, 7, 8, 22));

//📌 Refactorizamos la función mayor de edad:
function esMayorDeEdad(age, legalAge) {
  if (age < 1) {
    return null;
  }
  return age >= legalAge;
  // Esto de arriba es lo mismo que aqui abajo pero resumido:
  if (age >= legalAge) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(19, 18));
console.log(esMayorDeEdad(17, 18));
console.log(esMayorDeEdad(-1, 18));

//📌 Otro ejemplo:
function crearSaludo(nombre) {
  return `¡Hola ${nombre}!`;
}

console.log(crearSaludo('Keepcoding'));

// Podemos igualar la función a una variable donde la vamos a almacenar:
const saludaPersona = crearSaludo;
console.log(saludaPersona('Gabriela'));

//📌 Otro ejemplo refactorizando código anterior cálcular los números impares pasados de un array:
function findOddNumbers(numbersArray) {
  const oddNumbers = [];
  for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
const oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers);

//📌📌 Las Funciones como expresión: La función solo se podra usar después de ser creada.
const soyUnaFuncionExpresion = function () {
  console.log('Soy una función como expresion...');
};

soyUnaFuncionExpresion();

//📌📌 Las arrow functions: Funciones como expresion: =>
/*
Este tipos de funciones tiene un tema particular con "this", en las funciones como declaracion this es el objeto global, pero las funciones this es undefined. OJO con esto. No acceden al this.
A la hora de escribir este tipo de funciones es escribirla de manera mas simplificada:
const restar = (num1 = 0, num2 = 0) => {
  return num1 - num2;
};
const restar = (num1 = 0, num2 = 0) => num1 - num2;

El return es implicito.
*/

const restar = (num1 = 0, num2 = 0) => num1 - num2;
console.log(restar(8, 3));

// Otro ejemplo de arrow function:
// const activeAccount = (name) => {
//   // Podemos retornar un objeto:
//   return {
//     name: name,
//     active: true,
//   };
// };

// Versión simplificada: Lo suelen pedir que lo simplifiquemos en el trabajo: los () es como si fueran el return:
const activeAccount = (name) => ({
  name,
  active: true,
});

const user1 = activeAccount('kevin');
const user2 = activeAccount('test1');
console.log(user1);
console.log(user2);

// 📌📌 Otro ejemplo: parametros rest o rest params.
const restParams = (num1, num2, ...params) => {
  console.log(params); // Nos devuelve un array, params es un array
  return num1 * num2;
};

console.log(restParams(12, 23, 34, 'Hola'));

//📌📌 Closures: Bastante usado en programación funcional ¡¡¡IMPORTANTE!!!!
/*
MDN:
Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
OJO tema de practica.... ultimo ejercicio:
*/

const counter = () => {
  let count = 0;

  const increment = () => {
    count++;
  };

  const getCount = () => count;

  const resetCount = () => (count = 0);

  return {
    increment,
    resetCount,
    count: getCount,
  };
};

const contador1 = counter();
console.log(contador1);

console.log(contador1.count());
contador1.resetCount();
contador1.increment();
contador1.increment();
contador1.increment();
console.log(contador1.count());

// Lectura de la practica: Cuatro ejercicios obligatorios, quinto no obligatorio.

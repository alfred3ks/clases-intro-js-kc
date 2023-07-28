/*
Programación funcional:
- funciones puras
- callback,
- map(),
- filter().
*/

// 📌 Programación funcional:
/*
La programacion funcional es un paradigma de la programacion que se centra en el uso de funciones como bloque de construccion fundamentales. El el contexto de JavaScript, la programación funcional implica escirbir código que se basa en funciones puras, evitando el uso de estados mutables y efectos secundarios.
*/

/*
📌📌 Funciones puras: Las funciones puras son aquellas que siempre producen el mismo resultado para los mismos argumentos y no tienen efectos secundarios observables. No modifican variables fuera de su ámbito y no alteran el estado global.
*/

// Ejemplo: Funcion pura:
const sumar = (a, b) => a + b;
console.log(sumar(2, 2));
console.log(sumar(2, 2));

// Ejemplo: Impura:
let num = 0;
const sumarImpure = (num2) => {
  num = num + num2;
  return num;
};

console.log(sumarImpure(2)); // 2
console.log(sumarImpure(2)); // 4

// Ejemplo: Impura
const datos = [];
const addElement = (arr, newElement) => {
  arr.push(newElement);
  return arr;
};

console.log(addElement(datos, 'Elemento'));
console.log(addElement(datos, 'Elemento'));
console.log(datos);

/*
📌📌 Inmutabilidad:
La inmutabilidad implica que los datos no deben ser modificados una vez que se crean. En JavaScript, se alienta el uso de estructuras de datos inmutables, lo que significa que se crean nuevas instancias en lugas de modificar las existentes.
Nos pasa con arreglos [] y objetos {}.
*/
// Arreglos:
const shoppingCar1 = ['food', 'TV', 'PC'];
const shoppingCar2 = shoppingCar1;

shoppingCar2.pop();
console.log(shoppingCar1);
console.log(shoppingCar2);

// Solución: Hacemos una copia con el spread operator: Asi no se modifica el original:
// const shoppingCar3 = [].concat(shoppingCar1);
const shoppingCar3 = [...shoppingCar1];
shoppingCar3.push('nuevo');
console.log(shoppingCar1);
console.log(shoppingCar2);
console.log(shoppingCar3);

// Objetos:
const user1 = {
  education: 'Keepcoding',
  name: 'kevin',
  city: {
    name: 'Madrid',
  },
};

// Solucion: Con spread operator tambien:
// const user2 = Object.assign({}, user1);
// const user2 = structuredClone(user1);
// const user2 = JSON.parse(JSON.stringify(user1))
const user2 = {
  ...user1,
};
user2.name = 'Matt';
user2.city.name = 'London';

console.log(user1);
console.log(user2);

// Arreglar este ejemplo: La funcion impura de arriba:
// Ejemplo: Pura:
const datosFix = [];
const addElementFixed = ([...arr], newElement) => {
  arr.push(newElement);
  return arr;
};

console.log(addElementFixed(datosFix, 'Elemento')); /// ['Elemento']
console.log(addElementFixed(datosFix, 'Elemento')); /// ['Elemento']
console.log(addElementFixed(datosFix, 'Keepcoding')); /// ['Keepcoding']
console.log(addElementFixed(datosFix, 'Keepcoding')); /// ['Keepcoding']
console.log(datosFix);

// 📌📌 Aqui vemos como unir dos objetos: las propiedades repetidas se machachan.
const house1 = {
  address: 'Madrid',
  rooms: 5,
};

const house2 = {
  address: 'Barcelona',
  rooms: 4,
  parking: true,
};

// Creamos un nuevo objecto a partir de los dos anteriores:
const newHouse = {
  // El orden es importante:
  ...house2,
  ...house1,
  // Las nuevas propiedades añadirlas despues:
  country: 'Spain',
};

console.log(house1);
console.log(house2);
console.log(newHouse);

/*
📌📌 Composicion de funciones: La composición de funciones se refiere a la combinación de multiples funciones mas pequeñas para crear funciones mas complejas, Esto se logra mediante la combinación de las salidas de una función con las entradas de otra.
*/

/*
📌📌OJO Muy importante!!!!!! 🎖️🎖️
Hacer operaciones sobre arreglos. Con funciones high order function. Map() y Filter()
*/

// 🎖️ Metodo map() : Recibe una función como callback: map() retorna un arreglo con los resultados. El arreglo que retorna no alteran el arreglo original. OJO un ejercicio de la practica es usar map() y filter().
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersForTwo = numbers.map((number) => number * 2);

console.log(numbersForTwo);
console.log(numbers);

// 🎖️ Método filter: Vamos a filtrar valores: Este método tampoco altera el arreglo original, y retorna los elementos en un arreglo que cumplan una condicion. Pero retornando true o false.
const filterNumbers = numbers.filter((number) => {
  if (number <= 3) return true;
});

console.log(filterNumbers);

// Una cosa particular con estos métodos es que los podemos concatenar y hacer dos operaciones concatenadas, primero un map() y luego un filter() o viceversa.

// Ejercicio:
/*
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 !== 0) {
    // oddNumbers[oddNumbers.length] = number
    oddNumbers.push(number);
    // oddNumbers = oddNumbers.concat(number);
  }
}

console.log(oddNumbers);

Convertir usando filter()
*/

const numbersArr = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
const imparNumber = numbersArr.filter((number) => {
  if (number % 2 !== 0) return true;
});

console.log(imparNumber);

// 🎖️ forEach(): Esto no es recomendado hacer para esto ya usamos map() que retorna un arreglo y este es innecesario.
const dobleArr = [];
numbersArr.forEach((element) => {
  dobleArr.push(element * 2);
});

console.log(dobleArr);

// Ejercicio:
/*
Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros, utiliza filter para filtrar los libros cuyo año de publicación sea posterior a 2000 y luego utiliza map para crear un nuevo array con los títulos de esos libros.

titulo: El gran Gatsby | autor: F. Scott Fitzgerald | año: 1925
titulo: 1984 | autor: George Orwell | año: 1949
titulo: Cien años de soledad | autor: Gabriel García Márquez | año: 1967
titulo: Harry Potter y la piedra filosofal | autor: J.K. Rowling | año: 1997
titulo: El código Da Vinci | autor: Dan Brown | año: 2003
titulo: Crepúsculo | autor: Stephenie Meyer | año: 2005
titulo: Los juegos del hambre | autor: Suzanne Collins | año: 2008
*/

const libros = [
  {
    titulo: 'El gran Gatsy',
    autor: 'F. Scoott Fitzgerald',
    annio: '1925',
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    annio: '1949',
  },
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    annio: '1967',
  },
  {
    titulo: 'Harry Potter y la piedra filosofal',
    autor: 'J.K. Rowling',
    annio: '1997',
  },
  {
    titulo: 'El código Da Vinci',
    autor: 'Dan Brown',
    annio: '2003',
  },
  {
    titulo: 'Crepúsculo',
    autor: 'Stephenie Meyer',
    annio: '2005',
  },
  {
    titulo: 'Los juegos del hambre',
    autor: 'Suzanne Collins',
    annio: '2008',
  },
];

const post2kTitles = libros
  .filter((libro) => libro.annio > 2000)
  .map((libroPost2k) => libroPost2k.titulo);

console.log(post2kTitles);

// Vemos como separar este array de objetos en dos arrays: Segun una entrevista de trabajo:
const arr1 = [],
  arr2 = [];
libros.forEach((libro) => {
  if (libro.annio > 2000) arr1.push(libro);
  else arr2.push(libro);
});

console.log(arr1);
console.log(arr2);

console.log('---Reduce---');
//📌📌 reduce, find, findIndex:
// Métodos de los array.
// reduce, algo mas complejo, que recibe un array y retorna una sola cosa, un string, un numero, etc. Recibe una funcion y luego un accum, con sus items, y la funcion callback un valor incial que ahora es cero:

const myNumbers = [1, 2, 4, 5];
const reduce = myNumbers.reduce((accum, item) => {
  console.log('accum:' + accum);
  console.log('item:' + item);
  const resultado = accum + item;
  return resultado;
}, 0);

console.log(reduce);

// Otro ejemplo:
const transactions = [
  { id: 'trx001', amount: 100, description: 'Purchase 1' },
  { id: 'trx002', amount: 50, description: 'Purchase 2' },
  { id: 'trx003', amount: 200, description: 'Purchase 3' },
];

/*
Usando reduce debemos obtener este resultado:
const resultado = {
  trx001: { id: 'trx001', amount: 100, description: 'Purchase 1' },
  trx002: { id: 'trx002', amount: 50, description: 'Purchase 2' },
  trx003: { id: 'trx003', amount: 200, description: 'Purchase 3' }
}
*/

const resultado = transactions.reduce((accum, item) => {
  accum[item.id] = item;
  return accum;
}, {});

console.log(resultado);

//📌📌 find, findIndex: Para buscar y retorna un {}
const trx001Find = transactions.find((transaction) => {
  return transaction.id === 'trx001';
});

console.log(trx001Find);

// Lo vemos con una funcion:
const getTransaction = (tId) => {
  const trx = transactions.find((transaction) => {
    return transaction.id === tId;
  });
  if (!trx) throw new Error('Not found');
  return trx;
};

const trx001 = getTransaction('trx002');
console.log(trx001);

// findIndex: retorna el index:
const trx001Index = transactions.findIndex((transaction) => {
  return transaction.id === 'trx001';
});

console.log(trx001Index);

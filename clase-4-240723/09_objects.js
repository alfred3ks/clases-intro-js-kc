/*
Los objetos {} en JavaScript.
*/

let car = {};

console.log(typeof car);
console.log(car);

// Asi podemos añadir propiedades: OJO las propiedades no podemos usar el guion - porque nos da error, first-outner, debemos usar camelcase firstOutner.
car.brand = 'Ford';
car.year = 1969;
car.model = 'Mustang';
car.firstOutner = 'keepcoding';

car.country = {};
car.country.code = 'us';
car.country.name = 'USA';

console.log(car);

// Pero lo que haremos es esto:
let carTwo = {
  brand: 'Ford',
  year: 1969,
  model: 'Mustang',
  firstOutner: 'keepcoding',
  country: { code: 'us', name: 'USA' },
  // Asi con el guion lo ponemos entre comillas:
  'data-two': 23,
};

console.log(carTwo);

// Para acceder a las propiedades lo haremos por la nomencaltura del punto:
console.log(carTwo.brand);
console.log(carTwo.year);
console.log(carTwo.model);
console.log(carTwo.country);
console.log(carTwo.country.code);
console.log(carTwo.country.name);

// Otra alternativa para acceder:
console.log(carTwo['brand']);
console.log(carTwo['year']);
console.log(carTwo['country']['code']);

// Pero con esta manera si podemos asignar con guiones
carTwo['first-outner'] = 'Otro';
console.log(carTwo);

// Vemos otro ejemplo:
let user = {
  name: 'Matt',
  age: 25,
  city: 'Madrid',
  hobbies: ['futbol', 'basket', 'tenis'],
};

// Para acceder a los indices del array
console.log(user.hobbies[1]);
console.log(user.hobbies.join(', ')); // Convierte el array en string separado por comas.

// Para eliminar propiedades: Con la instruccion delete:
delete user.age;
console.log(user);

// Otro ejemplo mas aninado:
let students = [
  {
    name: 'Juan',
    age: 20,
    course: [
      {
        name: 'Mates',
        score: 95,
      },
      {
        name: 'History',
        score: 85,
      },
    ],
  },
  {
    name: 'Maria',
    age: 22,
    course: [
      {
        name: 'Mates',
        score: 100,
      },
      {
        name: 'History',
        score: 70,
      },
    ],
  },
];

// Para acceder a las propiedades de este objeto: Propiedades anidadas:
console.log(students[1].course[1].score);

// Iteramos con for y recorremos el arreglo, un for dentro de otro for:
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const courses = student.course;

  for (let j = 0; j < courses.length; j++) {
    let course = courses[j];
    if (course.score > 70) {
      console.log(student.name, '-', course.name);
    }
  }
}

// Como hacer ramdon del piedra papel tijera del ejercicio anterior. Usamos el objeto Math con sus metodos estáticos:
/*
Math.random() -> nos da un numero de 0 a 1
*/
const randomValue = Math.random() * 3; // Valores de 0-3
const options = ['piedra', 'papel', 'tijeras'];
const randomIndex = Math.floor(randomValue); // Redondeamos hacia abajo.
console.log(options[randomIndex]);

// 📌 Comenzamos clase 4.
// Vemos otro ejemplo para vr los métodos de los objetos:
let user2 = {
  name: 'Matt',
  age: 25,
  city: 'Madrid',
  hobbies: ['futbol', 'basket', 'tenis'],
};

/*
Veamos los métodos para objetos: Nos retornan un array uno con las claves(keys) y otro con los valores (values):
*/
const keys = Object.keys(user2);
console.log(keys);
const values = Object.values(user2);
console.log(values);

/*
📌 Ciclos for-in y for-of.
Son ciclos para objetos!!!
OJO al ciclo for-of que es para objetos iterables.
*/
console.log('---for-in for-of---');
console.log('---for-in---');
// Este bucle recorre las claves y es lo que muestra:
let key = 'hobbies';
key = 'city';
key = 'age';
for (let property in user2) {
  if (property === key) {
    // Por corchete accedemos de manera dinamica:
    const keyValue = user2[key];
    console.log(`Tiene ${key} y el valor que tiene ${keyValue}`);
    break;
  } else {
    console.log(`No tiene ${key}`);
  }
}

console.log('---for-of---');
// Bucle igual al for normal:
const arr = [1, 2, 56, 7];
const text = 'Hola';
for (let num of arr) {
  console.log(num);
}

for (let letter of text) {
  console.log(letter);
}

// Vemos el ejemplo del arbolito:
const array = [
  ['-', '-', '*', '-', '-'],
  ['-', '*', '*', '*', '-'],
  ['*', '*', '*', '*', '*'],
];

for (i of array) {
  let line = '';
  for (j of i) {
    line += j;
  }
  console.log(line);
}

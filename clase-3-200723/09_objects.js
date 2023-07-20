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
console.log(user.hobbies.join(', '));

// Para eliminar propiedades: Con la instruccion delete:
delete user.age;
console.log(user);

// Otro ejemplo mas aninado:
let estudiantes = [
  {
    name: 'Juan',
    age: 20,
    curso: [
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
    curso: [
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

// Para acceder a las propiedades de este objeto:
console.log(estudiantes[1].curso[1].score);

for (let i = 0; i < estudiantes.length; i++) {
  const estudiant = estudiantes[i];
  const courses = estudiant.curso;

  for (let j = 0; j < courses.length; j++) {
    let course = courses[j];
    if (course.score > 70) {
      console.log(estudiant.name, course.name);
    }
  }
}

// Como hacer ramdon del piedra papel tijera del ejercicio anterior.
const randomValue = Math.random() * 3;
const options = ['piedra', 'papel', 'tijeras'];
const randomIndex = Math.floor(randomValue);
console.log(options[randomIndex]);

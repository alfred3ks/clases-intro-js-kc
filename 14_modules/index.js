/*
Módulos de ESModules.
Para que funciones nuestro script en HTML debe llevar el atributo type="module"
*/
console.log('Hola');
// 📌 Para vanilla JS debemos colocar la extension, para react lo hace por detras:
import { sumScore, suma } from './utils.js';

// 📌 Importamos usando un alias:
// import { sumScore as scoreSum, suma as sum } from './utils.js';

// Import por default: podria usar cualquier nombre si quisiera:
// import sumScore, suma  from './utils.js';

const students = [
  {
    name: 'Juan',
    age: 20,
    courses: [
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
    courses: [
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

const newList = students.map(({ courses, name, age }) => {
  const courseScore = sumScore(courses);
  return {
    name,
    age,
    courseScore,
  };
});

console.log(newList);

console.log(suma(2, 5));

/*
Destructuring: Es la forma de acceder a datos de un objeto o array de una manera mas directa.
*/

const letters = ['a', 'b', 'c', 'd'];

const user = {
  firstName: 'Matt',
  age: 45,
  isDev: true,
};

// Asi aplicamos destructuring:
// Del array: Podemos llamar las variables como queramos: El orden es importante.
const [letter1, letter2, letter3, letter4] = letters;
console.log(letter1); // a
console.log(letter2); // b
console.log(letter3); // c
console.log(letter4); // d

// Del objeto: Las variables hay que llamarlas igual que las del objeto: El orden da igual. El nombre de la key lo pondriamos cambiar usando un alias: age:ageUser, OJO este alias no modifica el originañ.

// const { firstName, age, isDev } = user;
const { firstName, age: ageUser, isDev } = user;
console.log(firstName); // Matt
// console.log(age); // 45
console.log(ageUser); // 45
console.log(isDev); // true
console.log(user);

// Veamos un ejemplo:
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

// Vamos a usar destructuring:
const post2kTitles = libros
  .filter(({ annio }) => annio < 2000)
  .map(({ titulo }) => titulo);

console.log(post2kTitles);

// Otro ejemplo: de un objeto {}
const calculadora = () => {
  let resultado = 0;
  const sumar = (num) => (resultado += num);
  const restar = (num) => (resultado -= num);
  const multiplicar = (num) => (resultado *= num);
  const dividir = (num) => (resultado /= num);

  // Retornamos un objeto:
  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  };
};

const { sumar, restar, multiplicar, dividir } = calculadora();
console.log(sumar(3));
console.log(restar(2));
console.log(multiplicar(23));
console.log(dividir(7));

// Otro ejemplo:
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

// Destructuramos con un alias porque las variables son iguales: Un destructuring bastante profundo:
const [
  {
    name: user1,
    age: age1,
    course: [{ name: name1, score: score1 }, { name: name2, score: score2 }],
  },

  {
    name: user2,
    age: age2,
    course: [{ name: name3, score: score3 }, { name: name4, score: score4 }],
  },
] = students;

console.log(user1);
console.log(age1);
console.log(name1);
console.log(score1);
console.log(name2);
console.log(score2);

console.log(user2);
console.log(age2);
console.log(name3);
console.log(score3);
console.log(name4);
console.log(score4);

/*
El asincronismo en JavaScript.
Hasta todo lo visto es código sincrono, se ejecuta una linea tras la otra en secuencia.

En JS no todo es asi, hay ciertas operaciones de entrada y salida que se deben ser asincronas. Se quedan en un segundo plano y se ejecutan por medio de un evento determinado. Para simular aqui asincronismo usaremos setTimeUp()
*/

// 📌📌 setTimeout:
// console.log('INICIO');

// setTimeout(() => {
//   console.log('Hola, tras 1 segundos...');
// }, 1000);

// console.log('FIN');

// Otro ejemplo:
// const cargarDatos = () => {
//   setTimeout(() => {
//     return 'Datos cargados...';
//   }, 4000);
// };

// let loading = true;
// const datos = cargarDatos();
// console.log(datos);
// loading = false;
// console.log(loading);

// controlar las esperas del código
// acceder al valor

/*
Existen tres formas:
1. callbacks,
2. Promesas,
3. Async/await
*/

// callbacks:
const cargarDatosCb = (callback) => {
  setTimeout(() => {
    callback('Datos cargados...');
  }, 3000);
};

// Valor de carga: spining
let loading = true;
console.log(loading);

cargarDatosCb((data) => {
  console.log(data);
  loading = false;
  console.log(loading);
});

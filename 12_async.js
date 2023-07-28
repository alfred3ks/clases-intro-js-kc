/*
El asincronismo en JavaScript.
Hasta todo lo visto es código sincrono, se ejecuta una linea tras la otra en secuencia.

En JS no todo es asi, hay ciertas operaciones de entrada y salida que se deben ser asincronas. Se quedan en un segundo plano y se ejecutan por medio de un evento determinado. Para simular aqui asincronismo usaremos setTimeUp()
*/

// 📌📌 setTimeout: Ejemplo:
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
📌📌 Existen tres formas de trabajar con operaciones aisncronas:
1. callbacks,
2. Promesas,
3. Async/await
*/

// callbacks: Ejemplo:
const cargarDatosCb = (callback) => {
  setTimeout(() => {
    callback('Datos cargados...');
  }, 4000);
};

// Valor de carga: spining. esto es codigo sincrono es lo promero que se ejcuta:
let loading = true;
console.log(loading);

// Llamamos la función asincrona pasandole una funcion anonima como callback:
cargarDatosCb((data) => {
  console.log(data);
  loading = false;
  console.log(loading);
});

//📌📌 Vamos a ver otro ejemplo donde veremos como manejar código asincrono: Usando callback.
const dowloadUserData = (callback) => {
  setTimeout(() => {
    console.log('User data downloaded.');
    let user = { name: 'Laura' };
    // Esto de pasar null como primer parametro era una convencion para tratar los errores de la llamada asincrona por si fallaba y se pasaba como primer paramtro:
    callback(null, user);
  }, 2000);
};

const proccessUserData = (callback) => {
  setTimeout(() => {
    console.log('User data processed');
    callback();
  }, 1000);
};

const displayUserDashboard = (callback) => {
  setTimeout(() => {
    console.log('User dashboard displayed');
    callback();
  }, 3000);
};

// Aquí vemos como pasando funciones como callback podemos manejar código asíncrono:
console.log('cargando....');
dowloadUserData((error, user) => {
  if (error) {
    return console.error(error);
  }
  console.log(user);
  proccessUserData(() => {
    displayUserDashboard(() => {
      setTimeout(() => {
        console.log('FIN... Ya se ve el usuario por pantalla.');
      }, 500);
    });
  });
});

// Cuando tenemos muchas mas llamadas asincronas vemos como el código va creciendo hacia la derecha generando lo que se llama callback hell, el infierno de los callbacks.

//📌📌 Ahora vamos a ver como hacemos lo mismo pero con promesas: Promise:
// Las promesas nos permiten envolver el codigo asincrono y así poder controlar su ejecución: Esto se llama promificar nuestro codigo:
const dowloadUserDataPromise = () => {
  // Declaramos una promesa: resolve y reject son funciones que se ejecutaran cuando nuestro codigo asincrono termine:
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Aqui podemos probar los errores, seleccionando uno u otro:
      let user = { name: 'Carolina' };
      // let user = null;
      if (user !== null) {
        // Resolvemos la promesa:
        console.log('User data downloaded.');
        resolve(user);
      } else {
        reject(user);
      }
    }, 7000);
  });
};

const proccessUserDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('User data processed.');
      resolve();
    }, 2000);
  });
};

const displayUserDashboardPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('User dashboard displayed.');
      resolve();
    }, 3000);
  });
};

// Ahora lo que debemos es consumir las promesas: Con el metodo .then()
console.log('cargando con Promise....');
// dowloadUserDataPromise().then((user) => {
//   console.log(user);
//   proccessUserDataPromise().then(() => {
//     displayUserDashboardPromise().then(() => {
//       setTimeout(() => {
//         console.log(
//           'FIN... Ya se ve el usuario por pantalla usando promesas..'
//         );
//       }, 500);
//     });
//   });
// });

// Aqui vemos que tambien lo del callback hell se repite. Parece peor, lo que debemos es encadenar promesas, porque una promesa depende de la otra. Para eso debemos usar la instruccion return: Recordar que las arrow function podriamos omitir la instruccion return, yo lo dejo asi para que se vea:
dowloadUserDataPromise()
  .then((user) => {
    console.log(user);
    return proccessUserDataPromise();
  })
  .then(() => {
    return displayUserDashboardPromise();
  })
  .then(() => {
    setTimeout(() => {
      console.log('FIN... Ya se ve el usuario por pantalla usando promesas..');
    }, 500);
  })
  // Gestiomos los errores con .catch()
  .catch((err) => {
    console.log('Error user: ' + err);
  })
  // Este método se va a ejecutar siempre.
  .finally(() => {
    setTimeout(() => {
      console.log('Petición terminada, cerramos conexión con BD.');
    }, 800);
  });

//📌📌 Async/Await: Sugar sintax, por debajo funciona con promesas:
// Creamos una funcion asincrona: Para manejar los errores lo haremos con el bloque try-catch + finally.
const dataAsync = async () => {
  try {
    console.log('cargando....Async await');

    const user = await dowloadUserDataPromise();
    console.log(user);
    await proccessUserDataPromise();
    await displayUserDashboardPromise();
    setTimeout(() => {
      console.log(
        'FIN... Ya se ve el usuario por pantalla usando Asyn await..'
      );
    }, 500);
  } catch (err) {
    // Con la instrucción throw new Error() podemos ejecutar esta funcion si hay un error, seria para ejecutar excepciones y ahi se pararia la ejecucion del codigo: Funciona igual que un return, resto del código no se ejecuta:
    // throw new Error('Error cargando la página');
    console.log(new Error(err));
  } finally {
    setTimeout(() => {
      console.log('Petición terminada, cerramos conexión con BD. Async await');
    }, 800);
  }
};

// Ejecutamos nuestra función asíncrona:
dataAsync();

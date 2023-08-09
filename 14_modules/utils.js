/*
ESModules.
*/

const sumScore = (courses) => {
  return courses.reduce((acum, { score }) => {
    const result = acum + score;
    return result;
  }, 0);
};

const suma = (a, b) => {
  return a + b;
};

// export default sumScore;
export { sumScore, suma };

/*
Podemos exportar de dos maneras:
📌 Exportando independientemente:
export const sumScore = (courses) => {
  return courses.reduce((acum, { score }) => {
    const result = acum + score;
    return result;
  }, 0);
};

export const suma = (a, b) => {
  return a + b;
};

📌 Exportar por default: Solo podemos exportar uno solo:
const sumScore = (courses) => {
  return courses.reduce((acum, { score }) => {
    const result = acum + score;
    return result;
  }, 0);
};

export default sumScore;

📌 Si tuvieramos mas funciones:
const sumScore = (courses) => {
  return courses.reduce((acum, { score }) => {
    const result = acum + score;
    return result;
  }, 0);
};

const suma = (a, b) => {
  return a + b;
};

export { sumScore, suma };

*/

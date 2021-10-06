// OBJECT.ENTRIES
// es8

const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
};

console.log(data);

// Transforma este objeto en una matriz.
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// OBJECT.VALUES
// es8

// Devuelve los valores de un objeto en un arreglo.
const values = Object.values(data);
console.log(values);
console.log(values.length);

// PADDING
// es8

const string = 'hello';

// Con padStart se añade valores al principio de un string
console.log(string.padStart(7, 'hi'));
// Con padEnd se añade valores al final de un string
console.log(string.padEnd(12, ' -----'));

console.log('food'.padEnd(12, '  -----'));
// Se pueden combinar ambos (padStart y padEnd)
console.log('food'.padStart(12, '<').padEnd(20, '>'));

// TRAILING COMAS
// es8
// Es la última coma que se le coloca a las caracteristicas de un objeto dando a entender que puede seguir una nueva característica pero en caso no haya no habría problema.

// Significa dejar una coma en el último elemento de un objeto, para evitar futuros errores si quieres agregar nuevos elementos al objeto.

const data = {
  name: 'Alexis',
  age: 23, // <- Trailing coma
};

// ASYNC Y AWAIT
// es8

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();

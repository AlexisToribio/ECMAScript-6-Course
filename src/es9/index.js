// OPERADOR DE REPOSO O REST OPERATOR
// es9

// Extrae las propiedades de un objeto que aun no se ha construído.

const obj = {
  name: 'Alexis',
  age: 32,
  country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all);

console.log(all);

// PROPAGATION PROPERTIES
// es9

const obj = {
  name: 'Oscar',
  age: 32,
};

const obj1 = {
  ...obj,
  country: 'MX',
};

console.log(obj1);

// PROMISE FINALLY
// es9

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizo'));

// REGEX
// es9

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(match);
console.log(year, month, day);

// Esto esta soportado para navegadores pero no para node.js Entonces depende del tipo de proyecto.
const regexData2 = /(?<year2>[0-9]{4})-(?<month2>[0-9]{2})-(?<day2>[0-9]{2})/;
const match2 = regexData2.exec('2018-04-20');
const { year2, month2, day2 } = match2.groups;

console.log(match2);
console.log(year2, month2, day2);

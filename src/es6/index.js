// DEFAULT PARAMS

// es5

function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name, age, country);
}

// es6

function newFunction2(name = 'oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'Colombia');

// TEMPLATE LITERAL

// es5

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// MULTILINEA EN STRINGS

// es5

let lorem =
  'Qui consequatur. Commodi. Ipsum vel duis yet minima \n' +
  'otra frase epica que necesitamos';

console.log(lorem);

// es6

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem2);

// DESESTRUCTURACIÓN

// es5

let person = {
  name: 'oscar',
  age: 32,
  country: 'MX',
};

console.log(person.name, person.age);

// es6

let { name, age, country } = person;
console.log(name, age, country);

// SPREAD OPERATOR

// es5
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = [
  'David',
  'Oscar',
  'Julian',
  'Ricardo',
  'Valeria',
  'Yesica',
  'Camila',
];
console.log(education);

// es6

let education2 = ['David', ...team1, ...team2];
console.log(education2);

// PALABRAS RESERVADAS (LET, CONST)

// es5
{
  var globalVar = 'Global Var';
}
console.log(globalVar);

// es6
{
  let globalLet = 'Global Let';
  console.log(globalLet);

  const globalConst = 'Global Const';
  console.log(globalConst);
}

// OBJETOS

let name = 'alexis';
let age = 32;

// es5
obj = { name: name, age: age };

// es6
obj2 = { name, age };

console.log(obj2);

// ARROW FUNCTIONS

const names = [
  { name: 'Oscar', age: 32 },
  { name: 'Yesica', age: 27 },
];

// es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// es6
let listOfNames2 = names.map((item) => {
  console.log(item.name);
});

const listOfNames3 = (name, age, country) => {
  console.log(name, age, country);
};

const listOfName4 = (name) => {
  console.log(name);
};

const square = (num) => num * num;

// PROMESAS

// es6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log('Hola'))
  .catch((error) => console.log(error));

// CLASES

// es6
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();

console.log(calc.sum(2, 2));

// MÓDULOS

// es6
import hello from './module.js';

console.log(hello());

// GENERATORS

// es6
function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }

  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

// fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators
var secuencia = fibonacci();
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5
console.log(secuencia.next().value); // 8
console.log(secuencia.next().value); // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3

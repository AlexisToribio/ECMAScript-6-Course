// DYNAMIC IMPORT
// es11

const button = document.getElementById('btn');

button.addEventListener('click', async function () {
  const module = await import('./file.js'); // Podemos importar dependiendo de la acción que realice el usuario y ya no es necesario preimportar el archivo, esto hace que la página web tengo mejor rendimiendo.
  module.hello();
});

// BIG INT ( permite trabajar con numeros enteros mayores a 2^53 )
// es11

// 2 FORMAS DE ACTIVAR EL BIG INT:

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// PROMISE ALL SETTLED
// es11
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// DIFERENCIAS ENTRE Promise.all([...]) Y Promise.allSettled([...]):

// Promise.all([...]) : Va a ser rechazada en el momento en el que se rechace una de las promesas.

// Promise.allSettled([...]) : No importa el estado de las promesas solo esperara a que todas sean resueltas.

// GLOBAL THIS
// Hace referencia al objeto global, sin importar el contexto en el que se encuentra el código.
// En el browser tenemos “window”, en Node es “global” y “self” para WebWorkers.

console.log(window);
console.log(self);
console.log(frames);
console.log(this);

// es11

console.log(window);
console.log(globalThis);

// NULL OPERATOR O NULLISH COALESCING
// es11

// Nos da la habilidad de comprobar valores “nulos” en
// lugar de “falsey” .

// “Falsey” son ‘undefined’, ‘null’, ‘false’ y ‘NaN’.

// Pero si quieres comprobar si una variable es nula
// (undefined o null), ésta es la mejor opción.

const fooo = null ?? 'default string'; // Si es null o undefined devuelve el valor de la derecha.
console.log(fooo);

const fooo1 = 'not null' ?? 'default string'; // Si no es null o undefined devuelve el valor de la izquierda.
console.log(fooo1);

// OPTIONAL CHAINING
// es11

// Esta sintaxis te permite acceder a propiedades anidadas de objetos sin preocuparte de si la propiedad existe o no. Si no existe la ‘prop’, devuelve “undefined”.
const user = {};

console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log('email');
} else {
  console.log('fail');
}

const x = {
  prop1: {
    prop2: 100,
  },
};

console.log(x.prop1?.prop2);

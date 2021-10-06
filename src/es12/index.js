// REPLACE ALL

// es5
const string =
  'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';

// Reemplaza solo la primera coincidencia.
const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);

// Con expresiones regulares se pueden reemplazar todas las coincidencias.
const replacedString2 = string.replace(/JavaScript/g, 'Python');
console.log(replacedString2);

// es12

// Reemplaza todas las coincidencias.
const replacedString3 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString3);

// MÉTODOS PRIVADOS (#)
// es12
// Con el # convertimos al método en privado

class Message {
  #show(val) {
    console.log(val);
  }

  get #add() {
    return val;
  }
}

const message = new Message();
message.show('Hola!'); // No se podrá ejecutar la función "show" porque es un método privado.

// PROMISE ANY
// es12
// Captura la primera respuesta resuelta de forma satisfactoria.

const promise1 = new Promise((resolve, reject) => reject('1'));

const promise2 = new Promise((resolve, reject) => resolve('2'));

const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// WEAKREF(element)
// es12

class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

// NUEVOS OPERADORES LÓGICOS
// es12

let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));

isTrue = true;
isFalse = false;
console.log((isTrue ||= isFalse));

isTrue = undefined;
isFalse = false;
console.log((isTrue ??= isFalse));

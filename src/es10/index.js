// Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
// es10

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2));

// Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
// es10

let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap((value) => [value, value * 2]));

// String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la función.
// es10

let hello = '            hello world';
console.log(hello);
console.log(hello.trimStart());
let hello2 = 'hello world        ';
console.log(hello2);
console.log(hello2.trimEnd());
let hello3 = '           hello world            ';
console.log(hello3.trim()); // Quita los espacios al inicio y al final.

// try/catch: ahora puedes utilizarlo sin necesidad de especificarlo como catch(error) sino directamente usarlo en el scope del catch.

// es5
try {
} catch (error) {
  console.log(error);
}

// es10
try {
} catch {
  console.log(error); // Se usa directamente en el scope de catch.
}

// Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir una matriz clave/valor a un objeto con Object.fromEntries() y hacer lo contrario con Object.entries().
// es10

let entries = [
  ['name', 'oscar'],
  ['age', 32],
];

console.log(Object.fromEntries(entries));

// Symbol.prototype.description: permite regresar la descripcion opcional del Symbol.

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);

console.log(symbol.description);

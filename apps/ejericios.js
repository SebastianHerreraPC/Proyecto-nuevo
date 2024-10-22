//1

const doble = (x) => {
  console.log(x * x);
};
doble(2);

//2

let frase = "ESTE ES UNA FRASE";

const minusculas = (frase) => {
  console.log(frase.toLowerCase());
};

minusculas(frase);

//3

const parInpar = (numero) => {
  const esPar =
    numero % 2 === 0 ? console.log("Es par") : console.log("Es inpar");
};

parInpar(5);

//4

let nList = [1, 2, 3, 4, 5];
const porTres = nList.forEach((num) => {
  console.log(num * 3);
});

//5

const longitudes = (palabra) => {
  console.log(palabra.length);
};

longitudes("Hola mundo");

//6
let suma = 0;
const listaNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

listaNumero.forEach((elem) => {
  suma += elem;
});

console.log(suma);

//7
let palabrasList = [
  "Hola",
  "Mundo",
  "esta",
  "es",
  "una",
  "lista",
  "de",
  "palabras",
  "algunas",
  "deben",
  "tener",
  "cinco",
];

palabrasList.forEach((word) => {
  if (word.length >= 5) {
    console.log(word);
  }
});

//8

const esAnagrama = (palabra) => {
  const base = palabra.toLowerCase();
  const reverso = base.split("").reverse().join("");

  return base === reverso;
};

console.log(esAnagrama("AmOR"));

//9

const usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Luis", activo: true },
  { nombre: "Marta", activo: false },
  { nombre: "Pedro", activo: true },
];

usuarios.forEach((estado) => {
  if (estado.activo === true) {
    console.log(estado.nombre + " esta activo");
  }
});

//

class estudiante {
  constructor() {
    let name, clases;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

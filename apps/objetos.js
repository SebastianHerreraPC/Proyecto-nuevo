//

console.log(this);

this.nombre = "contexto Global";

console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "contexto Objeto ",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

const obj2 = {
  nombre: "contexto Objeto 2  ",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

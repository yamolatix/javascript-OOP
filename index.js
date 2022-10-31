// La importancia de los objetos en JavaScript

// Datos primitivos
console.log(typeof "hello world"); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean

//
console.log(typeof {}); //object
console.log(typeof []); //object

console.log(typeof Date()); //string
console.log(typeof new Date()); //object
console.log(typeof new RegExp()); //object

console.log(new String("hello world")); //object
console.log(new Number(100)); //object
console.log(new Boolean(true)); //object

// Object Literal
console.log({});

let name = "Ryan";
let lastname = "Ray";
let age = 30;

// Object Literal
const objectLiteral = {
//  key     value
    name: "Ryan", // properties - propiedades
    lastname: "Ray",
    age: 30,
    hobbies: ["read", "programming", "run"],
    address: {
        street: "Abbey Road",
        city: "london"
    }
};

// Métodos - Object Methods
// Las funcionalidades que tiene el punto neurálgico del objeto son acciones. A esas acciones bajo el Paradigma Orientado a Objetos se los conoce como "Métodos" y en código se conoce como funciones, para ejecuar su funcionalidad. 

const metodos = {
//  key     value
    name: "Ryan", // properties - propiedades
    lastname: "Ray",
    age: 30,
    fullName() {
        return "Ryan Ray"
    }
};

console.log(metodos.fullName());

// La importancia de los objetos en JavaScript

// Datos primitivos
console.log(typeof "hello world"); //string
console.log(typeof 100); //number
console.log(typeof true); //boolean

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

const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    hobbies: ["read", "programming", "run"],
    address: {
        street: "Abbey Road",
        city: "london"
    }
}

console.log("USER", user);
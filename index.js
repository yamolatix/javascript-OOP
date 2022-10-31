// La importancia de los objetos en JavaScript

// Datos primitivos
// console.log(typeof "hello world"); //string
// console.log(typeof 100); //number
// console.log(typeof true); //boolean

// console.log(typeof {}); //object
// console.log(typeof []); //object

// console.log(typeof Date()); //string
// console.log(typeof new Date()); //object
// console.log(typeof new RegExp()); //object

// console.log(new String("hello world")); //object
// console.log(new Number(100)); //object
// console.log(new Boolean(true)); //object

// Object Literal
// console.log({});

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
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    fullName() {
        return "Ryan Ray"
    }
};

// console.log(metodos.fullName());

//This

const ejemploThis = {
    name: "Rachel",
    lastname: "Green",
    age: 30,
    fullName() {
        // console.log("this",this);
        return `${this.name} ${this.lastname}`
    }
};

// console.log(ejemploThis.fullName());

// Ejemplo de métodos con parametros y utilizando this
const account = {
    number: "12548569745852364682",
    amount: 100,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity) {
        this.amount = this.amount - quantity
    }
}

account.deposit(50)
account.deposit(150)
account.deposit(150)

// console.log(account);

account.withdraw(15)
account.withdraw(125)

// console.log(account);

// Constructor
function Person() {
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.fullName = function () {
        return `${this.name} ${this.lastname}`
    }
}

// ES2015 class
/* class Person {
    constructor() {
        this.name = "";
        this.lastname = "";
        this.age = 0;
        this.fullName = function () {
            return `${this.name} ${this.lastname}`;
        };
    }
} */

const user = new Person()

user.name = "Monica"
user.lastname = "Geller"
user.age = 30
// console.log(user.fullName());
// console.log(user);

// Object Constructor
const person = new Object() 

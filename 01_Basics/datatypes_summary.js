// primitive Datatype
// There are 7 Primitive Datatypes 1) string, 2) Number, 3) Boolearn, 4)null, 5)undefined, 6)symbol, 7)BigInt

let string1 = "Sainath"; // This is String
let num = 21;   // This is Number
let isLoggedIn = true; // This is Boolean
let value = null; // This is null
let email; // This is Undefined
const symb = Symbol('123'); // This is syymbol
const symb1 = Symbol('123');// This is Symbol
// console.log(symb === symb1);

const BigNumber = 6494149419649619849619849619849196

// Reference Type (Non Primitive Datatypes)
// 1) Array, 2)Objects 3)Functions  
// 1)Array
const Heros = ["Shaktiman","Krish","Hanuman"] 

// 2)Object
const obj = {
    name : "Sainath",
    age : "21"
}

// 3)Function
const myfunction = function () {
    console.log("Hello World");
}
// console.log(typeof(value))




// ********************************Memory*********************************************************

// Two Types of memory are there
// 1) Stack  
// for storing primitive data we use Stack Memory 
// let myname = "Sainath";      //This is String Primitive Datatype
// let myanotherName = myname;
// myanotherName = "sai";
// console.log(myanotherName);
// console.log(myname);
// 2) Heap 
// And for storing non-Primitive data we use Heap Memory
const User1 = {                              // This is Object Non-Primitive Datatype
    name : "sainath",
    age : 21
}
const user2 = User1;
console.log(User1.name);
console.log(user2.name);
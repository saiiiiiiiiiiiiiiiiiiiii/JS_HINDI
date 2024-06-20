// There are two ways of declaring objects 1)literal and 2)singleton
// objectliterals
/**You can also create  an object  through Object.create but through this approach yo can create a singleton Object  */

const mysymb = Symbol("Sai")

const JsUser = {
  name:"Sainath",
  "Full_Name" : "Sainath Vilas More",
  [mysymb]:"Sai",
  age:21,
  location:"Thane",
  email:"Sainath@google.com",
  isLoggedIn:false,
  isLoggedIn:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.Full_Name);
// console.log(JsUser[mysymb])

//  we can also change the value of the keys 
// Object.freeze(JsUser) // This Is the Freez Method through this you can freeze the object means you can make it unchangeable 
JsUser.email = "SainathMore@gmail.com"
// console.log(JsUser)

JsUser.greetings = function(){
  console.log(`Hello Js User's`);
  
}
JsUser.greetings2 = function(){
  console.log(`Hello Js User's ${this.Full_Name}`);
  }
console.log(JsUser.greetings());
console.log(JsUser.greetings2());


// Singleton Object 
// const tinderUser = new Object(); // This is a Singleton Object ;
const tinderUser = {}// This is a nonSingleton Object Means its a literal object;
tinderUser.id = "2723abc";
tinderUser.Name = "Sam";
tinderUser.isLogedIn = false;

// console.log(tinderUser);

const regularUser = {
  email:"Sam@gmail.com",
  fullName:{
    userFullName:{
      firstName:"Sam",
      lastName:"More"
    }
  }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1:"a",
  2:"b",
  3:"c"
}
const obj2 = {
  4:"d",
  5:"e",
  6:"f"
}

// const obj3 = {...obj1,...obj2}; //Through this you can combine  two objects but This is spreadOperator  approach we usually use this in array
// const obj3 = Object.assign({},obj1,obj2)//This is an object method approach through Object.assign() Method you can get the combination of the key value pairs of the two different object as a one object 
// console.log(obj3);
const users =[
  {
    id:1,
    name:"Sai"
  },
  {
    id:1,
    name:"Sai"
  },
  {
    id:1,
    name:"Sai"
  }
]
// console.log(users[0].id);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('uq2vdui'));



// Through multiple ways you can create an object 
// 1) Using Object literal Way to declare the Object 
const person1 = {
  name : "Sai",
  age : 21,
  isEmployed: false,
  greet : function(){
    console.log(`Hello sai`);
    }
}

// 2) Using The Object Constructer();
let person2 = new Object();
person1.name = "Sainath";
person1.age = 21;
person1.isEmployed = true;
person1.greet = function(){console.log(`Hello Sainath`);
}
// console.log(person1);

// 3)Using the Object.create() Method
// Let’s create an object animal and use it as a prototype for another object dog.
const animal = {
  eats :true,
  walk : function(){console.log(`Animal Walk`);
  }
}
const dog = Object.create(animal);
dog.eats = true;
dog.bark = function(){console.log(`woof`);
}
// console.log(dog,animal);
// console.log(dog.walk());
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    writable: true,
    value: 42,
  },
  property2: {},
});

// console.log(object1.property1);

// ***********************************Object Methods ************************************
// 1) Object.assign()
// const terget = {a:1 , b:2}
// const source = {c:3 , d:4}
// console.log(Object.assign(terget , source));

// 2) Object.create()
// const Human = {
//   isHuman : false,
//   printProduction : function(){console.log(`My Name is ${person.name} am i Human  ${this.isHuman}`);
//   }
// }
// const person = Object.create(Human)
// person.name = "Sainath";
// person.age = 21;
// // console.log(person)
// console.log(person.printProduction());

// 3)Object.entries()
// const object2 = {
//   a: 'somestring',
//   b: 42,
// };
// for (const [key, values] of Object.entries(object2)) {
//   console.log(`${key} : ${values}`);
  
// }
// 4) Object.freeze()
// const obj = {
//   prop: 42,
// };

// Object.freeze(obj);

// obj.prop = 33;
// // Throws an error in strict mode

// console.log(obj.prop);
// // Expected output: 42


// 5)Object.keys()
// const object3 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.keys(object3));
// Expected output: Array ["a", "b", "c"]

// 6)Object.values()
// const object4 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log(Object.values(object4));
// Expected output: Array ["somestring", 42, false]



const company = {
  greettings : function(){
    // console.log(`Hello ${employee1.name} Welcome to the company`);
    
  }
}
const employee1 = Object.create(company);
employee1.name = "Saii";
employee1.age = 21

// console.log(employee1.greettings());

const employee12 = {
  name :"Sainath",
  id : 2723
}
// employee.__proto__ = company;
// console.log(employee.greettings());

// class BioData {
//   constructor(name , id){
//     console.log(`I am Constructer`);
//     this.name = name;
//     this.id = id;
    
//   }
//   greettings () {
//     console.log(`Welcome to More International`)
//   }
//   work(){
//     console.log(`I am working in More International`)
//   }

// }
// const employee = new BioData("sainath",2723);
// const employee2 = new BioData("Shraddha",2528);
// console.log(employee);
// console.log(employee2);


// class parent {
//   hello(){
//     console.log(`Hello`);
    
//   }
// }
// class child extends parent{}
// const obj = new child();
// console.log(obj.hello())


//  we will talk about inheritence
class Human {
  eat(){
    console.log("Yes Human Can Eat");
  }
  sleep(){
    console.log(`Yes Human Can Sleep`)
  }
  work(){
    console.log(`Human Doesn't work he is illitrate`)
  }
}
class Programmer extends Human {
  coder(){
    console.log("He writes a code to Build application")
  }
  work(){
    console.log("Coder does work He works in the It Company")
  }
}

const person = new Programmer();
// console.log(person.code());
// console.log(person.eat());
console.log(person.work());



// Destructring of Objects;
const course = {
  courseName : "Javascript",
  price : 999,
  courseInstructor : "Hitesh"
}
const {courseInstructor: Instructer} = course // THis is destructring in javascript
// console.log(Instructer);





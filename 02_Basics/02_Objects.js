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




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




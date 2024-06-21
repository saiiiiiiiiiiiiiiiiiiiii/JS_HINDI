const user = {
  username : "Sainath",
  price : 999,

  welcome : function(){
    console.log(`${this.username} Welcome to Website`);
    console.log(this)
    /**When we use 'this' keyword whenever you have to refer the curretnt  context 
     * means  inside the curly brace  means referring  and accessing 
     * the defined variables inside the curly braces only then we use this */
  }
}
// user.welcome();
// user.username = "Sai";
// user.welcome();

// console.log(this);
// function chai (){
//   const username = "Sai";
//   console.log(this.username); // You will get Undefined 
//   /**Because you can asscess 'this' keyword only inside of Object not
//    * in the standalone function
//     */

// }
// chai();

// const  chai = () => {
  // const username = "Sainath"               // Sample Arrow Function
//   console.log(this.username);
  
// }
// chai();


// const addTwoNum = (num1 , num2) => {
//   return num1 + num2;                               // Sample Arrow Function
// }



// const addTwoNum = (num1 , num2) =>  num1 + num2    // implicit return you don't need to write return in the function
const addTwoNum = (num1 , num2) => ( num1 + num2 )   //  you can also define like this implicit return you don't need to write return in the function
// You can also define object like this 
const objfunction = () => ({name : "Sainath"})
console.log(objfunction());

console.log(addTwoNum(5,5));


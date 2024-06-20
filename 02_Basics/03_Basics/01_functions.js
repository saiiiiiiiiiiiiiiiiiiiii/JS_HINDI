
function Saymyname(params) {
  console.log(`S`);
  console.log(`a`);
  console.log(`i`);
  console.log(`n`);
  console.log(`a`);
  console.log(`t`);
  console.log(`h`);
}
// Saymyname()
// function Addition(number1, number2){
//   console.log(number1 + number2);
// }
function Addition(number1, number2){
  // let result = number1 + number2;
  // return result;

  return number1 + number2;
}
let result = Addition(5,7);
// console.log(`Result : ${result}`);

function LoginUser(username){
  // if(username === undefined){ // You can write like this and 
  //   console.log("Please enter your username")
  //   return
  // }
  // if(!username){
  //   console.log(`Please enter your username`);
  //   return
  // }
  return `${username} just logged in`
}

const user = LoginUser()
// console.log(user);

// Rest Operator 
function CalculateCartPrice(...num){
  return num
}
// console.log(CalculateCartPrice(100,200,300,400,500))

// using Objects in Function
const userr = {
  username:"Sainath",
  price : 199
}
function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(userr);
handleObject({
  username:"Sai",
  price : 299
})
//  Using arrays in function
const array = [100, 200, 300, 400];
function ReturnSecondValue(anyArray){
  return anyArray[1];
}
// console.log(ReturnSecondValue(array));
console.log(ReturnSecondValue([100, 200, 300, 400]));


  
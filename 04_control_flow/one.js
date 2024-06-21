//  1) control flow is 'if' Statement
//  in If Statement the given condition is True then and then only the code will get executed
// if(){}
// const temperature = 41;
// if (temperature <= 50){
//   console.log("it's hot outside");
// }else{
//   console.log("it's not hot outside");
// }

// const score = 200;

// if(score > 200){
//   const name = "Virat";
//   console.log(`${name} is Playing`)
// }else{
//   const name = "Virat"
//   console.log(`${name} is not playing`)
// }

// if(balance < 100) console.log(`You're Poor Buudy Find a job`);

// const balance = 800;
// if (balance < 500) {
//   console.log(`less then`);
//   }else if (balance <750){
//     console.log(`less than 750`);
//     }else if (balance < 900){
//       console.log(`less then 900`);
      
//     }else{
//       console.log(`You're not poor`);
      
//     }

// const userLoggedIn = true;
// const debitcard = true;
// if(userLoggedIn && debitcard && true){ // when we use logical operator and && then both of the conditions must be true 
//   console.log(`Allow to Buy Course`);
  
// }

const LoggedInfromGoogle = false;
const LoggedInfromEmail = true;
if(LoggedInfromEmail || LoggedInfromGoogle){ // When we use Logical operator or || then one of the two conditions must bu true then only statement will get executed
  console.log(`You're logged in`);
}

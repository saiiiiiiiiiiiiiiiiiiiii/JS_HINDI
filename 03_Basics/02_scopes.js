// . Global Scope
var globalVariable = 10;

{
  console.log(globalVariable);
}
// console.log(globalVariable);



//  Block Scope
if (true) {
  let blockScopedVar = "I'm block scoped!";
  const anotherBlockScopedVar = "Me too!";
  console.log(blockScopedVar); // Accessible
  console.log(anotherBlockScopedVar); // Accessible
}

console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined
console.log(anotherBlockScopedVar); // ReferenceError: anotherBlockScopedVar is not defined


//  Means You can globally  access the var from any of the any part of the programm
//  But let and const are block scoped means you can only access them within the block they are declared in 


// Nested Scope {}
function one(){
  const username = "Sainath";

  function two(){
    const website = "youtube";
    // console.log(username);
    
  }
  // console.log(website);
  two()
  
}
one()


if(true){
  let username = "Sainath";
  if(username === "Sainath"){
      let website = " youtube"
      // console.log(username + website);
      
      // console.log(`This is Website${website}`);
    }
  
    // console.log(`This is Username ${username}`);
}

// ****************************************************************************************************************
console.log(addone(1));
function addone(num){
  return num +1;
}

console.log(addtwo(1));
const func = function addtwo(num){ // when ever you declare a function with the help of variable or identifier you cannot call that function before declratartion because its an exxpression
  return num + 2;
}


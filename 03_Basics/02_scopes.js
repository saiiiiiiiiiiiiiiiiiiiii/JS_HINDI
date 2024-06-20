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


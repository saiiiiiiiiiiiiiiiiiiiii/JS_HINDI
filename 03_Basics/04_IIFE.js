// Immediately Invoked Function Expressions(IIFE)
// It is a function that runs as soon as it is defined.
// It is a self-invoking anonymous function.
 (function chai() {
  // This is named IIFE
  console.log("Hello World!")
 })();

 ((name)=>{
  // This is without named IIFE
  console.log(`I am an Arrow Function ${ name}`);
  
 })('Sainath')


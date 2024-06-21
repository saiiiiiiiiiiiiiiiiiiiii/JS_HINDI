const userEmail = "Sai@gmail.com";
if (userEmail) {
  console.log(`Got User Email`);
  
}else{
  console.log(`Don't have useEmail`);
  
}
/**There are some falsey values which will always give you a false value 
 * for example 
 * 1) false,
 * 2)0 ,
 * 3)BigInt,
 * 4)0n,
 * 5)"",
 * 6)null,
 * 7)undefined,
 * 8)Nan,
 */
/**There are some Truthy Values as well 
 * for example
 * 1)"0", if you write a zero in string it will a truth value same goes for 
 * 2) "false",
 * 3) " " This is also a truthy value if you give a singlespace inside a string then it will become a truthy value
 * 4) [] 
 * 5) {}
 * 6)function(){},
 */

// const emptyarr = [];
// if(emptyarr.length === 0){
//   console.log(`I am an Array`);
  
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//   console.log(`I am an Object`);
  
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10; // Output will be 5
// val1 = null ?? 10; // Output will be 10
val1 = undefined ?? null // The value which is after the ?? nullish operator that will get printed 
// console.log(val1);

// Terniary Operator
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log(`Less than 80`) : console.log(`More than 80`);



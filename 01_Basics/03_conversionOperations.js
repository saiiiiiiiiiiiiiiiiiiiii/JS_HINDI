let score = null;

// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

// "33" is easily get converted into number 33
// "33abc" is not get converted into number so it it will give a value NaN 

let LoggedIn = "Sainath";
let valueLoggedIn = Boolean(LoggedIn);
// console.log(valueLoggedIn);
// The value of 1 in Boolean is True
// The value of 0 in Boolean is False
// The value of empty string is False
// The value of String is True


let someNumber = 33;
let Somestring = String(someNumber);
// console.log(typeof Somestring) 



// *********************************************************** Operations **********************************************************************************

let value = 3;
let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Sainath";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + "2");



let  num1 = 5;
// let addnum1 = num1++; // If you assigned an increment operator postfixly then it will perform an  addition operation  
let addnum1 = ++num1;  // And if you assigened an increment operator prefixley then still it wll give same output it will perform an addition operation 
// console.log(addnum1); 
console.log(num1);

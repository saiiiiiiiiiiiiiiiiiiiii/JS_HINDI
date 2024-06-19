// const score =   400;
// const balance = new Number(100)/* I Can Explicitly Declare the Datatype That weather it will be String or Number Here i declare datatype (Number) with a New Keyword */
// // console.log(balance);
// // const str1 = new String(200)/* I Can Explicitly Declare the Datatype That weather it will be String or Number Here i declare datatype (String) with New Keyword  */
// // console.log(str1)
// // console.log(score);
// // console.log(balance);
// // console.log(balance.toString())
// // console.log(balance.toFixed(2));

// // const anotherNumber = 123.8993;
// // console.log(anotherNumber.toPrecision(3));

// const otherNumber = 1000000;
// console.log(otherNumber.toLocaleString('en-In'));

const num = 1000000000000 ;
console.log(Number.isFinite(2723));// This Method tells that the value is finite or not
console.log(Number.isInteger(2723));// This Method tells That the value is integer or not
console.log(Number.isNaN(2723));// This Method tells that the value is  number or not
console.log(Number.isSafeInteger(2723)); // This Method says that value is probably be the safe integer or not based on the range -2 raise to 53 +1 and +2 raise to53 -1;
console.log(Number.parseFloat("2723"));//Number.parseInt() is a method in JavaScript used to convert a string into an integer. It reads the string from left to right and converts it to an integer value
console.log(Number.parseInt("abc2723"));//Number.parseInt() is a method in JavaScript that converts a string into an integer by parsing it and stopping when it encounters a non-numeric character. This function is useful for converting strings containing numbers into integer values.
console.log(Number.prototype.toExponential(2));//
console.log(num.toFixed());//Number.prototype.toFixed() is a method in JavaScript that formats a number using fixed-point notation. This method converts a number into a string, keeping a specified number of digits after the decimal point.
console.log(num.toLocaleString('en-In'));// Returns a string with a language-sensitive representation of the number.
console.log(num.toPrecision());
console.log(num.toString());
console.log(num.valueOf(num));



// ************************************************************************Maths***********************************************************************
// console.log(Math)
// console.log(Math.abs(-4)); // Math.abs() is an absolute method which only converts the negative value into positive 
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.1)); // Math.ceil() is a method which is used to get a round value for example in Math.ceil() the round figure Number of 4.1 is 5 not 4
// console.log(Math.floor(4.9)); // Math.floor() is a method which is used to get a round value for example in Math.floor() the round figure Number of 4.9 is 4 not 5 
// console.log(Math.min(2,5,1,3,7,9));//Math.min() is a method which is used to get the minimum means (small) value in the array or in the group of numbers
// console.log(Math.max(3,5,7,9));//Math.max() is a method which is used to get the maximum means (big) value in the array or in the group of numbers

// console.log(Math.random()) // Math.random() we get the random math values between 0 and 1 ;
// console.log((Math.random()* 10) +1);
console.log(Math.abs(-2));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.round(4.3));
console.log(Math.max(1,5,3,9))
console.log(Math.min(1,5,3,9))
console.log(Math.sqrt(25));
console.log(Math.random());


const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min )

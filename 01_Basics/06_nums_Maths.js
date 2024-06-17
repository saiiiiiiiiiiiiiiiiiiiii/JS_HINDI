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

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min )
// array 

const myArr = [0,1,2,3,4,5];//Array is an collection of a multiple elements including multiple Datatype like number, string, Boolean, ans many more.
// There are multiple ways of creating an array like 

// const myHeros = ["IronMan", "SuperMan", "SpiderMan"];
// const myArr = new Array(1,2,3,4,5,6,7,8,9,10);
// console.log(myArr[2]);

// Array Methods
// myarray.push(6)
// myarray.push(7)//Push method used to add the element in tha existing array
// myarray.pop()//Pop method removes the last element from the array

// myarray.unshift(9)//Unshift Method used to add the element in the start of the existing array
// myarray.shift()//Shift Method removes the element from the existing array similar lke Pop but removes the element from the front 

// console.log(myarray.includes(11));//This Method says that weather the given number is there in the existing array or not 
// console.log(myarray.indexOf(4));//This Method says that what is the index value of given number in the string 

// const arr = myarray.join()
// console.log(myarray);
// console.log( typeof arr)



// slice and splice
console.log("A ",myArr );
const mynewarray1 = myArr.slice(1,3);
console.log(mynewarray1);
console.log("B ",myArr );
const mynewarray2 = myArr.splice(1,3);//When we use a splice method the items get deleted from the existing string means it maniuplate overall array 
console.log(mynewarray2);
console.log("c ",myArr );


const Marvel_Heros = ["Ironman","Thor","SpiderMan"]
const DC_Heros = ["SuperMan","WonderWomen","BatMan"]
// Marvel_Heros.push(DC_Heros)
// console.log(Marvel_Heros);
// console.log(Marvel_Heros[3][2]);

// let real_heros = Marvel_Heros.concat(DC_Heros);
// console.log(real_heros);

// Spread Operator in array 
// const all_New_heros = [...Marvel_Heros,...DC_Heros];
// console.log(all_New_heros);


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array =  another_array.flat(Infinity)
// console.log(real_another_array);
console.log(Array.isArray("Sainath"));// Through this Method you can check waether the given data is an array or not
console.log(Array.from("Sainath"))//Through this Method you can convert the given Data into array 

const score1 = 100;
const score2 = 200;
const score3 = 200;

console.log(Array.of(score1,score2,score3));



// Array 
/** We can create an array through different different ways  */
// 1) Using Array literal
const array1 = [0,1,2,3,4,5]
// 2) Using Array Constructer
// const array2 = new Array();// This is an empty array defined using an array constructer
// const array2 = new Array(5) // This is also an empty array with 5 undefined elements
const array2 = new Array(0,1,2,3,4,5) // This is an array with the specified elements

// 3) Using Array of
// const array3 = Array.of(5) // Creates an Array with single element 5
const array3 = Array.of(0,1,2,3,4,5) // Creates an array with an specified elements
// 3) Using Array from 
// const array4 = Array.from("Sainath") // This Mehod coneverts the string into array

// console.log(array4);



const myarray = [1,2,3,4,5,6,7,8,9,10]
// Adding or Removing Elements
// 1)Push()Method
// myarray.push(6,7,8,9,10)/** This is Push() Method Through this you can add Elements in the Declared array by selecting it */
// console.log(myarray);
// 2)Pop() Method
// myarray.pop(6,7,8,9,10) // This is Pop() Method Through this you can remove the Elements in the Declared array by selecting it
// console.log(myarray)
// 3)unshift()Method
// myarray.unshift(6,7,8,9,10)//This is Unshift()Method Similar to Push() Method Through this you can add Elements in the Declared array by selecting it 
// console.log(myarray);
// 4)Shift()Method
// myarray.shift(6,7,8,9,10)//This is shift()Method Similar to Pop() Method Through this you can remove the Elements in the Declared array by selecting it
// console.log(myarray)
// 5)Splice()Method
// myarray.splice(2,5,2.5)//2 is the start count and 0 is the delete count it means after 2 0 elements will be deleted and after that we have given an element to add with in the array
// 6) Accessing Elements Using indexOF() Method
//  let a = myarray.indexOf(4)// It gives you the index value of the specified array element
//  console.log(a);


//7)Concatination means concat() Method 
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// const arr3 = arr1.concat(arr2);// THrough Concat You can add the two strings 
// const  arr3 = [...arr1,...arr2];// Through spread operator you can do the same as well 
// console.log(arr3);


// 
// const arr1 = ["Riddhii","Sai"];
// const iterator = arr1.entries();
// for (const [index,arr1] of iterator) {
//   console.log(index,arr1);
  
  
// }
// const arr3 = [1,2,3,4,5]
// let i = arr3.includes(30);
// console.log(i);
// const arr6 = [1,5,7,9,2,3]
// console.log(arr6.sort());
const arr8 = [1,3,5,6,7,8,8]
// console.log(arr8.toString());
// const iterator = arr8.values();
// for (const values of iterator) {
//   console.log(values);
// }
console.log(arr8.length);











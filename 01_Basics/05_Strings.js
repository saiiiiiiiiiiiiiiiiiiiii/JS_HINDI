const name = "Sainath";
const age = 21;
// console.log("my Name is " + name + "and I am " + age + "year's old") // This is wrong approach 
// console.log(`my name is ${name} and i am ${age} year's old`) // This is String Interpolation a correct approach 

const myFullname = new String("Sai-nath-More") // A different way to declare the siring 
// console.log(myFullname[0]);
// console.log(myFullname.__proto__);
// console.log(myFullname.length);
// console.log(myFullname.toUpperCase());
// console.log(myFullname.toLowerCase());
// console.log(myFullname.charAt(1));
// console.log(myFullname.indexOf('i'));
// console.log(myFullname.substring(0,3));
// console.log(myFullname.slice(1,3));
// console.log(myFullname.trim());
console.log(myFullname.split('-'))


const url = "https://laughing-doodle-69v7wq5v9vpvfxj7.github.dev/" //This is a string (example)
// console.log(url.replace('.' , '-'))
// console.log(url.includes('laughing'));


// **********************Important Methods of string***************************************************************************
const str1 = "The quick Brown fox jumps Over the lazy dog. The dog was not amused.";
const str2 = "                 Quickly                  ";
console.log(str1.charAt(4)); // This charAt(4) Method says that which character lies at the index value 4 of the string (str1)
console.log(str1.charCodeAt(4)); // This charcodeAt() Method givs the unicode of the charcter which we select through index value 
console.log(str1 + str2); // Through this you can concatinate (add) the two strng together 
console.log(str1.concat(' ', str2)); // And This is also the different  approach to assign a string 
console.log(str1.endsWith('dog'));//By this endswith() Method you can identify that by which character your string is ending 
console.log(str1.includes('fox'));// This includes() Method tells that the specific word in the method is there in the string or not 
console.log(str1.indexOf('dog'));// This indexOf() Method tells that the index value of the character q is at 4th index value of the string 
console.log(str2.padStart(10,'.'));/*This padstart() Method in javascript use to add the current string 
with the another string so that the resulting string reaches the given length
 for examle (.padstart(length of the string ,'here's a string you want to add with the current string '))
 but in the padstart() Method the resulting string eill get added at the start  of the string 
 */ 
console.log(str2.padEnd(11 , 'fast'));/*This padEnd() Method in javascript use to add the current string 
with the another string so that the resulting string reaches the given length
 for examle (.padEnd(length of the string ,'here's a string you want to add with the current string '))
 but in the padEnd() Method the resulting string eill get added at the end of the string 
 */ 
console.log(str2.repeat(2)); // This method repeat's the string the time you provided in the argument 
console.log(str1.replace('Over','on'));// This method replace the character in the string by the word which you have given in the second argument 
console.log(str1.replaceAll('dog','Monkey'));//This method replace all the word which you have provided in the first argument of the the method by the word which you have provided in the second argument 
console.log(str1.search('fox'));// This Method gives you the index value of the character which you have given in the argument 
console.log(str2.slice(0,4));// This Method cuts the string based on the given value which we had provided in the argument 
console.log(str1.split(""));//This Method split  the string based on the given value in the argument   
console.log(str1.startsWith('The'));//This Method checks weather the string starts with the given argument or not and a boolean  value that weather it is true or not 
console.log(str2.substring(0,10));// This Method display  the string  according to the index value which you have given the argument of the method
console.log(str2.toUpperCase());// This method return the string in capital letters 
console.log(str2.toLowerCase());// This Method return the string in Small letters 
console.log(str2.toString());// This Method return the appropraite value in string format 
console.log(str2.trim());// This Method removes the spaces from the string
console.log(str2.trimEnd());// This Method removes the spaces from the end 
console.log(str2.trimStart());//This Method removes the spaces from the stringm from start
console.log(str2.valueOf());// This Method gives the value of string what ever it is.
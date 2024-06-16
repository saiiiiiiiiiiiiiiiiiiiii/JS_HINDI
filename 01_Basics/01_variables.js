const accountId = 2723;
let accountEmail = "Sainath@gmail.com";
var accountPassword = "9324462051";  // prefer not to use var keyword because of isseue in block scope and functional scope 
accountCity = "Maharasta"; // Prefer not to use this as well it's not a good approach in javascript programming 
let accountState;

// accountId = 975;             // you cannot change the value of the identifier assigned with const keyword

accountEmail = "Sai@gmail.com"; //you can change the value of an identifier assigned with let keyword  
accountPassword = 9969808767;  //you can change the value of an identifier assigned with var keyword  
accountCity = "Meghalay";    //you can change the value of an identifier assigned with Nothing

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])
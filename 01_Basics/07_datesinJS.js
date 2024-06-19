// Date
let myDate = new Date() ;
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let mycreatedDate = new Date(2024, 0,23,5,7);
// let mycreatedDate = new Date("2024-01-23");
let mycreatedDate = new Date("01-23-2024");
// console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleString());


let myTimestamp = Date.now()


// console.log(myTimestamp);
// console.log(mycreatedDate.getTime());
// console.log(Date.now()/1000);

let newDate = new Date("01-23-2024")
// console.log(newDate.getDate());
// console.log(newDate.getMonth() +1);
// console.log(newDate.getFullYear());

 let a = newDate.toLocaleString('default', {
  weekday:"long",
})

console.log(a);



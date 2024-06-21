// for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(index);
// }

// We can change the value of identifier name as well for example from index to i
// for (let i = 0; i <=10; i++) {
//   const element = i;
//   console.log(element);

// }

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   if(index == 5){
//     console.log(`Detected 5`);

//   }
//   console.log(`am i getting executed first ${element}`);

// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of  ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and inner loop ${i}`);
//     console.log(`${i}*${j} = ${i * j}`);
//   }
// }

// const myarray = ["Ironman", "Spiderman", "Batman"];
// for (let index = 0; index < myarray.length; index++) {
//   const element = myarray[index];
//   console.log(element);
// }

// break and continue


// break concept 
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if(i == 5){
//     console.log(`5 Detected`);
//     break;  // when you use a break keyword in the loop the loop will exit all the way from that point without executing the next insruction 
//   }
//   console.log(element);
  
  
// }

// continue concept

for (let i = 0; i <= 10; i++) {
  const element = i;
  if(i == 5){
    console.log(`5 Detected`)
    continue //The continue keyword will diserupt the flow of execution only for once but will not get totally out of it just like break
  }
  console.log(element);
  
  
}

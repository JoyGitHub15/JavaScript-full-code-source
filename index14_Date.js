const mydate=new Date();
console.log(mydate.toDateString());

console.log(mydate.toLocaleString());

// console.log(mydate.toLocaleTimeString('default',{weekday:'long',}));

// console.log(mydate.toLocaleTimeString('default',{weekday:'short',}));
// let updateDate=new Date(2025);
// console.log(updateDate);
let updateDate2=new Date('01-18-2001');
console.log(updateDate2);

// let myTime=Date.now();

// function myTask(){
//   for(let start=0;start<1000;start++){
//     console.log(`how many tims runing the code`);
//   }
// }
// let startTime=Date.now();
// myTask();
// let endTime=Date.now();
// console.log(`The task talk: ${endTime-startTime}  milisecond to complet`);

// second 

let myTime=Date.now();
console.log(Math.round(myTime/100));

console.log(mydate.getDate());
console.log(mydate.getMonth());
console.log(mydate.getFullYear());

/*
 * JavaScript Higher Order Array Loop
 */

// ['', '', '', 1, true][({}, {}, {})];

const fruits = ['Mango', 'Banana', 'Orange', 'Graps'];

for (let fruit = 0; fruit < fruits.length; fruit++) {
  // console.log(fruits[fruit]);
}

for (const fruit of fruits) {
  // console.log(fruit);
}

const myName = 'Ali Hossain';
for (const name of myName) {
  // console.log(`Each char is ${name}`);
}

const country = new Map([
  ['Bn', 'Bangladesh'],
  ['In', 'India'],
  ['Pk', 'Pakistan'],
  ['Np', 'Nepal'],
]);

country.set('Vu', 'Vutan');

// country.set('Bn', 'Bangladesh');

// for (const key of country) {
//   console.log(key);
// }

for (const [key, value] of country) {
  // console.log(key, ':', value);
}

const myCountry = {
  Bn: 'Bangladesh',
  In: 'India',
  Pk: 'Pakistan',
  Np: 'Nepal',
};
// for (const key of myCountry) {
//   console.log(key);
// }

// for (const key in myCountry) {
//   console.log(key, ':', myCountry[key]);
// }

for (const key of Object.keys(myCountry)) {
  // console.log(key);
}

for (const key in fruits) {
  // console.log(fruits[key]);
}

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// fruits.forEach(fruit => {
//   console.log(fruit);
// });

// function myFruit(fruit) {
//   console.log(fruit);
// }
// fruits.forEach(myFruit);

fruits.forEach((fruit, index, arr) => {
  // console.log(fruit, index, arr);
});

const stack = [
  {
    name: 'MERN Stack',
    property: 'Mongo, Express, React, Node',
  },
  {
    name: 'Laravel',
    property: 'JavaScript, Vue, PHP, Laravel, MySQL',
  },
  {
    name: 'WordPress',
    property: 'JavaScript, PHP, WordPress, MySQL',
  },
];
stack.forEach(info => {
  console.log(`Want to learn ${info.name}? Learn this ${info.property}`);
});



//Normal for Loop

console.log("**(Normal for Loop)**");
for (let values=0;values<fruits.length;values++){

  console.log(values+" : "+fruits[values]);

}


//for in Loop 
console.log("**(for in Loop)**")
for (const key in fruits) {
  console.log(key,":",fruits[key]);
}

//for of Lopp 

console.log("**(for of Lopp)**")

for (const val of fruits) {
  console.log(val);
}
// for of Loop index add other way
console.log("**(for of Loop index add other way)** ");

for(const [index,val] of fruits.entries()){
  console.log(index+" : "+val);
}

//for Each Loop 

console.log("**(for Each Loop normal function used)** ");

fruits.forEach(function(fruit,index){
  console.log(fruit);
});

console.log("**(for Each Loop arrow function used)** ");

fruits.forEach(fruits=>{
console.log(fruits);
});

console.log("**(for Each Loop arrow function used and add index)** ");
fruits.forEach((fruits,index)=>{
console.log(index+":"+fruits);
});
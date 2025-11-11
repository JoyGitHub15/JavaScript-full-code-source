
const language=['HTML','CSS','JavaScript','PHP',true,50];


language[4]='Tailwind CSS';
language[5]='react.js';
language[6]='vue.js';
language[7]='laravel';
language[8]='Booststrap';

//last item
console.log(language[language.length-1])
//delete or remove last line
language.pop();
//add last item
language.push('Angular.js')
//add first line
language.unshift('Basic computing')
//delete first line
language.shift();
console.log(language);
//the elements show the string types
console.log(language.toString());
//this propertys  work do space
console.log(language.join(' * '));
//how many string 
console.log(language.length);
//how many nmber show the string 
console.log(language[2])
console.log(language[3])
console.log(language[4])
 

// const x=[1,2,3,4];
// const y=[1,2,3,4];
// const p=[2,3,4];
// const z=x.concat(y,p);
// console.log(z)

// const a=[
//   [1,2,3],
//   [4,5,6],
//   [6,7,8],
// ];

// console.log(a);
// console.log(a.flat());

language.splice(2,0,'info','info2');
language.splice(0,2);
console.log(language);



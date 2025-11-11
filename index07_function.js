
/** code-driven invocation */
console.log('********---code-driven invocation---*********')



function my_function(Name,Age,date_of_birth,department,id){
  console.log('hello name is:'+Name+"\n"+'my age:'+Age+"\n"+'my date of birth:'+date_of_birth+"\n"+'my department:'+department+"\n"+"my id is:"+id);
}
my_function('joy',25,2001,'CSE','0112320195');

my_function('jahirul',26,2000,'CSE','0112320196');

my_function('jahirul islam',24,2002,'CSE','0112320197');








/** Automatic(Self-invoket)invocation */

console.log('*******--Automatic(Self-invoket)invocation--****');

(function(){
  console.log('I am self-invokeing function i am run automatic way my not need variable name couse i am also indeependent ');
})();


(function(massage){
  console.log('Hllo I am',massage)
})('Joy Ahmed');



/** function expression */

console.log('******---function expression---******');

let maths=function(x,y){

  console.log(' i am multiple makers and before the retuen line it is ',x*y)
  return x*y;


};

console.log(maths(10,4));
console.log(maths(15,4));
console.log(maths(140,4));
console.log(maths(104,4));
console.log(maths(105,4));
console.log(maths(200,4));

// ****--upper code other way i can write----***
console.log("****--upper code other way i can write----***");

let math=(x,y)=>x*y;
console.log('i am multiple makers and before the retuen line it is',math(44,77));
console.log(math(44,77));



//******//
function newFunction(){
  let firstName='joy';
  console.log(firstName);
}
newFunction();
// console.log(firstName);//it's not woekin couse it out of the block so it can not work!!!


let numbers=[4,5,6,7,8,9];
let sqNumbers=numbers.map(function(number){
  return number*number;
});

console.log(sqNumbers);




function greet(firstName){
  function sayHello(){

    alert('Hello'+firstName);
  }
  return sayHello();

}
greet('jahirul')




/** Event-Driven invocation */
console.log('********---Event-Driven invocation---****');

function subs(){
  console.log('subscribed');
}

document.getElementById("btn").addEventListener("click",subs);


console.log('---this is a subscribe click--')





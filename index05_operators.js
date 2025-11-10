/* arithmetic operator*/
let a=10;
let b=20;
let c=a+b;
let d=b-a;
let e=b/a;
let f=a*b;
let g=b%a;

console.log(c,d,e,f,g);


/*let userInput=prompt('Enter a number');
number=userInput;
5
if(number%2===0){
  console.log(number,'is a even number');
} else{
  console.log(number,'is a odd number');
}*/


let x=10;
x=x+2;
x++;//incriment
console.log(x);

y=20;
y=y-3;
y--;//decrement
console.log(y);


/*comparison operator */
x=10;
y='10';
console.log(x==y);
console.log(x===y);
/************** */

console.log('next type *****');


a=20;
b=20;
c=30;
console.log(a===b);
console.log(a!==b);
console.log(a!==c);
console.log(a===c);
console.log(b!==c);
console.log(b===c);


/**logical operator */

//  (&&) and operator
//  (||) or operator
// !(p<q) NOT operator 

/* assaignment operator */

let j=99999;
let k=2;

j=j/k;
j/=k;

j=j%k;
j%=k;

j=j+k;
j+=k;

j=j-k;
j-=k;


j=j*k;
j*=k;
j**=k



console.log(j);


/*conditional (ternary) operator */
h=80;
u=70;
let t=h<u?'True':'False';
console.log(t)


if(h>u){
  console.log('True');
}else{
  console.log('False');
}

let big='joy';
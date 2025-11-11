
const newSymb=Symbol('Key1');

const mobileModel={
  brand:'samsung',
  model:'s26 Ultra',
  processor:'Sanpdragon Gen3',
  camera:['200mp','12mp','14mp'],
  hasZoomCamera:true,
  'selfie camera MP':12,
  [newSymb]:'myKey1',

//it is a function
brandModel:function(){
  return`mobile brand is ${this.brand} and model is ${this.model}`
},
battray:{
  mah:5000,
}

};



function Person(name, age, dep) {
  this.name = name;
  this.age = age;
  this.dep = dep;
}

const person1 = new Person("Jahirul", 25, "CSE");
console.log(person1);

// this outputs origin

console.log('*******---this outputs origin---*******')

// you see the origin the keys and values

console.log('****__you see the origin the keys and values---***');
console.log(mobileModel);

console.log(mobileModel.brand);
console.log(mobileModel['brand']);

console.log(mobileModel.model);
console.log(mobileModel['model']);

console.log(mobileModel['selfie camera MP']);
console.log(mobileModel.hasZoomCamera);
console.log(mobileModel.battray.mah);





// you see the origin keys
console.log('****__you see the origin keys---***');


console.log(Object.keys(mobileModel));

// you see the origin values
console.log('***---you see the origin values---***');

console.log(Object.values(mobileModel));


console.log(mobileModel.brandModel());



// this outputs modifiers
console.log('*******---this outputs modifiers---*******')



mobileModel.model='iphone16_max_pro';
console.log(mobileModel.model);

mobileModel.brand='iphone';
Object.freeze(mobileModel);
mobileModel.brand='pixel7'//it's not work couse i used to freeze method so that not more brand name change it!!!
console.log(mobileModel.brand);


// you see the modifiers keys and values
console.log('****__you see the modifiers keys and values---***');

console.log(mobileModel);

// you see the modifiers keys
console.log('****__you see the modifiers keys---***');

console.log(Object.keys(mobileModel));

// you see the modifiers values
console.log('***---you see the modifiers values---***');
console.log(Object.values(mobileModel));


console.log(mobileModel.brandModel());


console.log('***---new object make---***');

const obj1={
  a:1,
  b:2,
  c:3,
};

const obj2={
  p:4,
  q:5,
  r:6,
};

const obj3={
  x:7,
  y:8,
  z:9,
};
const objfinal=Object.assign({},obj1,obj2,obj3);


const objfinal2={ ...obj1, ...obj2, ...obj3};

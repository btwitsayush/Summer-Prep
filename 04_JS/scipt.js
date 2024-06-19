console.log("HIIIII");

/*
function abc(){

    var age=18;
}

console.log(age);
*/

// ******************************************************
/*
let userName1="Ayush";
let username2="Srivastava";

let n=userName1+username2; 

let a =userName1+10; 

let b =userName1-10;

let c = 10+userName1;

let d= 10-userName1;

console.log(n);//AyushSrivastava
console.log(a);//Ayush10
console.log(b);//NaN
console.log(c);//10Ayush
console.log(d);//NaN
*/


// ***********************************************

/*
let v1="10";

let v2=10;

// Double equal operator(==) check for the equality of values

if(v1==v2){
    console.log("Yes");
}
else{
    console.log("No");
}


// Triple equal operator(===) check for  the equality of values and data types

if(v1===v2){
    console.log("Yes");
}
else{
    console.log("No");
}
*/

/*
// functions

//function defination
function hi(){
    console.log("Hlo my name is Ayush");
}
//function invocation
hi();


function abc(x){
    console.log(`hello ${x}`);
}

abc("Ayush");


// named function assignmnet

const ph= function printHi(x){
    console.log(`hii ${x}`);
}

ph("Ayush Srivastava");



// anonymous function assignment


const phh= function(x){
    console.log(`hii ${x}`);
}

phh("Ayush--Srivastava");


// arrow function assigmnent

const phhh = (x)=>{
    console.log(`hlo ${x}`)
}
phhh("Ayush--Srivastava");
*/

/*

// Objects

const obj1 = new Object();
const obj2={}

obj1.name="Ayush";
obj2.name="Srivastava"

console.log(obj1);
console.log(obj2);


const details={
    name:"Ayush",
    "age":10,
     1:"Roll No.",
     "city":"Sultanpur"
}

const vr="city";
console.log(details);
console.log(details.name);
console.log(details.age);
console.log(details[1]);//to access integer key
console.log(details.city);
console.log(details[vr]);//to dynmaically access city

// Taking input with the help of browser to acces object values

// const input= prompt();
// console.log(details[input]);

*/



/*
// Array
// const arr=new Array();
const arr =["one",1];

*/

/*
// Shallow copy

const o1={
    name:"Ayush"
}

const o2=o1;

o2.name="Ayush Srivastava";

console.log(o1.name);
console.log(o2.name);



let u1="Ayush";

let u2=u1;

 u2="Ayush Srivatava";

console.log(u1);

console.log(u2);
*/

const o1={
    name:"Ayush",
    age:20,
    branch:"CSE"
}

for(let i in o1){
    console.log(`${i}: ${o1[i]}`);
}
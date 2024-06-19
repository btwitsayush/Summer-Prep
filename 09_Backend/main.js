console.log("Backend started");

/*

Array Destructuring 

// this is array destructuring when we do array destructuring name doesn't matter i can export function with name 'a' and import same function with name 'b' all that matter is indexing 

const [sum,mul]=require('./myMath.js')

const ans1=sum(5,4);
const ans2=mul(5,4);

console.log(ans1);
console.log(ans2);
*/

/*
    Object Destructuring

// In object destructuring what matters is the name of function not the indexing 


const{mul,sum}=require("./myMath.js");

const ans1=sum(5,4);
const ans2=mul(5,4);

console.log(ans1);
console.log(ans2);
*/



const figlet = require("figlet");

figlet("Ayush!!",  (err, data)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
});
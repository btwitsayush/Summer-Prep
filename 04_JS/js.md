<!-- declaration  var age; -->

<!-- inialization/assignmnet age=10; -->

<!-- re-assignmnet age=15 -->

<!--  re-declaration  var age =22 -->




Var

* var is a functional scope. we can re-declare values ,re-declare variables with var and this oldest data type.


Hoeisting
<!-- Age badd mai define hai issiliye output undefined ayega.Aisa issiliye hoga q ki memory-allocation mai age save ho jayega but same kam let data types ke sth nhi kr skte hai. -->

console.log(age);
var age=18;

**************************************************************************

Let

Variables declared with let have Block Scope({this braces are called block scope })

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope

******************************************************************
Const

The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope











Primitive vs Non-Primitive Data Types

<!-- Primitive are immutable . Immutable means which can't be modified after creation  -->

i.e let name ="Ayus"; //suppose iska adress @1000 hai 
name="Ayush"; //ab yha hum jb update kr rhe value to old adress@1000 destroy ho jayega aur new address mil jayega something like @2000

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint


<!-- Non-primitive are mutable.Mutable means which can be modified after creation -->



2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object





-->interpreted language v/s compiled language

 Compiled languages are translated into machine code before they are executed, while interpreted languages are translated into machine code at runtime by an interpreter.

 Compiled languages
C, C++, C#
Interpreted languages
JavaScript,Ruby, PHP







<!-- Type Coercion and Handling NaN in JavaScript -->

1) String Concatenation:

let n = userName1 + username2; combines two strings. This is straightforward string concatenation.
Example: Ayush + Srivastava results in "AyushSrivastava".

2) Implicit Type Conversion in String Context:

let a = userName1 + 10; demonstrates how a number (10) is coerced to a string and then concatenated to the string userName1.
Example: Ayush + 10 results in "Ayush10"

3) NaN (Not-a-Number):

let b = userName1 - 10; attempts to subtract a number from a string, which is not a valid operation and results in NaN.
Example: Ayush - 10 results in NaN

4) Type Coercion with Number and String:

let c = 10 + userName1; again results in concatenation because when adding a number to a string, JavaScript converts the number to a string.
Example: 10 + Ayush results in "10Ayush"

5) Invalid Subtraction Operation:

let d = 10 - userName1; is another invalid arithmetic operation resulting in NaN, similar to the subtraction case with b.
Example: 10 - Ayush results in NaN.








<!--difference between the double equal (==) and triple equal (===) operators   -->

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



<!-- Difference b/w argument and parameters -->

-->Parameter: This refers to the variable in the function definition that receives a value when the function is called.

--> Argument: This refers to the actual value that is passed to the function when it is called

i.e->

function abc(x){
    console.log(`hello ${x}`);
}

abc("Ayush");


here x is  parameter and Ayush is  argumnet.










<!-- Function assignmnet -->



// named function assignmnet

const ph= function printHi(x){
    console.log(`hii ${x}`);
}

ph("Ayush Srivastava")



// anonymous function assignment


const phh= function(x){
    console.log(`hii ${x}`);
}

phh("Ayush--Srivastava")


// arrow function assigmnent

const phhh = (x)=>{
    console.log(`hlo ${x}`)
}
phhh("Ayush--Srivastava")




<!-- Shallow copy v/s Deep copy -->

<!-- Shallow copy isme dono ka address same ho jata hai tu tum o1 and o2 kese mai bhi chnage kro wo dono jgha he update ho jayega . Ye sb non-primitive data types mai possible hai.
 -->
const o1={
    name:"Ayush"
}

const o2=o1;

o2.name="Ayush Srivastava";

console.log(o1.name);
console.log(o2.name);





primitive pr shallow copy kam nhi krte b/c they are mutable

let u1="Ayush";

let u2=u1;

 u2="Ayush Srivatava";

console.log(u1);

console.log(u2);


<!-- Loops -->

for in loops both pr kam krege object aur array dono pr 
in loops jo hai wo key pr run krta hai bs .

const o1={
    name:"Ayush",
    age:20,
    branch:"CSE"
}

for(let i in o1){
    console.log(`${i}: ${o1[i]}`);
}



<!-- flat function manual code -->

const arr = [1, [2, [3,5]], 4, 5, [6, 7, 8]];


const Flat = (arr) => {
  let res = [];
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      const d = Flat(elem);
      res.push(...d); 
    } else {
      res.push(elem);
    }
  });
  return res;
}

const ans = Flat(arr);

ans.forEach((ce) => {
  console.log(ce);
});

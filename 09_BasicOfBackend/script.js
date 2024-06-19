// const student1={
//     userName:"Ayush",
//     rollNo:21,
//     city:"Sultanpur",
//     State:"U.P"
// }

// How to access propert name?
// 1st way


// console.log(student.userName);

// **2nd-Way using Destructirng 


// it will make cpy of properties of student object

// const {userName,rollNo,city,State}=student;

// console.log(userName);
// console.log(rollNo);


/*
// destructuring of array

const arr=["apple","orange","banana"]

// here the copy of element is based on indexing .ere order matters while in object it doesn't

const[i1,i2]=arr;
console.log(i1);

// example of how indexing matters

const[i3, ,i4]=arr;
console.log(i3);
console.log(i4);


// imp point The cpy we are making are shallow cpy(it;s means if we change value of object/array in copy variable it will also change the value in main variable)



*/

const student1={
    userName:"Ayush",
    rollNo:21,
    city:"Sultanpur",
    State:"U.P"
}
/*
const studen2=student1;//it is also a shallow copy if i change value of any property in student 2 it will be changed in student1 as well
*/


// using of rest and spread

/*
// rest-->To pack the values

// it will create a deep copy(only for primitive values but for non-primitive (like .. object,array) it will make shallow copy) if i change primitive values of student2 like userName it will be changed only in student 2 but for non-primitive like hobbies it will be a shallow copy if i change something in student2 it will reflect in student1 as well


const student2={...student1}
student2.userName="Ayush Srivastava"
console.log(student1.userName);
console.log(student2.userName);

*/

// how = operator create copy in primitive and non-primitve data types

/* 
for primitive data type it will create deep copy
let n="Ayush";
let s=n;
s="Ayush Srivastava";

 */

/*

for non-primitive type it will create shallow copy

const s1={
    userName:"Ayush",
}

const s2=s1;
s2.userName="Ayush Srivastava"

console.log(s2);
console.log(s1);
*/

/*
// reduce method

const arr=[1,2,3,4,5,6]

arr.reduce((acc,value)=>{
    console.log(acc);
    console.log(value);
    return acc+value;
})

console.log(...arr);
*/

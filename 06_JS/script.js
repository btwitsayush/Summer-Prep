
/*
const section=document.querySelectorAll('section');

const secondSection=section[1];


const heading = secondSection.querySelectorAll("h4")[0];

heading.innerText = "Hi ";

heading.setAttribute('class','h4123');


// Creating Elements and adding it to the DOM

const h2=document.createElement('h2');

// h2.innerText="Welcome to my website";

h2.innerHTML="<span>Hiii</span>";
secondSection.appendChild(h2);


// it will add element at top
const p= document.createElement("p");

p.innerText="Hi i am para";

secondSection.prepend(p);


// removing element

secondSection.removeChild(p);


*/

// ******************************************************************


// EventListner

const input=document.querySelectorAll("input")

const printHello=()=>{
    alert("hii")
}

const inputDowned=(e)=>{
    // console.log(input[0].value);
    console.log(e.target.value);
}
const inputPressed=(e)=>{
    // console.log(input[1].value);
    console.log(e.target.value);
}
const inputChnaged=()=>{
    console.log(input[2].value);
}
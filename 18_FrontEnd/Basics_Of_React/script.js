console.log("HIII");
const parent=document.getElementById('root')

// const li1=React.createElement("li",{},"Item-1")
// const li2=React.createElement("li",{},"Item-2");
// const ul=React.createElement("ul",{},[li1,li2]);

// const root=ReactDOM.createRoot(parent)
// root.render(ul)





// const d1=document.createElement("div");
// console.log(typeof(d1));
// console.dir(d1);
// const d2=React.createElement("div",{},"");
// console.dir(d2)
// console.log(typeof(d2));





//  JSX (JavaScript XML, or JavaScript Syntax eXtension)
// const li=<li>Item1</li>
// const ul=<ul>{li}</ul>
// const root=ReactDOM.createRoot(parent);
// root.render(ul);

// code using JSX

const divHello=<div>Hello</div>
const divReact=<div>React</div>
const TextReact=()=>{
    return <h2>We call this React component</h2>
}


const container=<div>
    {divHello}
    {divReact}
    {/* //we need pascal case to run a component by 1st way which is <TextReact />   */}
    <TextReact /> 
    {TextReact()}
    </div>

const root = ReactDOM.createRoot(parent); //conneting react to js
root.render(container); // we cam redenr one thing in main root if we want to redenr multiple thngs we need to create container
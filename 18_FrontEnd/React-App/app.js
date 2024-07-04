import ReactDOM from "react-dom/client";

const parent=document.getElementById('root');
const root=ReactDOM.createRoot(parent);

const App=<div>Hello from React</div>

const HelloText=()=>{
    return <div>Hello from React</div>
}

const Container=()=>{
    return (
        <div>
        {App}
        <HelloText />
        </div>
    );
        
}

root.render(<Container />);
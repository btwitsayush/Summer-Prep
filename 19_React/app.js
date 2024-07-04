import ReactDOM from "react-dom/client";
// import './globalStyle.css';
import HomePage from './src/pages/homePage.js'

const parent=document.getElementById('root');

// ye jsDOM ke cpy create krta hai React DOM ke pass
const root=ReactDOM.createRoot(parent);


// We write code in form of component b/c it helps us to write logic inside the code which element doen't allow us
const App=()=>{
   return(

    <>
   <HomePage />
    </>
   )
}

root.render(
<>
<App />

</>

);
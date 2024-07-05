import ReactDOM from "react-dom/client";
// import './globalStyle.css';
import HomePage from './src/pages/homePage.js'
import SearchPage from "./src/pages/amazonSearchPage.js";
const parent=document.getElementById('root');

// ye jsDOM ke cpy create krta hai React DOM ke pass
const root=ReactDOM.createRoot(parent);

const categories = [
   "Today's Deals",
   "Buy Again",
   "Customer Service",
   "Registry",
   "Gift Cards",
   "Sell",
   "Electronics",
 ];

const productInfoCards = [
   {
     id: 1,
     title: "Lamp",
     products: [
       {
         title: "Table Lamp",
         img: "https://www.ulcdn.net/images/products/732065/product/VALTTL62BR62243_LP.jpg?1676291935",
         price: "$29.99",
         description: "A stylish table lamp with a modern design."
       },
       {
         title: "Floor Lamp",
         img: "https://example.com/floor-lamp.jpg",
         price: "$59.99",
         description: "A tall floor lamp that brightens any room."
       },
       {
         title: "Desk Lamp",
         img: "https://example.com/desk-lamp.jpg",
         price: "$19.99",
         description: "A compact desk lamp perfect for workspaces."
       },
       {
         title: "Wall Lamp",
         img: "https://example.com/wall-lamp.jpg",
         price: "$39.99",
         description: "A sleek wall-mounted lamp for a minimalist look."
       }
     ]
   },
   {
     id: 2,
     title: "Chair",
     products: [
       {
         title: "Office Chair",
         img: "https://example.com/office-chair.jpg",
         price: "$89.99",
         description: "An ergonomic office chair with lumbar support."
       },
       {
         title: "Dining Chair",
         img: "https://example.com/dining-chair.jpg",
         price: "$49.99",
         description: "A comfortable dining chair with a classic design."
       },
       {
         title: "Lounge Chair",
         img: "https://example.com/lounge-chair.jpg",
         price: "$119.99",
         description: "A cozy lounge chair perfect for relaxation."
       },
       {
         title: "Gaming Chair",
         img: "https://example.com/gaming-chair.jpg",
         price: "$129.99",
         description: "A high-performance gaming chair with adjustable features."
       }
     ]
   },
   {
     id: 3,
     title: "Table",
     products: [
       {
         title: "Coffee Table",
         img: "https://example.com/coffee-table.jpg",
         price: "$79.99",
         description: "A modern coffee table with a glass top."
       },
       {
         title: "Dining Table",
         img: "https://example.com/dining-table.jpg",
         price: "$299.99",
         description: "A large dining table with seating for six."
       },
       {
         title: "Side Table",
         img: "https://example.com/side-table.jpg",
         price: "$39.99",
         description: "A small side table perfect for tight spaces."
       },
       {
         title: "Console Table",
         img: "https://example.com/console-table.jpg",
         price: "$129.99",
         description: "A stylish console table for your entryway."
       }
     ]
   }
 ];
//  console.log(categories);
// We write code in form of component b/c it helps us to write logic inside the code which element doen't allow us
const App=()=>{
   return(

    <>
   {/* <HomePage  data={productInfoCards} categories={categories}/> */}
   <SearchPage categories={categories} />
    </>
   )
}

root.render(
<>
<App />

</>

);
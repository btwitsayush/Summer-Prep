import ReactDOM from "react-dom/client";
import { useState } from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import './globalStyle.css';
import HomePage from './src/pages/homePage.js'
import SearchPage from "./src/pages/amazonSearchPage.js";
import ProductInfo from "./src/pages/productInfo.js";
import AppContext from "./src/context/appContext.js";
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
        id: 1,
        title: "Table Lamp",
        img: "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg",
        price: "$29.99",
        description: "A stylish table lamp with a modern design."
      },
      {
        id: 2,
        title: "Floor Lamp",
        img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        price: "$59.99",
        description: "A tall floor lamp that brightens any room."
      },
      {
        id: 3,
        title: "Desk Lamp",
        img: "https://images.pexels.com/photos/4207924/pexels-photo-4207924.jpeg",
        price: "$19.99",
        description: "A compact desk lamp perfect for workspaces."
      },
      {
        id: 4,
        title: "Wall Lamp",
        img: "https://images.pexels.com/photos/1675293/pexels-photo-1675293.jpeg",
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
        id: 1,
        title: "Office Chair",
        img: "https://images.pexels.com/photos/709797/pexels-photo-709797.jpeg",
        price: "$89.99",
        description: "Comfortable office chair with ergonomic design."
      },
      {
        id: 2,
        title: "Dining Chair",
        img: "https://images.pexels.com/photos/2428287/pexels-photo-2428287.jpeg",
        price: "$49.99",
        description: "Stylish dining chair perfect for any table."
      },
      {
        id: 3,
        title: "Armchair",
        img: "https://images.pexels.com/photos/5998068/pexels-photo-5998068.jpeg",
        price: "$129.99",
        description: "Plush armchair ideal for relaxing."
      },
      {
        id: 4,
        title: "Recliner Chair",
        img: "https://images.pexels.com/photos/1876340/pexels-photo-1876340.jpeg",
        price: "$199.99",
        description: "Comfortable recliner chair with a sleek design."
      }
    ]
  },
  {
    id: 3,
    title: "Sofa",
    products: [
      {
        id: 1,
        title: "Leather Sofa",
        img: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        price: "$599.99",
        description: "Luxurious leather sofa with a contemporary style."
      },
      {
        id: 2,
        title: "Fabric Sofa",
        img: "https://images.pexels.com/photos/1223677/pexels-photo-1223677.jpeg",
        price: "$399.99",
        description: "Comfortable fabric sofa with plush cushions."
      },
      {
        id: 3,
        title: "Sectional Sofa",
        img: "https://images.pexels.com/photos/376882/pexels-photo-376882.jpeg",
        price: "$899.99",
        description: "Spacious sectional sofa perfect for large rooms."
      },
      {
        id: 4,
        title: "Sleeper Sofa",
        img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        price: "$699.99",
        description: "Versatile sleeper sofa for added functionality."
      }
    ]
  },
  {
    id: 4,
    title: "Table",
    products: [
      {
        id: 1,
        title: "Coffee Table",
        img: "https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg",
        price: "$99.99",
        description: "Stylish coffee table with a modern design."
      },
      {
        id: 2,
        title: "Dining Table",
        img: "https://images.pexels.com/photos/3769135/pexels-photo-3769135.jpeg",
        price: "$299.99",
        description: "Elegant dining table perfect for family meals."
      },
      {
        id: 3,
        title: "Side Table",
        img: "https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg",
        price: "$49.99",
        description: "Versatile side table for any room."
      },
      {
        id: 4,
        title: "Console Table",
        img: "https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg",
        price: "$149.99",
        description: "Elegant console table with a sleek design."
      }
    ]
  },
  {
    id: 5,
    title: "Bed",
    products: [
      {
        id: 1,
        title: "King Size Bed",
        img: "https://images.pexels.com/photos/5511422/pexels-photo-5511422.jpeg",
        price: "$799.99",
        description: "Luxurious king-size bed for ultimate comfort."
      },
      {
        id: 2,
        title: "Queen Size Bed",
        img: "https://images.pexels.com/photos/4247787/pexels-photo-4247787.jpeg",
        price: "$699.99",
        description: "Elegant queen-size bed with a sturdy frame."
      },
      {
        id: 3,
        title: "Single Bed",
        img: "https://images.pexels.com/photos/2258896/pexels-photo-2258896.jpeg",
        price: "$299.99",
        description: "Compact single bed perfect for small spaces."
      },
      {
        id: 4,
        title: "Bunk Bed",
        img: "https://images.pexels.com/photos/3352243/pexels-photo-3352243.jpeg",
        price: "$499.99",
        description: "Space-saving bunk bed for kids or guests."
      }
    ]
  },
  {
    id: 6,
    title: "Rug",
    products: [
      {
        id: 1,
        title: "Area Rug",
        img: "https://images.pexels.com/photos/2717451/pexels-photo-2717451.jpeg",
        price: "$199.99",
        description: "Beautiful area rug with intricate patterns."
      },
      {
        id: 2,
        title: "Runner Rug",
        img: "https://images.pexels.com/photos/3763997/pexels-photo-3763997.jpeg",
        price: "$79.99",
        description: "Long runner rug ideal for hallways."
      },
      {
        id: 3,
        title: "Outdoor Rug",
        img: "https://images.pexels.com/photos/1750182/pexels-photo-1750182.jpeg",
        price: "$129.99",
        description: "Durable outdoor rug for patios and gardens."
      },
      {
        id: 4,
        title: "Shag Rug",
        img: "https://images.pexels.com/photos/1878881/pexels-photo-1878881.jpeg",
        price: "$249.99",
        description: "Soft and cozy shag rug for extra comfort."
      }
    ]
  },
  {
    id: 7,
    title: "Shelf",
    products: [
      {
        id: 1,
        title: "Bookshelf",
        img: "https://images.pexels.com/photos/2765334/pexels-photo-2765334.jpeg",
        price: "$199.99",
        description: "Spacious bookshelf for your literary collection."
      },
      {
        id: 2,
        title: "Wall Shelf",
        img: "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg",
        price: "$69.99",
        description: "Simple wall shelf for extra storage."
      },
      {
        id: 3,
        title: "Corner Shelf",
        img: "https://images.pexels.com/photos/936236/pexels-photo-936236.jpeg",
        price: "$49.99",
        description: "Space-efficient corner shelf for small rooms."
      },
      {
        id: 4,
        title: "Floating Shelf",
        img: "https://images.pexels.com/photos/63122/pexels-photo-63122.jpeg",
        price: "$59.99",
        description: "Elegant floating shelf for a modern touch."
      }
    ]
  },
  {
    id: 8,
    title: "Cabinet",
    products: [
      {
        id: 1,
        title: "Kitchen Cabinet",
        img: "https://images.pexels.com/photos/3769133/pexels-photo-3769133.jpeg",
        price: "$349.99",
        description: "Spacious kitchen cabinet with ample storage."
      },
      {
        id: 2,
        title: "Bathroom Cabinet",
        img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        price: "$149.99",
        description: "Stylish bathroom cabinet with a modern design."
      },
      {
        id: 3,
        title: "Storage Cabinet",
        img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        price: "$249.99",
        description: "Versatile storage cabinet for various uses."
      },
      {
        id: 4,
        title: "File Cabinet",
        img: "https://images.pexels.com/photos/37347/file-cabinet-archive-business-old.jpg",
        price: "$99.99",
        description: "Durable file cabinet for organizing documents."
      }
    ]
  },
  {
    id: 9,
    title: "Curtain",
    products: [
      {
        id: 1,
        title: "Blackout Curtain",
        img: "https://images.pexels.com/photos/2765402/pexels-photo-2765402.jpeg",
        price: "$49.99",
        description: "Thick blackout curtain for complete darkness."
      },
      {
        id: 2,
        title: "Sheer Curtain",
        img: "https://images.pexels.com/photos/242075/pexels-photo-242075.jpeg",
        price: "$29.99",
        description: "Lightweight sheer curtain for soft lighting."
      },
      {
        id: 3,
        title: "Thermal Curtain",
        img: "https://images.pexels.com/photos/2711761/pexels-photo-2711761.jpeg",
        price: "$69.99",
        description: "Insulated thermal curtain for energy efficiency."
      },
      {
        id: 4,
        title: "Printed Curtain",
        img: "https://images.pexels.com/photos/2765336/pexels-photo-2765336.jpeg",
        price: "$39.99",
        description: "Decorative printed curtain for a stylish look."
      }
    ]
  },
  {
    id: 10,
    title: "Mirror",
    products: [
      {
        id: 1,
        title: "Wall Mirror",
        img: "https://images.pexels.com/photos/3769132/pexels-photo-3769132.jpeg",
        price: "$99.99",
        description: "Elegant wall mirror for a modern touch."
      },
      {
        id: 2,
        title: "Floor Mirror",
        img: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg",
        price: "$129.99",
        description: "Large floor mirror with a sleek design."
      },
      {
        id: 3,
        title: "Vanity Mirror",
        img: "https://images.pexels.com/photos/4207924/pexels-photo-4207924.jpeg",
        price: "$79.99",
        description: "Compact vanity mirror with LED lighting."
      },
      {
        id: 4,
        title: "Decorative Mirror",
        img: "https://images.pexels.com/photos/105006/pexels-photo-105006.jpeg",
        price: "$59.99",
        description: "Stylish decorative mirror with ornate frame."
      }
    ]
  }
];

//  console.log(categories);




// We write code in form of component b/c it helps us to write logic inside the code which element doen't allow us
const App=()=>{


  const [search, setSearch] = useState("");

  const router=createBrowserRouter([
    {
      path:'/',
      element:<HomePage />
    },
    {
      path:'/search',
      element:<SearchPage />
    },
    {
      path:'/search/:id',
      element:<ProductInfo />
    }
  ])

  const contextValues = {
    search,
    setSearch,
    categories,
    data: productInfoCards
  };
  

   return(

    <>
    <AppContext.Provider value={contextValues}>
    <RouterProvider router={router} />
    </AppContext.Provider>
    </>
   )
}

root.render(
<>
<App />

</>

);
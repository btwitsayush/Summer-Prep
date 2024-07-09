// <!-- // instead of class we need to write className b/c in js class is keyword  -->

import "./homePage.css";
import NavBar from "../../components/navBar.js";
import CategoryBar from "../../components/categoryBar.js";
import ProductCard from '../../components/product-info-cards/productInfoCard.js';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/appContext.js";

const HomePage = () => {
  const {data={}}=useContext(AppContext);

  const navigate=useNavigate();
  
  const openSerachPage=()=>{
    navigate('/search')
  }
 
  
  return (
    // <header className="homepage-root-conatiner">
    <>
      <NavBar openSerachPage={openSerachPage} />
      <CategoryBar />


      <div className="homepage-body">
      <img
        src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
        className="carousal-img"
        alt="Carousal"
      />

      <div className="products-cards-container">
        {data.map((elem) => (
          <ProductCard
            data={elem}
            key={elem.id} // Unique key for each item
          />
        ))}
      </div>
      
    </div>
      </>
    // </header>
  );
};
export default HomePage;

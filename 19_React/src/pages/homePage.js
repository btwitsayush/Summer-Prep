// <!-- // instead of class we need to write className b/c in js class is keyword  -->

import "./homePage.css";
import NavBar from "../../components/navBar.js";
import CategoryBar from "../../components/categoryBar.js";
import ProductCard from '../../components/product-info-cards/productInfoCard.js';
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const {data={},categories=[],search,setSearch}=props;

  const navigate=useNavigate();
  
  const openSerachPage=()=>{
    navigate('/search')
  }
  return (
    // <header className="homepage-root-conatiner">
    <>
      <NavBar setSearch={setSearch} openSerachPage={openSerachPage} search={search} />
      <CategoryBar categories={categories}/>


      <div className="homepage-body">
        <img
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          className="carousal-img"
        />

        <div className="products-cards-container">
          {data.map((elem)=>{
            return <ProductCard 
            data={elem}      //passing whole array as key-value pair to use it as a props
            />
          })}
         
        </div>
      </div>
      </>
    // </header>
  );
};
export default HomePage;

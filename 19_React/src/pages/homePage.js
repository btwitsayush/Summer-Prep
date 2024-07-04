// <!-- // instead of class we need to write className b/c in js class is keyword  -->

import "./homePage.css";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductCard from '../../components/product-info-cards/productInfoCard.js'

const categories = [
  "Today's Deals",
  "Buy Again",
  "Customer Service",
  "Registry",
  "Gift Cards",
  "Sell",
  "Electronics",
];

const productInfoCards=[
  {
    id:1,
    title:"Lamp",
    products:[
      {
        title:"Table-Lamp",
        img:"https://www.abc.com"
      }
    ]
  }
]

const HomePage = () => {
  return (
    <header className="homepage-root-conatiner">
      <nav className="homepage-nav">
        <h4>Amazon.in</h4>
        <p>
          Address
          <br /> LPU University
        </p>
        <div className="homepage-search-container">
          <select />
          <input />
          <button className="homepage-search-icon">
            <FiSearch />
          </button>
        </div>

        <h5>Profile</h5>
        <h5>Cart</h5>
      </nav>

      <div className="homepage-category-bar">
        <button>
          <RxHamburgerMenu />
          All
        </button>
        <div className="category-items">
          {categories.map((elem) => {
            return <a key={elem}>{elem}</a>;
          })}
        </div>
      </div>

      <div className="homepage-body">
        <img
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          className="carousal-img"
        />

        <div className="products-cards-container">
          {productInfoCards.map((elem)=>{
            return <ProductCard 
            cardId={elem.id} 
            cardTitle={elem.title}
            />
          })}
         
        </div>
      </div>
    </header>
  );
};
export default HomePage;

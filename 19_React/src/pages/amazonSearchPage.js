import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import NavBar from "../../components/navBar";
import CategoryBar from "../../components/categoryBar";
import "./amazonSerachPage.css";
import useGetProducts from "../hooks/useGetProducts";

const SearchPage = (props) => {

  console.log("SearchPage Rendering***********************");
  const { categories = {}, setSearch, search } = props;
 
  
  const navigate = useNavigate(); 
  const products=useGetProducts(search);




  return (
    <>
      <NavBar setSearch={setSearch} search={search} />
      <CategoryBar categories={categories} />

      <div className="card-container">
        {products.map((elem) => (
          <div key={elem.id} className="card">
            <h2 className="card-title">{elem.title}</h2>
            <img src={elem.thumbnail} alt="Product Image" className="card-image" />
            <p className="card-description">{elem.description}</p>
            <p className="card-price">INR:{elem.price * 83}</p>
            <button className="card-button" onClick={() => {
              navigate(`/search/${elem.id}`,{ state: { data: products} }); // Correct path format and usage of navigate
              console.log(elem);
              <NavBar/>
            }}>See More</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchPage;

import { useState } from "react";
import NavBar from "../../components/navBar";
import CategoryBar from "../../components/categoryBar";

const SearchPage = (props) => {

  const { categories = {} } = props;
  const customStyle = {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "lightblue",
  };

  const [products, setProducts] = useState([]);

  const getData = async (e) => {
    const val = e.target.value;
    if (val === "") {
      setProducts([]);
    }
    const res = await fetch(`https://dummyjson.com/products/search?q=${val}`);
    const data = await res.json();
    setProducts(data.products);
    console.log(products);
  };

  return (
    <>
      <NavBar getData={getData}/>
      <CategoryBar categories={categories} />


      <div style={customStyle}>
        {products.map((elem) => {
          return <p key={elem.id}>{elem.title}</p>;
        })}
      </div>
      
    </>
  );
};

export default SearchPage;

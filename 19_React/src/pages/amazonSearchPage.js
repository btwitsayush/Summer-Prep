import { useEffect, useState } from "react";
import NavBar from "../../components/navBar";
import CategoryBar from "../../components/categoryBar";
const SearchPage = (props) => {

  const { categories = {} ,setSearch,search} = props;
  const customStyle = {
    padding: "3rem",
    textAlign: "center",
    backgroundColor: "lightblue",
  };

  const [products, setProducts] = useState([]);

  // console.log("search value is",search);

  const getData = async () => {

    const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const data = await res.json();
    setProducts(data.products);
    console.log(products);
    if(search ==="") {
      setProducts([]);
    }
  };

 useEffect(()=>{
  getData()
 },[search])

  return (
    <>
      <NavBar setSearch={setSearch} search={search}/>
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

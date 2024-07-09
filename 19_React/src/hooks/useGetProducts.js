import { useState,useEffect, useContext } from "react";
import AppContext from "../context/appContext";

const useGetProducts=()=>{

  const {search} = useContext(AppContext);

  const [products, setProducts] = useState([]);
    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const data = await res.json();
        setProducts(data.products);
        // if (search === "") {
        //   setProducts([]);
        // }
      };
      useEffect(() => {
        getData();
      }, [search]);
      return products;
}

export default useGetProducts;
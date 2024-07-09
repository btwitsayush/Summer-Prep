import { useEffect, useState } from "react";


const useGetProductsById=(id="")=>{
    const [productInfoByID,setProductInfoByID]=useState({})

    const getProductsById=async()=>{

        const res= await fetch(`https://dummyjson.com/products/${id}`);
        const data=await res.json();
        
        setProductInfoByID(data)
    }

    // useEffect=()=>{
    //     getProductsById()
    // },[]

    useEffect(()=>{
        getProductsById()
    },[])

    return productInfoByID;
}

export default useGetProductsById;
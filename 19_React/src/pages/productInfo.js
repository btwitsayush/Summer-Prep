import { useParams } from "react-router-dom";

const ProductInfo=()=>{

    const params=useParams();
    const {id}=params;
    return(
        <h1>Info page {JSON.stringify(id)}</h1>
    )

}
export default ProductInfo;
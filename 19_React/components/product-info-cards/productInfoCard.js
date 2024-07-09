import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../src/context/appContext";

const productInfoCards=(props)=>{
    // giving a default value to data incase if there was nothing in array 
    const{data={}}=props;

    const contextData=useContext(AppContext)
    console.log(contextData);

    return(
        // console.log(data.cardTitle)
        <div className="products-info-card">
            <h3>{data.title}</h3>

            <div className="produts-items-cards-container" >

           { data.products.map((elem,key)=>{
            return(
                <div className="products-items-card" key={elem.id}>
                    <img src={elem.img} key={key}/>
                    <h5 key={elem.title}>{elem.title}</h5>
                    <Link to={`/search/${elem.id}`}>More..</Link>
                </div> 
            )
           })}
                
            </div>
            
      </div>
    )
}

export default productInfoCards;
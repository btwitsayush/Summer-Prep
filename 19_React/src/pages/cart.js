import { useContext } from "react";
import AppContext from "../context/appContext";

const Cart=()=>{

    const {cart={}}=useContext(AppContext);

    return(
        <>
        {cart.map((elem)=>{
            return(
                <div>
               <p>{elem.title}</p>
               <p>{elem.count}</p>
               </div>
            )
        })}
        <h2>Cart</h2>
        </>
    )

}
export default Cart;
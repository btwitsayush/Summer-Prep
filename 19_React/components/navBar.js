
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import AppContext from "../src/context/appContext";
const NavBar=({openSerachPage})=>{

 const{search,setSearch}=useContext(AppContext)
//  console.log(search);


    return(

    <header className="homepage-root-conatiner">
    <nav className="homepage-nav">
      <h4>Amazon.in</h4>
      <p>
        Address
        <br /> LPU University
      </p>
      <div className="homepage-search-container">
        <select />
        <input value={search}
        onChange={(event)=>{   
          setSearch(event.target.value);
        }}/>
        
        <button className="homepage-search-icon" onClick={openSerachPage}>
          <FiSearch />
        </button>
      </div>

      <h5>Profile</h5>
      <h5>Cart</h5>
    </nav>
    </header>
    )
}

export default NavBar;
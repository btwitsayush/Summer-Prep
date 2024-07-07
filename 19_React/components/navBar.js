
import { FiSearch } from "react-icons/fi";

const NavBar=(props)=>{

 const{search,setSearch,openSerachPage}=props
 console.log(search);


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
          setSearch(event.target.value)
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
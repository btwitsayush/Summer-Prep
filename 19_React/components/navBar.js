
import { FiSearch } from "react-icons/fi";

const NavBar=()=>{

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
        <input />
        <button className="homepage-search-icon">
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
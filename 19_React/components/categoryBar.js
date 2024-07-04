import { RxHamburgerMenu } from "react-icons/rx";


const CategoryBar=(props)=>{

    const {categories=[]}=props;
    console.log(categories);
      
    return(
        <>
 <header className="homepage-root-conatiner">
<div className="homepage-category-bar">
        <button>
          <RxHamburgerMenu />
          All
        </button>
        <div className="category-items">
          {categories.map((elem) => {
            return <a key={elem}>{elem}</a>;
          })}
        </div>
      </div>
      </header>
        </>
    )
}

export default CategoryBar;
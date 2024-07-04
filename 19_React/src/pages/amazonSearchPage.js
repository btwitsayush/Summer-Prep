import NavBar from "../../components/navBar";
import CategoryBar from "../../components/categoryBar";

const SearchPage=(props)=>{
    const {categories={}}=props;

    const customStyle={
        padding:"3rem",
        textAlign:"center",
        backgroundColor:"lightblue"
    };

    let searchText="";
    console.log("intially",searchText);

    const handleSearch=(e)=>{
        const val=e.target.value;
        console.log(val);
    }
    return(
        <>
        <NavBar />
        <CategoryBar categories={categories}/>
        <div style={customStyle}>
            <input type="text" onChange={handleSearch} />
        </div>
        
        </>
    )
}

export default SearchPage;
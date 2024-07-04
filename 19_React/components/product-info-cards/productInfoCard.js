const productInfoCards=(props)=>{
    // giving a default value to data incase if there was nothing in array 
    const{data={}}=props;

    return(
        // console.log(data.cardTitle)
        <div className="products-info-card">
            <h3>{data.title}</h3>
            <div className="produts-items-cards-container">

           { data.products.map((elem)=>{
            return(
                <div className="products-items-card">
                    <img src={elem.img} />
                    <h5>{elem.title}</h5>
                </div> 
            )
           })}
                
            </div>
            
      </div>
    )
}

export default productInfoCards;
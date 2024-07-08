const productInfoCards=(props)=>{
    // giving a default value to data incase if there was nothing in array 
    const{data={}}=props;

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
                </div> 
            )
           })}
                
            </div>
            
      </div>
    )
}

export default productInfoCards;
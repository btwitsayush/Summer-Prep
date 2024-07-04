const productInfoCards=(data)=>{

    return(
        // console.log(data.cardTitle)
        <div className="products-info-card" key={data.cardTitle}>{data.cardTitle} </div>
    )
}

export default productInfoCards;
const {productsCollections}=require('../config/db.js');

// middlewares
const getData=async (req,res,next)=>{
    let products;

    try{
         products=await productsCollections.find().toArray();
    }
    catch(err){
        return res.json({
            staus:"fail",
            error:err
        })
    }

    req.products=products;
    next();
}

const inputValidation=(req,res,next)=>{
    const {name,price,description,category,quantity}=req.body;
    if(!name || !price || !description || !category || !quantity){
       return res.status(400).json({
            status:"fail",
            msg:"All fields are required!!"
        })
    }
    next();
}

// const idValidation=(req,res,next)=>{
//     const {id}=req.params;
//     console.log(typeof(id));
//     const{products}=req;

//     const index=products.findIndex((ce)=>{
//         console.log(typeof);
//         return ce._id===id;
//     })

// }




const getProducts=async(req,res)=>{
    const{products}=req;
    // console.log(products);
    res.json({
        product:products
    })
}

const createProducts=async(req,res)=>{
    const newData=req.body
    // console.log(Date.now())
   await productsCollections.insertOne(newData);
    // console.log(Date.now())

    res.status(200).json({
        status:"success",
        msg:"Product created successfully",
        data:newData
    })
    


}

const deleteProducts=(req,res,next)=>{

}
module.exports={
    getData,
    getProducts,
    inputValidation,
    createProducts
}
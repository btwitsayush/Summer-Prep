const { query } = require('express');
const productModel=require('../model/productModel.js');

const checkId = async(req,res,next)=>{
    try{
    const {id}=req.params;

    const product=await productModel.findById(id);

    if(!product){
      return  res.status(404).json({
            status:"fail",
            message:"Product not found !"
        })
    }
    next();
}
catch(err){

    if(err.name==='CastError'){
   return  res.status(400).json({
        status:"fail",
        message:"Invalid product id !"
    })
    }

    res.status(500).json({
        status:"fail",
        message:"Internal Server Error !"
})

}
}

const getProducts=async(req,res)=>{


    const products=await productModel.find({}).limit(10);
    console.log(products);

    res.send({
        staus:"success",
        products
    })
}

const createProduct = async(req,res)=>{
    try{

        const newproduct=req.body;
         await productModel.create(newproduct);
         res.status(201).json({
            status:"success",
            data:newproduct
         })
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            status:"fail",
            error:err
        })
    }
}

const replaceProduct= async(req,res)=>{
    try{
        const{id}=req.params;
        const updatedData=req.body
        await productModel.findOneAndReplace({_id:id},updatedData)

        res.status(202).json({
            status:"success!!!!!",
            updatedData
        })
}


    catch(err){
            console.log(err);
            res.status(400).json({
                status:"failed",
                mgs:"product not found !!",
                error:err
            })
    }
}

const updateProduct =async(req,res)=>{
    try{
        const{id}=req.params;
        const updatedData=req.body
        updatedData.updatedAt= Date.now();

        const products= await productModel.findByIdAndUpdate(id,updatedData,{new:true});

        res.status(200).json({
            status:"success",
            msg:"Product updated",
            products
        })
    }
    catch(error){
        res.status(500).json({
            status:"fail",
            message:"Internal Server Error !",
            error
    })
    }
}

const deleteProduct =async(req,res)=>{
    try{
        const{id}=req.params;
    
        await productModel.findByIdAndDelete(id);

        console.log("Hiii");

        res.status(204).json({
            status:"success",
            msg:"Product deleted",
        })
    }
    catch(error){
        res.status(500).json({
            status:"fail",
            message:"Internal Server Error !",
            error
    })
    }
}


const listProducts= async(req,res)=>{
   
    // limit=10 its means i am giving a default value to limit
    const {limit=5,q="",fields="",sort="price",page=1,...filters} =req.query;
    // console.log(query);
   // filter is to search things ons basis of query whaterve we will pass in query will be coming inside this using rest operator

   const selectedField=fields.split("_").join(" ");
   const sortField=sort.split("_").join(" ");

    // console.log(filters);
    // console.log(q);
    // console.log("selectedField",selectedField);
    // console.log("sortField",sortField);

    //doing filter of response
    let pizzaQuery=productModel.find(filters);
    // searching based on specific title
    pizzaQuery=pizzaQuery.where("title").regex(q);

    // get response of specific feild
    pizzaQuery=pizzaQuery.select(selectedField);
    // sorting response
    pizzaQuery=pizzaQuery.sort(sortField);
    // doing pagination
    pizzaQuery=pizzaQuery.skip((page-1)*limit)


    // write a query for select and unselect on your own

    const limitedPizza=await pizzaQuery.limit(limit);
    
    res.status(200).json({
        status:"success",
        length:limitedPizza.length,
        limitedPizza
    })

}


module.exports={
    getProducts,
    createProduct,
    checkId,
    replaceProduct,
    updateProduct,
    deleteProduct,
    listProducts
}
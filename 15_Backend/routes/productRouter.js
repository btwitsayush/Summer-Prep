const express=require('express');

const productRouter=express.Router();

const {getProducts,getData,inputValidation,createProducts}=require('../controllers/productControllers.js')

// productRouter.get('/',getproducts)


productRouter.use(getData);
productRouter.route('/')
.get(getProducts)
.post(inputValidation,createProducts)


module.exports=productRouter
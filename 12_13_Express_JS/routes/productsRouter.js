const express=require('express')

const productRouters=express.Router();

const {getProducts,createProducts,replaceProducts,deleteProducts,updateProducts,validateInput,getDataMiddleware,idValidation}=require('../controllers/productControllers.js')


productRouters.use(getDataMiddleware)

productRouters.route('/')
.get(getProducts)
.post(validateInput,createProducts)


productRouters.route('/:id')
.put(validateInput,idValidation,replaceProducts)
.patch(idValidation,updateProducts)
.delete(idValidation,deleteProducts)

module.exports=productRouters;

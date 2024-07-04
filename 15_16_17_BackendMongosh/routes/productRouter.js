const express=require('express');

const productRouter=express.Router();

const{getProducts,createProduct,checkId,replaceProduct,updateProduct,deleteProduct,listProducts}=require('../controllers/productControllers.js');

productRouter.route('/')
.get(getProducts)
.post(createProduct);

productRouter.route('/list')
.get(listProducts);

productRouter.route('/:id')
.put(checkId,replaceProduct)
.patch(checkId,updateProduct)
.delete(checkId,deleteProduct)

module.exports=productRouter;
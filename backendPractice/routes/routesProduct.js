const express=require('express')

const productRouter=express.Router();

const{readDataFile,getProducts,getId,validateInputs,createProducts,validateId,
    replaceproducts}=require('../controllers/controllersProduct.js')

productRouter.use(readDataFile);

productRouter.get('/',getProducts)
productRouter.post('/',validateInputs,getId,createProducts)

productRouter.put('/:id',validateInputs,validateId,replaceproducts)

module.exports=productRouter;
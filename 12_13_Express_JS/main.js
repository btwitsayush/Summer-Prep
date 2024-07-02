const express =require('express');
const app = express();
const morgan=require('morgan');
const productRouters=require('./routes/productsRouter.js')


app.use(express.json());

// app.use(morgan("dev"))

app.use('/products',productRouters);


app.listen(1401,()=>{
    console.log(`Server started at ${"http://localhost:1401"}`);
})
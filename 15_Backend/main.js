require("dotenv").config();
const express=require('express');
const app=express();
const productRouter=require('./routes/productRouter.js')
app.use(express.json());


app.use('/products',productRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT} ${"http://localhost:2100"}`);
})
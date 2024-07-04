const express =require('express');
const app = express();
const productRouter=require('./routes/routesProduct.js')


app.use(express.json());

app.use('/products',productRouter);


    



app.listen(1440,()=>{
    console.log(`Server started at ${"http://localhost:1440/products"}`);
})

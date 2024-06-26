require('dotenv').config();//always on top of file
const{productsCollection}=require('./database/db.js');

const express=require('express');
const app =express();
app.use(express.json())

app.get('/products',async(req,res)=>{
        const product=await productsCollection.find().toArray();

        res.json({
                status:"success",
                products:product
        })
})

app.post('/products',(req,res)=>{
        const body=req.body;
       
        // do validation here 

        const newData=productsCollection.insertOne(body)


        res.json({
                status:"success",
                msg:"data pushed ",
        })
})



app.listen(process.env.PORT,()=>{
        console.log(`server started at ${process.env.PORT}`);
})




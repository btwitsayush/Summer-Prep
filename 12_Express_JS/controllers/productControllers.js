const fsPromises=require('fs/promises');

const validateInput=(req,res,next)=>{
    const body=req.body;
    console.log(body);
    if(!body.title|| !body.description){
        return res.status(400).json({
            status:"fail",
            error:"title and description is required"
        })
    
    }
    
    next();
}

const getDataMiddleware=async(req,res,next)=>{
    const text=await fsPromises.readFile('./data.JSON',{encoding:"utf-8"});
    let products;

    try{
        products=JSON.parse(text);
    }
    // JSON.parse can't parse empty string that's why we are doing error handling here;
    catch(err){
        products=[];
    }

    req.products=products;
    next();

}

const idValidation=(req,res,next)=>{

    const id=Number(req.params.id);
    console.log(typeof(id),id);

    const {products}=req;

    const index=products.findIndex((ce)=>{
        console.log(typeof(ce.id),ce.id);
        if(ce.id===id) return true;
        else return false;
    })

    if(index==-1){
        console.log("id not found");
        return res.status(400).json({
            status:"fail",
            msg:"!!! Wrong id entered"
        })
    }
    console.log(index);
    req.productId=index;
    console.log(req.productId);
     next();

}




// const getData=async ()=>{
//     const text=await fsPromises.readFile('./data.JSON',{encoding:"utf-8"});
//     let products;

//     try{
//         products=JSON.parse(text);
//     }
//     // JSON.parse can't parse empty string that's why we are doing error handling here;
//     catch(err){
//         products=[];
//     }
//     return products
// }



// const getId=async (req,res,next)=>{

//     const products=req.products;
//          let lastId=0;

//          if(products.length<=0){
//             // console.log(products.length);
//             return 1;
//          }
//         lastId=products[products.length-1].id;
//         console.log(lastId);
//         req.id=lastId+1;
//         // return lastId+1;
//         next();
// }

const getProducts=async (req,res)=>{
   
    // let products= await getData();
    let products= req.products;

    // console.log(products);
    

    res.json({
        products:products

    });
};

const createProducts=async (req,res)=>{


    // console.log(Object.keys(req));
    // console.log(req.body);


        const body=req.body;

        // const products=await getData();
        let products= req.products;


        let lastId=0;

         if(products.length<=0){
            // console.log(products.length);
            lastId=0;
         }
        lastId=products[products.length-1].id;
          
        
         const id= lastId+1;
        //  console.log(id);
         body.id=id;
       

        //  console.log(body);
       products.push(body);
    // console.log(products);

    await fsPromises.writeFile('./data.JSON',JSON.stringify(products));

    res.status(201).json({
        status:"success"
    })
};




const replaceProducts=async (req,res)=>{
    
    
    // console.log(typeof(id));
    const newData=req.body;
    // let products=await getData();
    let {products}= req;


   const index=req.productId;
   newData.id=products[index].id;
   products[index]=newData;

   await fsPromises.writeFile('./data.JSON',JSON.stringify(products));


    res.json({
        status:"success",
        mgs:"data updated"
    })

}

const deleteProducts=async(req,res)=>{
   
    // let products=await getData();
    let {products}= req;

   const index= req.productId

   products.splice(index,1);
   await fsPromises.writeFile('./data.JSON',JSON.stringify(products));

   res.status(200).json({
    status:"success",
    msg:"Data deleted"
   })
}

const updateProducts=async(req,res)=>{
    const body=req.body;
    // let products=await getData();
    let {products}= req;
   const index= req.productId;
   console.log(index);

   const updatedData={
    //unpacking the object of product index
    ...products[index],
    //unpacking the body object
    ...body
   }
  products[index]=updatedData;
   await fsPromises.writeFile('./data.JSON', JSON.stringify(products));

res.status(200).json({
    status:"suceess",
    msg:"product updated"
})

}


module.exports= {
    getProducts,
    createProducts,
    replaceProducts,
    deleteProducts,
    updateProducts,
    validateInput,
    getDataMiddleware,
    idValidation
};

const fsPromises=require('fs/promises');

// const getData=async()=>{

//     let products;
//     try{
//         const dataText=await fsPromises.readFile('./data/data.json');
//         products=JSON.parse(dataText);
//     }
//     catch{
//         products=[];
//     }
//     return products;
// }


// Middlewares
const readDataFile=async (req,res,next)=>{

    let products;

    try{
        const dataText= await fsPromises.readFile('./data/data.json');
        products=JSON.parse(dataText);
    }
    catch{
        // if file is empty
        products=[];
    }
    req.products=products;
    next();
}

const validateInputs=(req,res,next)=>{

   const{title,desc,price}=req.body;

   if(!title||!desc|| !price){
    // console.log("input validation fail");
    return res.status(400).json(
        {message:"Please fill all fields"}
    );
   }
//    console.log("input validation successfull");

   next();

}

const getId=(req,res,next)=>{

    const {products}=req;
    // console.log(products);
    let lastindexId=-1;
    // console.log(products.length);
    if(products.length<=0){
        // console.log(lastindexId+1);
         lastindexId=0;
    }else{
        lastindexId=products[products.length-1].id;
    }
    req.lastindexId=lastindexId+1;

    next();
}

const validateId=(req,res,next)=>{
    const{id}=req.params;
    const{products}=req;

    // console.log(typeof(id));  type=string

    const index=products.findIndex((ce)=>{
        // console.log(typeof(ce.id));   type=number1
        return ce.id==id;
    })

    if(index==-1){
            return res.status(400).json({
                status:"fail",
                msg:"Enter correct product id"
            })
    }
    req.index=index;
    next();
}


// Controllers

const getProducts= (req,res)=>{

    const {products}=req;

    res.json({
        products:products
    })
}

const createProducts=(req,res)=>{
    const {products,lastindexId}=req;
    const newData=req.body;
    newData.id=lastindexId;

    products.push(newData);

    fsPromises.writeFile('./data/data.json',JSON.stringify(products));

     res.status(200).json({
        status:"success",
        msg:"Item created!"
    })
}


const replaceproducts=(req,res,next)=>{
    const{index,products}=req;
    const newData=req.body;
    newData.id=products[index].id;
    products[index]=newData
    fsPromises.writeFile('./data/data.json',JSON.stringify(products));

    res.status(200).json({
       status:"success",
       msg:"Item replaced!"
   })

}


module.exports={
    readDataFile,
    getProducts,
    getId,
    validateInputs,
    createProducts,
    validateId,
    replaceproducts

}
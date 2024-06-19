/*
  // exporting function using array
const sum=(a=0,b=0)=>{
    return a+b;
    }
    

   
    const mul=(a=1,b=1)=>{
        return a*b;
        }

    module.exports=[sum,mul];

    */
//    exporting function using object

       const sum=(a=0,b=0)=>{
        return a+b;
        }
        
    
           const mul=(a=1,b=1)=>{
            return a*b;
            }

            module.exports={sum,mul}

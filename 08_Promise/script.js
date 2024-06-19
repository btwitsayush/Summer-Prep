
const pr=new Promise((resolve,rejet)=>{

    let flag=true;
    if(flag){

        

        setTimeout(()=>{
            resolve("Promise is resolved");
        },1000)
        
    }
    else{
        rejet("promise is rejected")
    }
});

// setTimeout(()=>{
//     console.log("It will after ");
// },1000)
pr.then((data)=>{
    console.log(data);
})
.catch((err)=>{
console.log(err);
});
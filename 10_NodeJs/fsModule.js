
// import fs from 'fs'
const fs= require('fs');

/*

// This Sync code . int his code execute by line by line so it may cause blocking. We should avoid this.

fs.writeFileSync('./file.txt',"This is file which i am creating using fs module");

// if i will not convert it into utf-8 format i will get data in form of HexaDecimal
const data=fs.readFileSync('./file.txt',"utf-8");

console.log(data);
*/
/*

async way to read and write using fs module

fs.writeFile('./file2.txt',"This my second file which i am creating using async way",(err)=>{
    if(err)  console.log(err);
    
})



fs.readFile('./file2.txt',"utf-8",(err,data)=>{
    if(err)
        console.log(err);
    
    else 
    console.log(data);
})
    */

/*
// using promises to intreact with file system


const fsPromises=require('fs/promises');

fsPromises.writeFile('./file3.txt',"Creating a file using promises ")
.then(()=>{
    console.log("File created successfully");
})
.catch((err)=>{
    console.log(err);
})


fsPromises.readFile('./file3.txt',"utf-8")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
    */


// const data=require('./data.json');
// console.log(data);


const findId=(data)=>{

    data.find((currentElem)=>{
        if(currentElem.id===2){
            console.log(currentElem);
        }
    })
    console.log("Find method end here");

    data.filter((currentElem)=>{
        if(currentElem.id>1){
            console.log(currentElem);
        }
    })
    
}



const calculateMarks=(data)=>{

    let mathsMarks=0
    let scienceMarks=0;
   
   data.map((currentElem)=>{
    mathsMarks+=currentElem.MathsScore;
    scienceMarks+=currentElem.ScienceScore;
   })

   console.log(mathsMarks);
   console.log(scienceMarks);

}

const fsPromises=require('fs/promises');

fsPromises.readFile('./data.json',"utf-8").then((data)=>{
    // console.log(JSON.parse(data));

    calculateMarks(JSON.parse(data))
    findId(JSON.parse(data))
})
.catch((err)=>{
    console.log(err);
})


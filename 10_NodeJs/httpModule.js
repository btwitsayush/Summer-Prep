const http = require("http");

/*
const app = http.createServer((req, res) => {
    /*
    
    res.setHeader('Content-Type',"text/html")//we use this to define the content type of data what we are sending 
    // if set Content -Type as text/html it will be added as html
    res.write("<p>Welcome to our page</p>")
    res.end()
    */

    /* 1st way to send html response
  res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                
                <style>

                body{
                    background:black;
            color:orange;
        }
        
        </style>
        </head>
        <body>
        <h1>Welcome to our page</h1>
        
        </body>
        </html>
        
        `);
        
       
            
    });
    
    */


    // 2nd way to send html file

    const fsPromises=require('fs/promises')

    const app=http.createServer(async(req,res)=>{

                  console.log(req.url);
        
             
                  res.writeHead(200,{
                      'Content-Type':'text/html'
                  });

                  const path=req.url;
                 
                  switch(path){
                    case '/':{

                        // const stream= await fsPromises.readFile('./homepage.html');
                        const stream= await fsPromises.readFile('./landingPage.html');
                        res.end(stream);
                        break;
                    }
                    case '/homepage':{
                        const stream= await fsPromises.readFile('./homepage.html');
                        res.end(stream);
                        break;

                    }
                    default:{
                        res.end("404 Page not Found")
                    }
                  }

               
           
            });
        

        

app.listen(1400, () => {
  console.log(`server started at ${"http://localhost:1400"}`);
});

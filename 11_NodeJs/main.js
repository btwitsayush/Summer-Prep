const http =require('http');
const fsPromises=require('fs/promises');
const fs=require('fs')
const url=require('url')

// reading data
const dataText=fs.readFileSync('./data.json',"utf-8")

const dataJson=JSON.parse(dataText);
// console.log(dataJson);

const app =http.createServer(async (req,res)=>{

    res.writeHead(200,{
        'Content-Type':'text/html'
    })

    const {query,pathname}=url.parse(req.url,true);

   

    // to read a file i am using file system module but i am using that module with promises and readFile method is used to read the index file 

    switch (pathname){

        case '/':{

            const homePage= await fsPromises.readFile("./pages/homepage.html");
            res.end(homePage);
            break;

        }
        case '/products':{

            const productPage= await fsPromises.readFile("./pages/products.html");
            // res.end(productPage);
            // break;

            // why to convert our page into String? why can't we replace productText directly with product page?
            let text=productPage.toString();

            let productText="";

            dataJson.map((currentElem)=>{
            productText+=` <div class="card-inline">
            <div class="card" style="width: 18rem;">
              <img src="${currentElem.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${currentElem.title}</h5>
                <p class="card-text">${currentElem.description}</p>
                <a href="/view?id=${currentElem.id}" target=_blank">More</a>
              </div>
            </div>
          </div>`
            })

            text=text.replace(' $$Products$$',productText)

            res.end(text);
            break;

        }
        case('/view'):{
            // 
            
            dataJson.find((currentElements)=>{
                
                if (currentElements.id===Number(query.id)) {
                    res.end(`<h2>${currentElements.description}</h2>`);
                }
            })
            break; 
           
        }
        default:{
            res.end('<h1>404! Page Not Found</h1>');
        }
    }

});


app.listen(1400,()=>{
    console.log(`Server started at ${"http://localhost:1400"}`);
})
const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>hello g</h1>");
    res.end();
}).listen(500,()=>console.log("ooo"))
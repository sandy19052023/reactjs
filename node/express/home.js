const c=require('express');
const app=c();
app.get('/',(req,res)=>{
    res.send("WELCOME SANDEEP RAJ R")
   })
   app.listen(1905,()=>console.log("HAI"))
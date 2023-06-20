const a=require('express');
const app=a();

app.get('/',(req,res)=>{
    res.send("<button><a href='/home'>home</a></button> <button><a href='/about'>about</a></button>")
    // res.send("<button><a href='/about'>about</a></button>")

})
app.get('/home',(req,res)=>{
    res.send("<a href='/'>back</a>")
})
app.get('/about',(req,res)=>{
    res.send("<a href='/'>back</a> HAI SANDEEP")
})

app.listen(660,()=>console.log("set"))
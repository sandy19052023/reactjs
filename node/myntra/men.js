const a=require('express');
 const app=a();
app.set('view engine', 'ejs');
const bodyParser=require('body-parser');
 app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('men')
})
app.get('/women',(req,res)=>{
    res.render('women')
})
app.get('/kids',(req,res)=>{
    res.render('kids')
})
app.listen(300,()=>console.log("SANDEEP"))
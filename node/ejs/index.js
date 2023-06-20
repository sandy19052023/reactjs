const a=require('express');
 const app=a();

 app.set('view engine', 'ejs');

 const bodyParser=require('body-parser');
 app.use(bodyParser.urlencoded({extended:true}))

 let c=[]

 app.get('/',(req,res)=>{
    res.render('index',{arr:c})
    // res.send('<button><a href="/home">home</a></button>')

  
 })
 app.get('/',(req,res)=>{
   res.send("<button><a href='/about'>about</a></button>")
})
 app.get('/about',(req,res)=>{
   res.send("<a href='/'>back</a>")
})

 app.post('/',(req,res)=>{
    
    c.push(req.body.uname);

    res.redirect('/')
})
//  app.get('/',(req,res)=>{
//     res.send('<button><a href="/home">home</a></button>')

//     // res.render('index')
//  })
 app.get('/home',(req,res)=>{
    res.send('<button><a href="/">back</a></button>')
 })


 app.listen(699,()=>console.log("ddd"))
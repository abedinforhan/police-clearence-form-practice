const express=require('express')
const ejs = require('ejs');


const app=express()
//set the view wngine to ejs
app.set('view engine','ejs')


app.get('/',(req,res,next)=>{
    res.render('index')
})


const port=5000 || process.env.PORT
app.listen(port,()=>{
  console.log(`Listening on ${port}` );
})
const express=require('express')
const ejs = require('ejs');
const multer = require('multer')
const fileUpload = require('express-fileupload');
const app=express()
const path =require('path')
//set the view engine to ejs
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())
app.get('/',(req,res,next)=>{
    res.render('index')
    res.sendFile(path.join(__dirname,'index.ejs'));
})
app.post('/file',(req,res)=>{
  console.log('file', req.files.file)
})
const port=5000 || process.env.PORT
app.listen(port,()=>{
  console.log(`Listening on ${port}` );
})
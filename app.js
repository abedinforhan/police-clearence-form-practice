const express = require('express')
const ejs = require('ejs');
const multer = require('multer')
const fileUpload = require('express-fileupload');
const app = express()
const path = require('path')
const { files } = require('./upload')
//set the view engine to ejs
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res, next) => {
  res.render('index', {
  })
})
app.post('/from', (req, res) => {
  res.render('from.ejs', {
    goAbroad: req.body.goAbroad,
    countryofTravel: req.body.countryofTravel,
    passportNo: req.body.passportNo,
    issuingCountry: req.body.issuingCountry,
    issuingDate: req.body.issuingDate,
    issuingPlace: req.body.issuingPlace,
    expiryDate: req.body.expiryDate,
    mobileNo: req.body.mobileNo,
    email: req.body.email,
    Nid: req.body.Nid,
    fatherName: req.body.fatherName,
    fatherHusbandname: req.body.fatherHusbandname,
    relation:req.body.relation,
    motherName: req.body.motherName,
    dateBrith: req.body.dateBrith,
    solutation: req.body.solutation
  })
  console.log('file', req.files)
  console.log('passportNo', req.body.passportNo)
  console.log('goAbroad', req.body.goAbroad)
  console.log('countryofTravel', req.body.countryofTravel)
  const nidFile = files('./public/nid').single('nid');
  nidFile(req, res, (err) => {
    const { file } = req;
    console.log('nidfile', file);
    // if(err){
    //   res.render('index',{
    //     massage: err
    //   })
    // }
    // else{
    //   if(req.file== undefined){
    //     res.render('index',{
    //       massage: "No select Image"
    //     })
    //   }
    //   else{
    //     res.render('index',{
    //       file
    //     })
    //   }
    // }
  })
  const uploadFile = files('./public/image').single('image');
  uploadFile(req, res, (err) => {
    const { file } = req;
    console.log('file', file);
    // if(err){
    //   res.render('index',{
    //     massage: err
    //   })
    // }
    // else{
    //   if(req.file== undefined){
    //     res.render('index',{
    //       massage: "No select Image"
    //     })
    //   }
    //   else{
    //     res.render('index',{
    //       file
    //     })
    //   }
    // }
  })
})
const port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})


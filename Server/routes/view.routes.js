var express =require("express");
var app =express.Router();


app.get('/',(req,res,next)=>{
    res.render('index.ejs')
})

app.get('/login',(req,res,next)=>{
    res.render('login.ejs' )
})


module.exports= app
const express=require('express');
const app=express()
require('dotenv').config()
const port=4000;
app.get('/',(req,res)=>{
    res.send("hellow world")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai or code</h1>')
})
app.get('/twitter',(req,res)=>{
    res.send("welcome to twitter")
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`);
})
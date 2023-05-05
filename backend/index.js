import express from "express"
import cors from "cors"
const app=express();
app.use (cors()); 

app.get ('/',(req,res)=>{
    res.send=("Hello")
})
app.get('/Aboutme',(req,res)=>{
    res.json({
        name:"shiva",
     father:"eshwarachary"
    })
})
app.get('/Qualification',(req,res)=>{
    res.json({
        ssc:"DGNHS",
        diploma:"Avanthi",
        btech:"asra"
    })
})
app.get('/Hobbies',(req,res)=>{
    res.json({
        outdoor:"cricket",
    })
})
app.listen(9000,()=>console.log ("server running onport 9000"));
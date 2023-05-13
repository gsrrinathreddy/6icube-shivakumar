import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app=express();


app.get('/',(req,res)=>{
    res.send ("hello")
})
mongoose
.connect(process.env.MONGO_URI,{

})
.then(()=>{
    console.log("connecting to DB")
})
.catch((error)=>console.log(`${error}did not connect`));




app.listen(7000,()=>console.log("server running onport 7000"));
import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstname:{
        type:String,
        requried:true
    },
    lastname:{
        type:String,
        requried:true
    },
    username:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        requried:true
    },
    mobile:{
        type:String,
        requried:true
    },
    role:{
        type:[(String)],
        default:'user',
        enum:["user","admin","super-admin"]
    },
    password:{
       type:String,
       requried:true
    },
    refreshtoken:{
        type:[String],
    },
    },   { timestamps:true} )
   

export default mongoose.model('User',userSchema);
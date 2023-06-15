// const mongoose = require('mongoose')
import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    firstName:{
        type:String, required:true
    },
    lastName:{
        type:String, required:true
    },
    email:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },
    confirmPassword:{
        type:String, required:true
    },
    pic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS650EKUB1QnT3gBSusaW5KRZTJMrCjY4-AeQ&usqp=CAU"
        
    },
    followers:[{
        type:ObjectId, ref:"User"
    }],
    following:[{
        type:ObjectId, ref:"User"
    }],
    stories:[{
        user:{type:ObjectId, ref:"User"},
        storyPic:String,
        storyDate:Date
    }],
    resetToken:String,
    expireToken:String
},{timestamps:true})

const userModel = mongoose.model("User",userSchema) 
export default userModel
// const mongoose = require('mongoose');
import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types


const postSchema = new mongoose.Schema({
    title:{
        type:String, required:true
    },
    desc:{
        type:String, required:true
    },
    image:{
        type:String
    },
    likes:[{
        type:ObjectId,ref:'User'
    }],
    comments:[{
        text:String, 
        postedBy:{type:ObjectId,ref:'User'}
    }],
    saved:[{
        savedBy:{type:ObjectId,ref:'User'}, 
        postId:{type:ObjectId,ref:'Post'}
    }],
    postedBy:{
        type:ObjectId, ref:"User" 
    },
    pic:{
        type:String,
        ref:'User'
    }
},{timestamps:true})

const postModel = mongoose.model("Post",postSchema) 
export default postModel
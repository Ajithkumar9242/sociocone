
// const express = require("express")
// const cors = require("cors")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
// const authRouter = require("./routes/Auth/auth")
import authRouter from "./routes/Auth/auth.js"
import postRouter from "./routes/posts/posts.js"
// import postRouter from "./routes/posts/posts.js"
dotenv.config()

const PORT  = process.env.PORT || 4000

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api" , authRouter)
app.use("/api" , postRouter)

mongoose.connect(process.env.MONGO_URI).then((suc) =>{
    console.log(`Connected to DB`)
}).catch((error) =>{
    console.log(error)
})

app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`)
})
// const userModel = require("../models/userModel")
// const bcrypt = require("bcrypt")
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js"

export const register = async( req, res) =>{
    try {
        const { firstName, lastName , email, password, confirmPassword} = req.body

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(422).json("Enter all fields")
        }
        const userEmail = await userModel.findOne({email})
        if(userEmail)return res.status(400).json("This email already exists")

        const salt = await bcrypt.genSalt(10)
         const hashedPaass = await bcrypt.hash(password , salt )

        const user = new userModel({
            firstName,
            lastName,
            email,
            password: hashedPaass,
            confirmPassword: hashedPaass,
        }) 
        await user.save()
        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SEC , { expiresIn: "3d"})

        res.json('Registered Successfully')
    } 

 catch (error) {
        console.log(error)
    }
}


export const login = async( req, res) =>{
    try {
        const {  email , password} = req.body
         if (!email || !password) {
            return res.status(422).json("Enter all fields")
        }

        const user = await userModel.findOne({email})//find user


        if(!user)return res.status(400).json("This user does not exists")

         if (user) {
            const valid = await bcrypt.compare(password, user.password)

            if (!valid) {
                res.status(400).json("Not Password")
            }
           else {
                const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SEC , { expiresIn: "3d"})
            res.status(200).json("Login Sucess")
        }
    }else{
            res.status(404).json("Not found")
        }
    } catch (error) {
        console.log(error)
    }
}
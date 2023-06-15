// const express = require('express')
// const { register, login } = require('../../controllers/authController')
import express from "express"
import { login, register } from "../../controllers/authController.js"

//import register
const router = express.Router()


router.post('/signup',register)
router.post('/signin',login)
// router.post('/reset-passsword',resetPassword)
// router.post('/new-password',newPassword)

// router.post('/refresh_token',refreshToken)





export default router
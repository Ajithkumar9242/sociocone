import express from "express"
// import { createPost } from "../../controllers/postController"
import { createPost } from "../../controllers/postController.js"

const router = express.Router()

router.post('/createPost',createPost)
// router.post('/signin',login)

export default router

import { PostService } from "./postService"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk("post/createpost", async(postdata) =>{
    try {
        return PostService.createPost(postdata)
    } catch (error) {
        console.log(error)
    }
})
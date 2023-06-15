import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "./AuthService";


export const register = createAsyncThunk("auth/signup", async(userData) =>{
    try {
        return AuthService.register(userData)
    } catch (error) {
        console.log(error)
    }
})
export const login = createAsyncThunk("auth/signin", async(userData) =>{
    try {
        return AuthService.login(userData)
    } catch (error) {
        console.log(error)
    }
})
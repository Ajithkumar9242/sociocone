import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./AuthActions"


const initialState={
    isLoading:false,
    isError: false,
    isRegisterSuccess:false,
    message:'',
    isLoginSuccess:false,
    // user:getUserfromLocalStorage,
    isPasswordSuccess:false,
}

export const AuthSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) =>{
        //register
        builder.addCase(register.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) =>{
            state.isLoading=false,
            state.isError= false,
            state.isRegisterSuccess=true,
            state.message=action.payload.message
        })
        .addCase(register.rejected, (state, action) =>{
            state.isLoading=false,
            state.isError= true,
            state.isRegisterSuccess=false,
            state.message='Error'
        }) 

        //login
        .addCase(login.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.isLoading=false,
            state.isError= false,
            state.isLoginSuccess=true,
            state.user = action.payload
            state.message=action.payload.message
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading=false,
            state.isError= true,
            state.isLoginSuccess=false,
            state.message='Error'
        }) 
    }

})


export default AuthSlice.reducer
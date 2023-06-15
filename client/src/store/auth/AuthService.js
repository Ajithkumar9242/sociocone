import axios from "axios"
import { baseUri } from "../../utils/Utils"

const register = async (user) =>{
    const response = await axios.post(`${baseUri}/signup`,user)
    return response.data
}

const login = async (user) =>{
    const response = await axios.post(`${baseUri}/signin`,user)
    console.log(response.user)
    // if (response.data) {
    //     localStorage.setItem("user" , JSON.stringify(response.user))
    // }
    return response.data
}

export const AuthService = {
    register,
    login
}
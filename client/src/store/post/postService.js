import axios from "axios"
import { baseUri } from "../../utils/Utils"

const createPost = async (postdata) =>{
    const response = await axios.post(`${baseUri}/createPost`,{
        title:postdata.title,
        desc:postdata.desc,
        image:postdata.image
    })
    return response.data
}

export const PostService = {
    createPost
}
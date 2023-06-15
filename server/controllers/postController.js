import postModel from "../models/postModel.js"

export const createPost = async( req, res) =>{
    const { title, desc , image } = req.body

    if(!title || !desc || !image){
        return res.status(400).json("Enter all fields")
    }
    const post = new postModel({
        title,
        desc,
        image,
        postedBy: req.user
    })
    post.save().then(result =>{
        res.status(200).json("Created Sucessfully")
    }).catch((err) =>{
        console.log(err)
    })
}

export const getAllPosts = async(req,res)=>{
    await postModel.find({})
    .populate("postedBy","_id name pic")
    .populate("comments.postedBy","_id name pic")
    .sort("-createdAt")
    .then((posts)=>{
        res.status(200).json({posts})
    })
    .catch(err=>{
        res.status(500).json({msg:err.message})
    })
}


export const likePost = async(req,res)=>{
    try {
        await postModel.findByIdAndUpdate(req.body.postId,{
            $push:{likes:req.user._id}
        },{
            new :true
        })
        .populate("postedBy","_id name pic")
        .populate("comments.postedBy","_id name pic")
        .exec((err,result)=>{
            if(err){
                return res.status(400).json({msg:"This post does not exists",error:err})
            }
            else{
                res.json(result)
            }
        })
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}
export const unlikePost = async(req,res)=>{
    try {
        await postModel.findByIdAndUpdate(req.body.postId,{
            $pull:{likes:req.user._id}
        },{
            new :true
        })
        .populate("postedBy","_id name pic")
        .populate("comments.postedBy","_id name pic")
        .exec((err,result)=>{
            if(err){
                return res.status(400).json({msg:"This post does not exists",error:err})
            }
            else{
                res.json(result)
            }
        })
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}
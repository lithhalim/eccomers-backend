const postes_model=require("../../model/postes-model/post-model");
const image_post=require("../../model/postes-model/images-post");
const comment_post=require("../../model/postes-model/commentOnPostes-model")
const catagory=require("../../model/postes-model/catagory-post");
const like_post=require("../../model/postes-model/likeOnPsotes-model")

module.exports=async(req,res)=>{
    const data=await postes_model.findAll({
        include:[
            {model:image_post},
            {model:comment_post},
            {model:catagory},
            {model:like_post}
        ]
    })

    res.json(data)
}
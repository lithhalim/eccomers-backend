const post_model=require("../../model/postes-model/post-model");
const comment=require("../../model/postes-model/commentOnPostes-model");
const likes=require("../../model/postes-model/likeOnPsotes-model");
const image =require("../../model/postes-model/images-post");
const catagory=require("../../model/postes-model/catagory-post");

module.exports=async(req,res)=>{
    const dataxx=await post_model.findOne({
        include:[{model:comment},{model:likes},{model:image},{model:catagory}],
        where:{postId:req.params.data}    
    })
    res.json(dataxx)
}
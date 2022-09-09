const like_model=require("../../../model/postes-model/likeOnPsotes-model")
module.exports=async(req,res)=>{
    const data=await like_model.create(req.body)
}
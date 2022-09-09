
const post_model=require("../../../model/postes-model/post-model")
module.exports=async(req,res)=>{
    let postId=req.params.data
    const postmodel=await post_model.destroy({where:{postId:postId}})   
}
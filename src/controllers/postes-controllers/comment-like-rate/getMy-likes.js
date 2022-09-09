const like_post=require("../../../model/postes-model/likeOnPsotes-model");
module.exports=async(req,res)=>{
    const data=await like_post.findAll({where:{person_do_like_id:req.params.data}})
    res.json(data)

}
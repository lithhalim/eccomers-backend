const Likes_Model=require("../../../model/postes-model/likeOnPsotes-model")

module.exports=(req,res)=>{
    Likes_Model.destroy({
        where:{post_liked_id:req.params.data}
    })

}
const chate_user=require("../../model/chate-section/chate-user")
module.exports=async(req,res)=>{
    const data=await chate_user.create(req.body)
}
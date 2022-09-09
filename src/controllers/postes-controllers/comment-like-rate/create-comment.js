const comments_model=require("../../../model/postes-model/commentOnPostes-model");

module.exports=async(req,res)=>{
    const data=await comments_model.create(req.body);
    res.json(data)
}
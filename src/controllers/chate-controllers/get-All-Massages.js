const massages=require("../../model/chate-section/chate-massage")
module.exports=async(req,res)=>{
    const data=await massages.findAll({
        where:{chatIdMassage:req.params.data}
    })
    res.json(data)
}
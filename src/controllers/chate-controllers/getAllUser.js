const ChateUser=require("../../model/chate-section/chate-user");


module.exports=async(req,res)=>{
    const data=await ChateUser.findAll({
        where:{User_Id:req.params.data}
    }) 

    res.json(data)

}
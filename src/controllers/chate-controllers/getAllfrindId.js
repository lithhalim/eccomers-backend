const ChateUser=require("../../model/chate-section/chate-user");


module.exports=async(req,res)=>{
    const data=await ChateUser.findAll({
        where:{User_Id:req.params.data},
        attributes: {
            exclude: ['createdAt', 'chatId','id','updatedAt','User_Id','Frend_Image','Frend_Name']
        },    
    }) 
    res.json(data)
}
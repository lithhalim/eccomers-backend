const post_model=require("../../model/postes-model/post-model");
const catagory_model=require("../../model/postes-model/catagory-post");
const image_model=require("../../model/postes-model/images-post")
module.exports=async(req,res)=>{
    const datause=await post_model.findAll({
        include:[
        {model:catagory_model,
         where: { catagory:req.params.data},
        },{
            model:image_model
        } ]
    })
    res.json(datause)
}
const post_model=require("../../model/postes-model/post-model");
const basket_model=require("../../model/basket-check/basket-check");
const Image_Model=require("../../model/postes-model/images-post");

module.exports=async(req,res)=>{
    let id=req.params.data

    const DataUse=await post_model.findAll({
        include:[{model:basket_model},{model:Image_Model ,  attributes: ['url']  } ],
        where:{
            postId:id
        }
    })

    res.json(DataUse)

}

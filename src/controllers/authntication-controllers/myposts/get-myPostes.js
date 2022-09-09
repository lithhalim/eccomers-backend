const post_model=require("../../../model/postes-model/post-model")
const image_post_model=require("../../../model/postes-model/images-post")
const catagory_model=require("../../../model/postes-model/catagory-post")



class DataModefy{
    constructor(id,description,name,price,rate,createdAt,image,catagories){
        this.id=id,
        this.image=image,
        this.name=name,
        this.description=description,
        this.catagories=catagories,
        this.price=price,
        this.createdAt=createdAt,
        this.rate=rate
    }
}

module.exports=async(req,res)=>{
    let  regusterid=req.params.data;
    const user_data=await post_model.findAll({
        include:[{model:image_post_model},{model:catagory_model} ],
        where:{personDoPostId:regusterid},
        attributes: { exclude: ['catagoreys','phoneNumber','discountPeriod','discount','updatedAt','personDoPostId','catagoreys'] }
    }
    )

    let dataUse=[]
    user_data.forEach((a)=>{
        const { postId,postDescription, postName,price,rate,createdAt, imagespostes,catagoreys}=a
        let list=new DataModefy(postId,postDescription,postName,price,rate,createdAt,imagespostes[0]. url,catagoreys[0]. catagory)
        dataUse.push(list)
        
    })


    res.json(dataUse)
}


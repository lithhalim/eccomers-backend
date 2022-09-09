const post_model=require("../../model/postes-model/post-model");
const post_images_model=require("../../model/postes-model/images-post");
const post_catagory_model=require("../../model/postes-model/catagory-post");

module.exports=async(req,res)=>{    
    const {catagory,postDescription, postName,images,phoneNumber,discount,postId,personDoPostId,price,discountPeriod}=req.body;

    catagory.forEach((catagory)=>{
        async function get(){
            const imagesCreate=await post_catagory_model.create({catagory:catagory,catagory_for_postid:postId})
        } get()

    })

    images.forEach(({public_id,url})=>{
        async function get(){
            const imagesCreate=await post_images_model.create({public_id:public_id,url:url,image_for_postid:postId})
        } get()
    })

    const creat_post=await post_model.create({postDescription:postDescription,postName:postName,phoneNumber:phoneNumber,discount:discount,postId:postId,personDoPostId:personDoPostId,discountPeriod:discountPeriod,price:price})

    res.json(creat_post)
}
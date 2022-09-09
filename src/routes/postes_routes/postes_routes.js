const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE

const Create_post_controllers=require("../../controllers/postes-controllers/create-post");
router.post("/createpost",Create_post_controllers)

const Get_all_post=require("../../controllers/postes-controllers/get-allpostes");
router.get("/getpostes",Get_all_post)


const get_page_product=require("../../controllers/postes-controllers/get-Product");
router.get("/getproductpage/:data",get_page_product)



const likeOnpost=require("../../controllers/postes-controllers/comment-like-rate/like-on-post-controllers");
router.post("/likePost",likeOnpost)
const myAllLikePost=require("../../controllers/postes-controllers/comment-like-rate/getMy-likes");
router.get("/mylikes/:data",myAllLikePost)


const DeleteLikes=require("../../controllers/postes-controllers/comment-like-rate/deleteLikes");
router.get("/deleteLike/:data",DeleteLikes)


const Create_comment=require("../../controllers/postes-controllers/comment-like-rate/create-comment");
router.post("/createComment",Create_comment)


const getCaatagory=require("../../controllers/postes-controllers/getPostCatagory");
router.get("/getCatagory/:data",getCaatagory);


module.exports=router

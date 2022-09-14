const { TEXT, INTEGER } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

const  postes_model=database.define("posts",{
    postId:{
        type:TEXT,
        allowNull:false,
        primaryKey:true
    },
    postDescription:{
      type:TEXT,
    },
    postName:{
        type:STRING,
    },
    discount:{
      type:INTEGER
    },
    phoneNumber:{
      type:STRING,
    },
    discountPeriod:{
      type:STRING,
    },
    price:{
      type:INTEGER,
      defaultValue:0
    },
    rate:{
      type:INTEGER,
      defaultValue:0
    },
    personDoPostId:{
        type:STRING,
    }
})


//---------------------------------------------all relation on postes ------------------------------------//
const Post_like=require("../../model/postes-model/likeOnPsotes-model");

postes_model.hasMany(Post_like,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    sourceKey:"postId"
  })
  Post_like.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"post_liked_id",
    targetKey:"postId"
  })


  const catagory_model=require("../../model/postes-model/catagory-post");
  postes_model.hasMany(catagory_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"catagory_for_postid",
    sourceKey:"postId"
  })
  catagory_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"catagory_for_postid",
    targetKey:"postId"
  })


  const post_comment=require("../../model/postes-model/commentOnPostes-model");
  postes_model.hasMany(post_comment,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    sourceKey:"postId"
  })
  post_comment.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"commentOnPostId",
    targetKey:"postId"
  })


  const image_model=require("../../model/postes-model/images-post");

  postes_model.hasMany(image_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"image_for_postid",
    sourceKey:"postId"
  })
  image_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"image_for_postid",
    targetKey:"postId"
  })


  const basket_model=require("../../model/basket-check/basket-check");

  postes_model.hasMany(basket_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"product_sale_id",
    sourceKey:"postId"
  })
  basket_model.belongsTo(postes_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"product_sale_id",
    targetKey:"postId"
  })








module.exports=postes_model
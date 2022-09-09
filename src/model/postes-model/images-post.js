const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("imagespostes",{
    public_id:{
        type:STRING,
    },
    url:{
        type:TEXT,
    },
    image_for_postid:{
        type:TEXT,
    }
})



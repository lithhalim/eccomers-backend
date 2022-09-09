const { TEXT } = require("sequelize")
const { STRING } = require("sequelize")
const database=require("../../database/database")

module.exports=database.define("catagoreys",{
    catagory:{
        type:STRING,
    },
    catagory_for_postid:{
        type:TEXT,
    }
})



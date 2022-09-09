const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


const chateUser = database.define('chate-users', {
    User_Id:{
        type: TEXT,//String Varchar(3360)
    },
    FrendId: {
       type: TEXT,//String Varchar(3360)
    },
    Frend_Image: {
        type: TEXT,//String Varchar(3360)
    },
    Frend_Name: {
        type: STRING,//String Varchar(3360)
    }, 
    chatId:{
       type:TEXT,
    },
  }, {
    // Other model options go here
  });

   module.exports=chateUser

  const massage_model=require("../../model/chate-section/chate-massage");

  chateUser.hasMany(massage_model,{
    constraints: false,
    timestamps: false,
    foreignKey:"chatIdMassage",
    sourceKey:"chatId"
  })
  massage_model.belongsTo(chateUser,{
    constraints: false,
    timestamps: false,
    foreignKey:"chatIdMassage",
    targetKey:"chatId"
  })



  

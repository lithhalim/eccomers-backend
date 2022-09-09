const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


module.exports  = database.define('massagess', {
    text: {
      type: TEXT,//String Varchar(3360)
    },
    chatIdMassage:{
        type:TEXT,
    },
    sender_massageName: {
        type: TEXT,//String Varchar(3360)
      },
    sender_massageImage:{
          type:TEXT,
      },
    showmassage:{
      type:STRING,
      defaultValue:false
    }
  }, {
    // Other model options go here
  });

  

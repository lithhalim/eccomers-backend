const { TEXT } = require("sequelize");
const { STRING } = require("sequelize");
const database=require("../../database/database")


module.exports  = database.define('basktese', {
  amount: {
      type: TEXT,//String Varchar(3360)
    },
  payment_method:{
        type:TEXT,
    },
  status: {
        type: TEXT,//String Varchar(3360)
      },
  custmor:{
          type:TEXT,
      },
  product_sale_id:{
      type:STRING,
      defaultValue:false
    },
  price:{
        type:STRING,
      }
      ,
image:{
            type:STRING,
      }
      ,
Name_produce:{
            type:STRING,
      }
  }, {
    // Other model options go here
  });

  

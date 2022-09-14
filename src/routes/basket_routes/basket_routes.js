const express = require('express')
const router = express.Router();


const Add_Data_Basket=require("../../controllers/basket-controllers/add-data-to-basket");
router.post("/add-bascket",Add_Data_Basket)

const Get_All_Product_Data=require("../../controllers/basket-controllers/get_Data_User");
router.get('/ProductData/:data',Get_All_Product_Data)



module.exports=router

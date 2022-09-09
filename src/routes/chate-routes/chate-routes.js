const express = require('express')
const router = express.Router();



//ALL MEDILWARE FUNCTION ARE USE
const getFrendData=require("../../controllers/chate-controllers/get-frend-information");
const Addfrind=require("../../controllers/chate-controllers/add-to-chate");
const GetAllFrind=require("../../controllers/chate-controllers/getAllUser");
const Get_All_Massage=require("../../controllers/chate-controllers/get-All-Massages");

const getAllfrindId=require("../../controllers/chate-controllers/getAllfrindId");
//ALL ROUTES ARE USED
router.get("/FrendInformation/:data",getFrendData);
router.post("/addFrind",Addfrind);
router.get("/GetAllFrind/:data",GetAllFrind);
router.get("/getAllMassage/:data",Get_All_Massage);
router.get("/GetAllFrindid/:data",getAllfrindId);




module.exports=router

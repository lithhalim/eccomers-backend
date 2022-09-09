const Reguster=require("../../model/reguster_model/reguster_model");


module.exports=async(req,res)=>{
    const data=await Reguster.findAll(({
        where:{regusterid:req.params.data},
        attributes: {
            exclude: ['password', 'refreshtoken',"action","email","isOnline","gender","verification"]
        },
    
    }))
    res.json(data)
}
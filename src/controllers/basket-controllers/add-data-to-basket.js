const Bascket_model=require("../../model/basket-check/basket-check");

module.exports=async(req,res)=>{
    const {state,type}=req.body;

    if(type==="Add_Basket"){
        const {id,image,Name,price,catagoreys,quantity}=state.allProduct[0];
        const DataUse=await Bascket_model.create({
            amount:quantity,payment_method:"online"
            ,status:"Add Cart",custmor:state.fullName
            ,product_sale_id:id,price:price,
            image:image,Name_produce:Name
        })
    }

    if(type==="Remove_Basket"){
        const DataUse=await Bascket_model.update({
            status:"Remove From Cart"
        },{where:{product_sale_id:state}})

    }

}
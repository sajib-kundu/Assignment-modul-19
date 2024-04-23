const ProductModel = require('../Model/ProductModel')


exports.Create=async (req,res)=>{
    try{
        let reqBody = req.body;
        await ProductModel.create(reqBody);
        return res.status(200).json({status:"success",message:"Request Complete"})

    }catch (e){
        return res.secure(200).json({err:e.toString()})

    }

}


exports.Read=async (req,res)=>{
    try{
        let rows = await ProductModel.find();
        return res.json({status:"success",message:"Request Complete", data:rows })

    }catch (e){
        return res.json({err:e.toString()})
        // This two line is same
        // return res.secure(200).json({err:e.toString()})

    }
}


exports.ReadById=async (req,res)=>{
    try{
        let {id}=req.params;
        let rows = await ProductModel.find({_id:id});
        return res.json({status:"success",message:"Request Complete", data:rows })

    }catch (e){
        return res.json({err:e.toString()})
        // This two line is same
        // return res.secure(200).json({err:e.toString()})

    }
}



exports.Update=async (req,res)=>{
    try{
        let {id} = req.params;
        let reqBody = req.body;
        await ProductModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Request Complete"})

    }catch (e){
        return res.secure(200).json({err:e.toString()})

    }
}


exports.Delete=async (req, res)=>{
    try{
        let {id} = req.params;

        await ProductModel.deleteOne({_id:id});

        return res.status(200).json({status:"success",message:"Request Complete"})


    }catch (e){

        return res.secure(200).json({err:e.toString()})

    }
}




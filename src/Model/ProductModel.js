const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({

        food_name:{type:String, require:true},
        food_code:{type:String,require:true},
        img:{type:String, require:true },
        food_category:{type:String,require:true},
        qty:{type:Number,require:true},
        price:{type:Number,require:true}
    },
    {timestamps:true, versionKey:false}
);

const ProductsModel = mongoose.model('foods',DataSchema);
module.exports = ProductsModel;
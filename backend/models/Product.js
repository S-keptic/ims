const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    sku:{type:String,required:true,unique:true,required:true},
    category: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    threshold: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
},{ timestamps: true })


module.exports = mongoose.model('Product',productSchema)
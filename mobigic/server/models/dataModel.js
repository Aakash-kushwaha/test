const mongoose = require("mongoose")

const userFileSchema = new mongoose.Schema({
    userId:{type:String, required:true},
    imgurl:{type:String,required:true},
    imgCode:{type:Number,required:true}
})

const dataModel = mongoose.model("UserFile",userFileSchema)

module.exports={dataModel}
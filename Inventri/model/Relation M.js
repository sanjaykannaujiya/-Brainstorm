const mongoose =require('mongoose')
const Schema =mongoose.Schema
const relationSchema =new Schema({
   
    deviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'device',
        required:true,
     },
     SimId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sim',
        required:true,
     },

})
   
module.exports=mongoose.model("relation",relationSchema)
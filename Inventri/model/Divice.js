const mongoose =require('mongoose')
const Schema =mongoose.Schema
const deviceSchema =new Schema({
    imei:{
        type:String,
        unique:true,
        required:true,
    },
      serial:{
        type:String,
        unique:true,
        required:true,

      },
      model:{
        type:String,
        required:true,

      } ,
      manufacturer:{
        type:String,
        required:true,

      },
      Date_added:{
        type:String,
        required:true,
    }
   
    
      
     
})
module.exports=mongoose.model('Device',deviceSchema)
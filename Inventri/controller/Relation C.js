const User=require('../model/Relation M')
const Joi = require("joi")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
exports.adduser=async(req,res)=>{
  try{
      let{deviceId,SimId}=req.body
      const user=Joi.object({
        deviceId:Joi.string().required(),
        SimId:Joi.string().required(),
      })
         let result=user.validate(req.body)

         if(result.error){
             res.status(400).json(result.error.details[0].message)
             return ;

         }else{
           const exist = await User.exists({SimId:req.body.SimId});
           if(exist){
               return  res.status(400).json("This is relation ");          
           }else{             
            const alluser=new User({
              deviceId,SimId             
            })
           const saveuser =await alluser.save();
           res.status(200).json({message:"relation is between",saveuser}) 
         }   
       }
       }catch(err){
           res.status(500).json(err)
           console.log(err)
       }
   }
exports.alluser=async(req,res)=>{ 
    try{
        const{page,limit}=(req,query)
        const skip=(page-1)*10
        const allfind= await User.find().skip(skip).limit(limit)
        res.status(200).json({message:"this is relation",allfind})
    }catch(error){
        res.status(500).json(err)
    }
}
exports.updateuser=async(req,res)=>{
    try{
        const putuser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({massage:"this is reletion",putuser})
    }catch(error){
        res.status(500).json(error)
    }
 }
exports.deleteteam=async(req,res)=>{
    try{
        const deltuser= await User.findByIdAndDelete(req.params.id)
        res.status(200).json({massage:"this is relation",deltuser})

    }catch(error){
        res.status(500).json(error)
    }
}

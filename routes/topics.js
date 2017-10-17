const express=require('express');
const router=express.Router();
const Topic=require('../models/topic');
const passport=require('passport');

router.get('/all',(req,res,next)=>{
    Topic.getAllTopics((err,results)=>{
        if(err) {return res.json({success: false, msg: "Something went wrong!"});}
        return res.json({success:true, topics: results});
    });
})

module.exports=router;
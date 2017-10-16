const express=require('express');
const router=express.Router();
const MainTopic=require('../models/maintopic');


router.get('/all',(req,res,next)=>{
    MainTopic.getAllMainTopics((err,topics)=>{
        if(err) return res.json({success:false,msg:'cant get All MainTopics!'});
        res.json({success:true,topics:topics});
    });
})

module.exports=router;
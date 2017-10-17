const express=require('express');
const router=express.Router();
const Comment=require('../models/comment');
const passport=require('passport');



router.get('/specific/:post_id',(req,res,next)=>{
    
    Comment.getAllCommentsWithSpecificPost(req.params.post_id,(err,comments)=>{
        if(err) return res.json({success:false,msg:'Failed to get Comments'});
        res.json({success:true,comments:comments});
    })
})



module.exports=router;
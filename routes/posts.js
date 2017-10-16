const express=require('express');
const router=express.Router();
const Post=require('../models/post');


router.get('/:category_id',(req,res,next)=>{
    let category_id=req.params.category_id;
    Post.getAllPostWithSpecificCategory(category_id,(err,posts)=>{
        if(err){return res.json({success:false, msg:'Failed to get posts'})};
        res.json({success:true,posts:posts});
    })
})

router.get('/specific/:post_id',(req,res,next)=>{
    let post_id=req.params.post_id;
    Post.getContentPost(post_id,(err,post)=>{
        if(err){return res.json({success:false, msg:'Failed to get Content of post'})};
        res.json({success:true,post:post});
    })
})


module.exports=router;
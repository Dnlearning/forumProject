const express=require('express');
const router=express.Router();
const Category=require('../models/category');
const MainTopic=require('../models/maintopic');
const Post=require('../models/post');


router.post('/category',(req,res,next)=>{
    let newCategory=new Category({
        category:req.body.category,
        topic_id:req.body.topic_id,
        create_user:req.body.create_user,
        views: 10
    });
    Category.addCategory(newCategory,(err,result)=>{
        if(err) return res.json({success:false, msg:"failed to create Category"})
        res.json({success:true,msg:"Create category succesfully!"});
    });
})

router.post('/maintopic',(req,res,next)=>{
    let newTopic=new MainTopic({
        topic:req.body.topic
    });
    MainTopic.addMainTopic(newTopic,(err,result)=>{
        if(err) return res.json({success:false, msg:"failed to create Maintopic"})
        res.json({success:true,msg:"Create maintopic succesfully!"});
    });
})

router.post('/post',(req,res,next)=>{
    let newPost=new Post({
        title:req.body.title,
        body:req.body.body,
        views: 40,
        category_id: req.body.category_id,
        author_id:req.body.author_id
    });

    Post.addPost(newPost,(err,result)=>{
        if(err) return res.json({success:false, msg:"failed to create Post"})
        res.json({success:true,msg:"Create Post succesfully!"});
    });
})

module.exports=router;
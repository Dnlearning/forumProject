const express=require('express');
const router=express.Router();
const Post=require('../models/post');
const passport=require('passport');


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

router.get('/for/all',(req,res,next)=>{
    Post.getAllPosts((err,posts)=>{
        if(err) return res.json({success:false, msg: 'cant get posts'});
        res.json({success:true,posts:posts});
    })
});

router.get('/highest/views',(req,res,next)=>{
    Post.getHighestViewsPost((err,highestViews)=>{
        if(err) return res.json({success:false, msg: 'cant get highest Views Posts'});
        res.json({success:true,posts:highestViews});
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Post.deletePost(req.params.id,(err)=>{
        if(err) {return res.json({success:false,msg:'failed to delete'})}
        res.json({success:true,msg:"Deleted post!"});
    });
});

router.put('/update/:id',(req,res,next)=>{
    let newPost={
        title:req.body.title,
        body:req.body.body,
    }
    Post.updatePost(req.params.id,newPost,(err,updatedPost)=>{
        if(err) {return res.json({success:false,msg :'Failed to edit post'})}
        res.json({success:true,post:updatedPost});
    });
})
module.exports=router;
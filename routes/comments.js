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

router.delete('/delete/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let comment_id=req.params.id;
    let user=req.user;
    Comment.getContentCommentByid(comment_id,(err,comment)=>{
        if(err) {return res.json({success:false, msg:'Failed to get Content of comment'})}
        if((user.roles.includes('admin'))|| (user._id==comment.author_id)){
            Comment.deleteComment(comment_id,(err)=>{
                if(err) {return res.json({success:false,msg:'failed to comment'})}
                res.json({success:true,msg:"Deleted comment!"});
            });
        }else{
            res.redirect('/');
        }
    })
    
});

router.put('/update/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let comment_id=req.params.id;
    let user=req.user;
    let newComment={
        body:req.body.body,
    }
    Comment.getContentCommentByid(comment_id,(err,comment)=>{
        if(err){return res.json({success:false, msg:'Failed to get Content of post'})};
        if(comment.author_id==user._id){
            Comment.updateComment(comment_id,newComment,(err,updateComment)=>{
                if(err) {return res.json({success:false,msg :'Failed to edit post'})}
                res.json({success:true,comment:updateComment});
            });
        }else{
            res.redirect('/');
        }
    })    
})


module.exports=router;
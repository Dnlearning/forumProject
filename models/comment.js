const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const CommentSchema=mongoose.Schema({
    body:{
        type:String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    },
    author_id:{
        type:String,
        required:true
    },
    post_id:{
        type:String,
        required :true
    },
    userComment:{
        type:String,
        required:true
    }
});

const Comment=module.exports=mongoose.model('comments',CommentSchema);

module.exports.addComment=(newComment,callback)=>{
   newComment.save(callback);
}
module.exports.getAllCommentsWithSpecificPost=(post_id,callback)=>{
    Comment.find({post_id:post_id},callback).sort({_id:-1});
}
module.exports.deleteComment=(id,callback)=>{
    Comment.remove({_id:id},callback);
}
module.exports.getContentCommentByid=(id,callback)=>{
    Comment.findOne({_id:id},callback);
}
module.exports.updateComment=(id,newComment, callback)=>{
    Comment.findOneAndUpdate({_id:id},{$set:{body:newComment.body}},callback);
}
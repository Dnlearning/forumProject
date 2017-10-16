const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    views:{
        type:Number,
        default: 10
    },
    created_date:{
        type:Date,
        default:Date.now()
    },
    category_id:{
        type:String,
        required:true
    },
    author_id:{
        type:String,
        required:true
    }
});

const Post=module.exports=mongoose.model('posts',PostSchema);

module.exports.getAllPosts=(callback)=>{
    Post.find({},callback);
}

module.exports.addPost=(newPost,callback)=>{
    newPost.save(callback);
}

module.exports.getAllPostWithSpecificCategory=(category_id,callback)=>{
    Post.find({category_id:category_id},callback);
}

module.exports.getContentPost=(post_id,callback)=>{
    Post.find({_id:post_id},callback);
}

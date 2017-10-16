const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const TopicSchema=mongoose.Schema({
    topic:{
        type:String,
        required:true
    }
});

const Topic=module.exports=mongoose.model('topics',TopicSchema);

module.exports.getAllTopics=(callback)=>{
    Topic.find({},callback);
}



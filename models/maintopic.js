const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const MainTopicSchema=mongoose.Schema({
    topic:{
        type:String,
        required:true
    }
});

const MainTopic=module.exports=mongoose.model('maintopics',MainTopicSchema);

module.exports.getAllMainTopics=(callback)=>{
    MainTopic.find({},{_id:true,topic:true},callback);
}

module.exports.addMainTopic=(newTopic,callback)=>{
    newTopic.save(callback);
}


const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const CategorySchema=mongoose.Schema({
    category:{
        type:String,
        required: true
    },
    topic_id:{
        type: String,
        required: true
    },
    views:{
        type:Number,
        default: 10
    },
    create_user:{
        type:String,
        required :true
    }
});

const Category=module.exports=mongoose.model('categories',CategorySchema);

module.exports.getAllCategories=(callback)=>{
    Category.find({},callback).sort({_id:-1}).limit(30);
}
module.exports.getAllSpecificCategories=(topic_id,callback)=>{
    Category.find({topic_id:topic_id},callback);
}
module.exports.addCategory=(newCategory,callback)=>{
    newCategory.save(callback);
}

module.exports.getContentSpecificCategoryById=(category_id,callback)=>{
    Category.findOne({_id:category_id},callback);
}

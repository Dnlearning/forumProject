const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    
    roles:{
        type:Array,
        default:["user"]
    },
    created_date:{
        type:Date,
        default:Date.now()
    }
});

const User=module.exports=mongoose.model('users',UserSchema);

module.exports.getUserById=(id,callback)=>{
    User.findById(id,callback);
}

module.exports.getUserByUsernameOrEmail=(user,callback)=>{
    const query={$or:[{username:user.username}, {email:user.email}]};
    User.findOne(query,callback);
}

module.exports.getUserByUsername=(username,callback)=>{
    const query={username:username};
    User.findOne(query,callback);
}
module.exports.checkUserExist=(value,callback)=>{
    const query={$or:[{username:value}, {email:value}]};
    User.findOne(query,callback);
}

module.exports.addUser=(newUser,callback)=>{
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password, salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword=(candidatePassword ,hash, callback)=>{
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}


module.exports.getAllUsers=(username,callback)=>{
    User.find({username:{$nin:[username]}},{username:true, created_date:true, roles:true},callback).sort({_id:-1}).limit(30);
}

module.exports.getUserInfoById=(user_id,callback)=>{
    User.findOne({_id:user_id},{password:false},callback);
}

module.exports.updateInfo=(user_id,newRole,callback)=>{
    User.findOneAndUpdate({_id:user_id},{$set:{roles:newRole}},callback);
}
const express=require('express');
const router=express.Router();
const User=require('../models/user');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');

router.post('/register',(req,res,next)=>{
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        address:req.body.address
    })
    User.getUserByUsernameOrEmail(newUser,(err,result)=>{
        if(result) return res.json({success:false, msg:'username or email has already existed!'});
        User.addUser(newUser,(err,user)=>{
            if(err) res.json({success:false, msg:"falied to register User"});
            else res.json({success:true,msg:"User registered"});
        })
    })
})

router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({success:false, msg:"User Not Found!"});

        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign({data:user},config.secret,{
                    expiresIn:604800 //1 week
                });

                res.json({
                    success:true,
                    token: 'JWT '+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email,
                        username:user.username,
                        roles:user.roles
                    }
                });
            }else{
                return res.json({success:false,msg:"Wrong password"});
            }
        })
    })
})

router.get('/profile',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    res.json({user:req.user});
})

router.get('/all/:username',passport.authenticate('jwt',{session:false}),(req,res)=>{
    if(req.params.username){
        User.getAllUsers(req.params.username,(err,result)=>{
            if(err) return res.json({success:false,msg:"Something wrong with DB"});
            return res.json(result);
        })
    }
});



router.get('/:value',(req,res,next)=>{
    if(req.params.value){
        User.checkUserExist(req.params.value,(err,result)=>{
        if(result) return res.json({success:false, msg:"username already exist"});
        return res.json({success:true,msg:"you can use this username"});
        })
    }
})



router.get('/',(req,res,next)=>{
    res.json({invalid:'true'});
})

router.get('/infos/:user_id',(req,res,next)=>{
    let user_id=req.params.user_id;
    User.getUserInfoById(user_id,(err,user_info)=>{
        if(err) return res.json({success:false,msg:'Cant get your infor'});
        if(user_info.length==0){return res.json({success:false,msg:'No match any User'});}
        res.json({success:true,user_info:user_info})
    });
});



module.exports=router;
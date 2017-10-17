const express=require('express');
const router=express.Router();
const Category=require('../models/category');
const passport=require('passport');



router.get('/all',(req,res,next)=>{
    Category.getAllCategories((err,results)=>{
        if(err) {return res.json({success: false, msg: "Something went wrong!"});}
        return res.json({success:true, topics: results});
    });
})

router.get('/:topic_id',(req,res,next)=>{
    let topic_id=req.params.topic_id;
    Category.getAllSpecificCategories(topic_id,(err,categories)=>{
        if(err) return res.json({success:false,msg:"Something wrong with your topic_id"});
        if(categories.length==0){
            return res.json({success:false, msg:'topic_id doesnt match'});
        }
        res.json({success:true,categories:categories});
    })
})

router.get('/specific/:category_id',(req,res,next)=>{
    let category_id=req.params.category_id;
    Category.getContentSpecificCategoryById(category_id,(err,category)=>{
        if(err){return res.json({success:false,msg:'failed to get Content of Category'})}
        res.json({success:true, category:category});
    })
});

module.exports=router;
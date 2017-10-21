const express=require('express');
const router=express.Router();
const passport=require('passport');

const multer=require('multer');


const storage=multer.diskStorage({
    destination:'./public/uploads',
    filename: function(req,res,cb){
        cb(null,file.fieldname + '-'+Date.now() + path.extname(file.originalname));
    }
})

// Init Upload
const upload=multer({
    storage:storage
}).single('fileInput');


router.post('/:user_id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json(req.body.user_id);
})

module.exports=router;
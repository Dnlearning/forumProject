const express=require('express');
const router=express.Router();
const passport=require('passport');
const keys=require('../config/key.stripe');
const stripe=require('stripe')(keys.stripeSecretKey);
const Checkout=require('../models/checkout');

router.get('/stripe',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({publishKey:keys.stripePublishableKey});
})

router.post('/stripe',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let newCheckout=new Checkout({
        user_buyer_id:req.body.user.id,
        method:'stripe',
        email_checkout:req.body.token.email,
        amount:req.body.amount,
        desc:req.body.desc
    });
    stripe.customers.create({
        email:req.body.token.email,
        source: req.body.token.id
    })
    .then(customer=>stripe.charges.create({
        amount:req.body.amount,
        description: "you bought " + req.body.desc,
        currency:'usd',
        customer:customer.id
    }))
    .then(charge=>{
        Checkout.addNewCheckout(newCheckout,(err,result)=>{
            if(err) return res.json({success:false,msg:'failed to add to database'});
            res.json({success:true, bill:result});
        });
    });
})


module.exports=router;
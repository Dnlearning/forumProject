const express=require('express');
const router=express.Router();
const passport=require('passport');
const keys=require('../config/key.stripe');
const stripe=require('stripe')(keys.stripeSecretKey);
const Checkout=require('../models/checkout');
const paypal=require('paypal-rest-sdk');



router.get('/stripe',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({publishKey:keys.stripePublishableKey});
})
router.post('/paypal',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let user=req.body.user;
    let items=[];
    let products=req.body.products;
    
    for(let i=0;i<products.length;i++){
        
    }

    console.log(user);
    console.log(products);
    const price=25;
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/api/checkout/success",
            "cancel_url": "http://localhost:3000/api/checkout/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Test payment with paypal",
                    "sku": "001",
                    "price": price,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00",
                // "details": {
                //     "subtotal": "5",
                //     "tax": "1",
                //     "shipping": "1"
                // }
            },
            
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
            res.json({success:false,msg:'something wrong with payment!'});
        } else {
            for(let i=0;i<payment.links.length;i++){
                if(payment.links[i].rel==='approval_url'){
                    res.json({success:true,link:payment.links[i].href});
                }
            }
        }
    });

});

router.get('/success',(req,res,next)=>{
    const payerId=req.query.PayerID;
    const paymentId=req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.send(payment);
        }
    });

});

router.get('/cancel',(req,res,next)=>{
    res.send('Cancel');
});


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
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
    let totalPrice=0;
    let desc="";
    for(let i=0;i<products.length;i++){
        let newproduct={
            name:products[i].quantity+ " "+products[i].name,
            sku:user.id,
            price: products[i].price,
            currency: "USD",
            quantity: products[i].quantity
        }
        items.push(newproduct);
        totalPrice+=products[i].quantity*products[i].price;
        desc+=products[i].quantity+" "+ products[i].name+" "
    }

    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "https://dnguyenlearning.herokuapp.com/api/checkout/success",
            "cancel_url": "https://dnguyenlearning.herokuapp.com/api/checkout/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": items
            },
            "amount": {
                "currency": "USD",
                "total": totalPrice,
                // "details": {
                //     "subtotal": "5",
                //     "tax": "1",
                //     "shipping": "1"
                // }
            },
            
            "description": desc
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
    let totalPrice=0;
    let payer_id='';
    let payer_email='';
    let desc='';
    paypal.payment.get(paymentId, function (error, payment) {
        if (error) {
            res.json({success:false, msg:'something wrong with getPaymentId!'});
            throw error;
        } else {
            totalPrice=payment.transactions[0].amount.total;
            desc=payment.transactions[0].description;
            payer_id=payment.transactions[0].item_list.items[0].sku;
            payer_email=payment.payer.payer_info.email;
            const execute_payment_json = {
                "payer_id": payerId,
                "transactions": [{
                    "amount": {
                        "currency": "USD",
                        "total":   totalPrice
                    }
                }]
            };
            paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
                if (error) {
                    res.json({success:false, msg:'execute paypal error'});
                    throw error;
                } else {
                    let newCheckout=new Checkout({
                        user_buyer_id:payer_id,
                        method:'paypal',
                        email_checkout:payer_email,
                        amount:totalPrice,
                        desc:desc
                    });
                    Checkout.addNewCheckout(newCheckout,(err,result)=>{
                        if(err) return res.json({success:false,msg:'failed to add to database'});
                        res.redirect('/checkout/success');
                    });
                }
            });
        }
    });

});

router.get('/cancel',(req,res,next)=>{
    res.redirect('/');
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
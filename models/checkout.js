const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const CheckoutSchema=mongoose.Schema({
    user_buyer_id:{
        type:String,
        required: true
    },
    method:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    email_checkout:{
        type:String,
        required :true
    }
});

const Checkout=module.exports=mongoose.model('checkouts',CheckoutSchema);


module.exports.addNewCheckout=(newCheckout,callback)=>{
    newCheckout.save(callback);
}


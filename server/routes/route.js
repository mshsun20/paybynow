const express = require('express')
const router = express.Router()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET)

router.route('/').get((req, res) => {
    res.json({message:`Server is Live...`, statuscode:200})
})

router.route('/api/create-checkout-session').post(async (req, res) => {
    let lineItems=[]
    const {product} = req.body
    // console.log(product)

    // const lineItems = products.map((product)=>({
    //     price_data:{
    //         currency:"inr",
    //         product_data:{
    //             name:product.dish,
    //             images:[product.imgdata]
    //         },
    //         unit_amount:product.price * 100,
    //     },
    //     quantity:product.qnty
    // }));

    lineItems.push({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:(parseInt(product.qnty)+1)
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3600/sucess",
        cancel_url:"http://localhost:3600/cancel",
    });

    res.json({id:session.id})
})

module.exports = router
const express = require('express');
const cors = require('cors');
const { default: CartItems } = require('../frontend/src/Components/CartItems/CartItems');
const stripe = require('stripe')('sk_test_51PAs1USIgNrHBg6fxWcozYsI2BhZy2IugKS735yYTCfOFURHdcdZIgC73jroYJlGS40uYZkjqWRJTjy66X4BN8o100fKHWL9kh');

const app = express();

app.use(cors());

app.get('/',(req, res)=>{
    res.send('Server is Running');
});
app.listen(9000,()=>{
    console.log("Server is Running on port 9000");
});
app.post('/payment', async (req, res)=>{
    const product = await stripe.products.create({
        name: 'shampoo',
        type:'hair'
    });
    if(product){
        var price = await stripe.prices.create({
            product:`${product.id}`,
            unit_amount:1000,
            currency:'inr',
        });
    }
    if(price.id){
        var session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:[
                {
                    price: `${price.id}`,
                }
                  
            ],
            mode:'payment',
            success_url:'http://localhost:9000/success',
            cancel_url:'http://localhost:9000/cancel',
            
        })
    }

    response.json(session)
});
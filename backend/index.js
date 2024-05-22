const port= 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PAs1USIgNrHBg6fxWcozYsI2BhZy2IugKS735yYTCfOFURHdcdZIgC73jroYJlGS40uYZkjqWRJTjy66X4BN8o100fKHWL9kh');

app.use(express.json());
app.use(cors());

//Database connection to MongoDB
mongoose.connect("mongodb+srv://201430116078itvini:vini123456789@cluster0.cakkm36.mongodb.net/e-commerce")

//API Creation

app.get("/",(req,res)=>{
res.send("Express app is running");
})

//Image Storage Engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({storage:storage});

//creating upload endpoint for images
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})


//schema for creating products
const Product = mongoose.model('Product',{
  id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  new_price:{
    type:Number,
    required:true,
  },
  old_price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  available:{
    type:Boolean,
    default:true,
  }
})


app.post('/addproduct',async (req,res)=>{
  let products = await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else{
    id = 1;
  }
   const product = new Product({
    id:id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
   });
   console.log(product);
   await product.save();
   console.log('Product saved');
   res.json({
     success:true,
     name:req.body.name,
   })
})

//creating api for deleting product
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log('Product deleted');
  res.json({
    success:true,
    name:req.body.name,
  })
})

//creating api for getting product
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
})

//Schema creating for user model
const Users = mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now,
  },
  cartData:{
    type:Object,
  }
})

//Creating Endpoint for registering the user
app.post('/signup',async (req, res) => {
  let check = await Users.findOne({email: req.body.email});
  if(check){
    return res.status(400).json({success:false, errors:"User already registered"});
  }
  let cart = {};
  for(let i = 0; i < 300; i++){
    cart[i]=0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password:req.body.password,
    cartData:cart,
  })
  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }
  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true, token})
})

//Creating endpoint for user login
app.post('/login',async (req, res) => {
  let user = await Users.findOne({email:req.body.email});
  if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom');
      res.json({success:true, token});
    }
    else{
      res.json({success:false,errors:"Wrong password"});
    }
  }
  else{
    res.json({success:false,errors:"Wrong email id"});
  }
})

////////////////////////////////////////////////////////////////////
//creating endpoint for new collection data
app.get('/newcollection',async(req,res)=>{
 let products = await Product.find({});
 let newcollection = products.slice(1).slice(-8);
 console.log("New Collection Fetched ");
 res.send(newcollection);
})
////////////////////////////////////////////////////////////////////

//creating endpoint for home hairs section 
// app.get('/hair',async(req,res)=>{
//   let products = await Product.find({category: 'hair'});
//   let hair = products.slice(0,4);
//   console.log("Hair Fetched ");
//   res.send(hair);
// })

//creating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if(!token){
    return res.status(401).send({errors:"Please authenticate using right login details"})
  }
  else{
    try{
      const data = jwt.verify(token,'secret_ecom');
      req.user = data.user;
      next();
    }
    catch (error){
      res.status(401).send({errors:"Please authenticate using right login details"})
    }
  }
}

// creating endpoint for adding products in cartdata
app.post('/addtocart', fetchUser, async(req, res)=>{
  console.log("Added",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Successfully added")
})

//creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
  console.log("removed",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  if( userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Removed product")
})

//creating endpoint to get cartdata
app.post('/getcart', fetchUser, async (req, res) => {
  console.log("GetCart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})


app.post('/payment', async(req,res)=>{
  const { totalprice, email, publishableKey } = req.body;

  const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
          price_data: {
              currency: 'usd',
              product_data: {
                  name: 'BUSYSTORE', 
              },
              unit_amount: totalprice * 100, 
          },
          quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:5000/success', 
      cancel_url: 'http://localhost:5000/cancel', 
      customer_email: email, 
      metadata: {
          publisher_key: publishableKey, 
      }
  });
  res.redirect(session.url);
})


app.listen(port,(error)=>{
      if(!error)
      {
        console.log('Server is running on port' +port)
      }
      else
      {
        console.log("Error : "+error)
      }
})





// const express = require('express')
// const app = express();
// const mongoose = require('mongoose');


// mongoose.connect('mongodb://127.0.0.1:27017/React').then(()=>{
//     console.log('database connect');
// })

// let schema = new mongoose.Schema({
//     name:{
//         type:String
//     },
//     email:{
//         type:String
//     },
//     password:{
//         type:String
//     }
// })

// let model = mongoose.model("signin",schema)


// app.set('view engine','ejs')
// app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res)=>{
//     res.render('signup')
// })
// app.get('/login',(req,res)=>{
//     res.render('login')
// })

// app.post('/signup',async(req,res)=>{
//   try {
//     const {name,email,password} = req.body;

//     const user = await new model({name,email,password})
//     await user.save();
//     res.redirect('/login')
//   } catch (error) {
//     console.log(error);
//   }
// })

// app.post('/login',async(req,res)=>{
//     const {email,password} = req.body;

//     const user = await model.findOne({email});

//     if(!user){
//         res.send('email not found ')
//     }

//     if(user.password  !== password){

//          res.send('wrong password');
//     }

//     res.redirect('./shop')

// })
// app.get('/shop',(req,res)=>{
//     res.render('shop.jsx')
// })

// app.listen(4000,()=>{
//     console.log('connected');
// })
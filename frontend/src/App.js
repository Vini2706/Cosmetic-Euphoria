
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import hair_banner from './Components/Assets/images/banner/Hairs_banner.avif';
import skin_banner from './Components/Assets/images/banner/Skin_banner.avif';
import organic_banner from './Components/Assets/images/banner/Organic_banner.avif';
import Signup from './Pages/Signup';
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
import HelpAndSupport from './Components/HelpAndSupport/HelpAndSupport'
import FAQ from './Components/FAQ/FAQ'




function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/hairs' element={<ShopCategory banner={hair_banner} category='hairs'/>} />
          <Route path='/skin' element={<ShopCategory banner={skin_banner} category='skin'/>} />
          <Route path='/organic' element={<ShopCategory banner={organic_banner} category='organic'/>} />

          <Route path='/product' element={<Product/>} >
            <Route path=':productId' element={<Product/>} />
          </Route>

          <Route path='/cart' element={<Cart/>} />
          <Route path='login' element={<LoginSignup/>} />
          {/* <Route path='signup' element={<Signup/>} /> */}
          <Route path='aboutus' element={<AboutUs/>} />
          <Route path='contactus' element={<ContactUs/>} />
          <Route path='helpandsupport' element={<HelpAndSupport/>} />
          <Route path='faqs' element={<FAQ/>} />
        </Routes>
        {/* <LoginSignup /> */}
        <Footer/>
        
       </BrowserRouter>
    </div>
  );
}

export default App;

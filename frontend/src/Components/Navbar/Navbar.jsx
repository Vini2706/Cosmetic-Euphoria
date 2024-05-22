import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/Cosmetic_Euphoria.png'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);

  return (
  
    <div className='navbar'>
      <div className="nav-logo">
      <Link to={'/'}><img src={logo} alt='logo' height={'80px'} width={'100%'} /></Link>
      </div>

      <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("hairs")}}> <Link style={{textDecoration:'none'}} to='/hairs'>Hairs</Link> {menu==="hairs"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("skin")}}> <Link style={{textDecoration:'none'}} to='/skin'>Skin</Link> {menu==="skin"?<hr/>:<></>} </li>
      <li onClick={()=>{setMenu("organic")}}> <Link style={{textDecoration:'none'}} to='/organic'>Organics</Link> {menu==="organic"?<hr/>:<></>} </li>
      </ul>

      <div className='nav-login-cart'>
      {localStorage.getItem('auth-token') ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>: <Link to='/login'><button>Login</button></Link> }
           
           <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>

           <div className='nav-cart-count'>{getTotalCartItems()}</div>
     </div>

    </div>
   
  )
}

export default Navbar

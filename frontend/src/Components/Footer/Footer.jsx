import React from 'react'
import './Footer.css'
import logo from '../Assets/Cosmetic_Euphoria.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <Link to={'/'}><img src={logo} alt='logo' style={{height:'100px', width:'90%'}}/></Link>
        {/* <p>Cosmetic Euphoria</p> */}
      </div>

      <ul className='footer-links'>
      
      <li><Link to='/aboutus' style={{textDecoration:"none"}}>About Us</Link></li>
      <li><Link to='/contactus' style={{textDecoration:"none"}}>Contact Us</Link></li>
      <li><Link to='/helpandsupport'style={{textDecoration:"none"}}>Help & Support</Link></li>
      <li><Link to='/faqs'style={{textDecoration:"none"}}>FAQ's</Link></li>

     {/* <li to='/aboutus'>About Us</li>
      <li>Contact Us</li>
      <li>Help & Support</li>
      <li>FAQ's</li> */}

      </ul>
      <div className='footer-social-icon'>

        <div className='footer-icons-container'>
         <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='footer-icons-container'>
        <i class="fa-brands fa-pinterest"></i>
        </div>
        <div className='footer-icons-container'>
        <i class="fa-brands fa-facebook"></i>
        </div>
        
    </div>

        <div className='footer-copyright'>
            <hr/>
            <p>Copyright © 2024 Cosmetic Euphoria</p>
        </div>
      
    </div>
  )
}

export default Footer



       
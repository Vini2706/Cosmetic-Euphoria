import React from 'react'
import './Navbar/Navbar.css'
import navlogo from '../../src/assets/Cosmetic_Euphoria.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt='' className='nav-logo'  height={'80px'} />
      <h3>Admin Panel</h3>
      <div className='nav-profile'>
      <i class="fa-solid fa-user-large"></i>&nbsp;&nbsp;
      <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  )
}

export default Navbar
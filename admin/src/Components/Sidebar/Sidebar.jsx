import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <Link to={'/addproduct'} style={{textDecoration:'none', color:'black'} }>
      <div className='sidebar-item'>
      <i class="fa-solid fa-file-circle-plus" style={{color:'orange'}}></i>
      <p>Add Product</p>
      </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration:'none', color:'black'}}>
      <div className='sidebar-item'>
      <i class="fa-solid fa-file-lines" style={{color:'Blue'}}> </i>
      <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar

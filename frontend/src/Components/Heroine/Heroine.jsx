import React from 'react'
import './Heroine.css'
import { Link, Route, Routes } from 'react-router-dom'

const Heroine = () => {
  return (
    <div className='heroine'>
    <img src={"./pink-background.avif"} width={'100%'} height={'450px'}></img>
       <div className='heroine-left'>
         <h2>NEW ARRIVALS</h2>
         <div>
            <div className='heroine-hand-icon'>
                <p>new</p>
                <img src='./Handwave.jpg' height={'60px'}></img>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
         </div>
        
         <div className='heroine-latest-btn'>
          <Link to='/hairs'>Latest Collection</Link>
          <i class="fa-solid fa-arrow-right"></i>
         </div>
      </div>

      <div className='heroine-right'>
         {/* <img src={"./pink-background.avif"} ></img> */}
      </div>

    </div>
  )
}

export default Heroine

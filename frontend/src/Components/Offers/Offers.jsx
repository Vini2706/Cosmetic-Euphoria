import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/images/banner/64.png'

const Offers = () => {
  return (
    <div className='offers'>
    <img src={exclusive_image} alt='' width={'1000px'} height={'450px'} />
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>BestSellers</p>
        <button>Check Now</button>
      </div>
     
    </div>
  )
}

export default Offers

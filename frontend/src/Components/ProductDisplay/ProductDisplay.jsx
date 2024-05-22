import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.png'
import star_dull_icon from '../Assets/rating.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
         <div className='productdisplay-img-list'>
           <img src={product.image} alt='' />
           <img src={product.image} alt='' />
           <img src={product.image} alt='' />
           <img src={product.image} alt='' />
         </div>
         <div className='productdisplay-img'>
           <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-stars'>
            <img src={star_icon} alt='' height={'20px'}/>
            <img src={star_icon} alt='' height={'20px'}/>
            <img src={star_icon} alt='' height={'20px'}/>
            <img src={star_icon} alt='' height={'20px'}/>
            <img src={star_dull_icon} alt='' height={'20px'}/>
            <p>(122)</p>
           </div>
           <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-price-old'>₹{product.old_price}</div>
            <div className='productdisplay-right-price-new'>₹{product.new_price}</div>
          </div>
          <div className='productdisplay-right-description'>Lorem ipsum cnuibc jenc wrv.</div>
          <div className='productdisplay-right-size'>
            <h1>Skin Type</h1>
            <div className='productdisplay-right-sizes'>
              <div>Oily</div>
              <div>Dry</div>
              <div>All type of skin</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}} >Add to Cart</button>
          <p className='productdisplay-right-category'><span>Category : </span>Hairs, Straightner, Shampoo, Serums</p>
          <p className='productdisplay-right-category'><span>Tags : </span>Trending,  </p>
      </div>
    </div>
  )
}

export default ProductDisplay

import React from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import item from '../Components/Item/Item'
import { Link } from 'react-router-dom'


const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' width={'100%'} />
     
      <img src={props.image} alt='' /> 
      <div className='shopcategory-indexSort'>
       <p>
        <span>Showing 1-5</span> out of all products
       </p>
       {/* <div className='shopcategory-sort'>
        Sort by <i class="fa-solid fa-circle-chevron-down"></i>
       </div> */}
      </div>
      <div className='shopcategory-products'>
      
      {all_product.map((item,i) =>{
        if(props.category===item.category){
         return (
          <div key={item.id}>
          <Link to={`/product/${item.id}`}>
           <img src={item.image} style={{height:'200px',width:'200px'}}/>
          </Link>
           <h4>{item.name}</h4>
           <h5>₹{item.new_price}</h5>
           <h5>₹{item.old_price}</h5>
         </div>
            )
          }
          else{return null}
      })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory

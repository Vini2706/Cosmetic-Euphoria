import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {data_product.map((item,i)=>{
            <div key={item.id}>
           <img src={item.image} style={{height:'200px',width:'200px'}}/>
           <h4>{item.name}</h4>
          <h5>₹{item.new_price}</h5>
           <h5>₹{item.old_price}</h5>
        </div>

        {/* return <item key={i} id={item.id} name={item.name}
         image={item.image } new_price={item.new_price} old_price={item.old_price} />; */}
        })}
      </div>
    </div>
  )
}

export default RelatedProducts

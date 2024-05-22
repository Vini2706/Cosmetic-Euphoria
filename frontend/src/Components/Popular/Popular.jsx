import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
// import { data_product } from '../Assets/data';
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>Hairs </h1>
      <hr />
      <div className='popular-item'>

       {/* {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name}
         image={item.image } new_price={item.new_price} old_price={item.old_price} />;
       })} */}

       {data_product.map((item)=>(
        <div key={item.id}>
        <img src={item.image} style={{height:'200px',width:'200px'}}/>
        <h4>{item.name}</h4>
        <h5>₹{item.new_price}</h5>
        <h5>₹{item.old_price}</h5>
      </div>
       ))}
      </div>
    </div>
  )
}

export default Popular

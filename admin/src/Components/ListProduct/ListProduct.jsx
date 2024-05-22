import React from 'react'
import './ListProduct.css'
import { useState } from 'react'
import { useEffect } from 'react';
import remove_icon from '../../assets/trash-bin.png'

const ListProduct = () => {

  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product =async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }
  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className='listproduct-allproducts'>
        <hr/>
        {allProducts.map((product,index)=>{
           return <> <div key={index} className='listproduct-format-main listproduct-format'>
            <img src={product.image} className='listproduct-product-image'/>
            <p>{product.name}</p>
            <p>₹{product.old_price}</p>
            <p>₹{product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={remove_icon} alt='trash' className='listproduct-remove-icon' height={'18px'}/>
            {/* <box-icon type='solid' name='trash-alt'className='listproduct-remove-icon'></box-icon> */}
           </div>
           <hr/>
           </>
        })}
      </div>
    </div>
  
  )
}

export default ListProduct

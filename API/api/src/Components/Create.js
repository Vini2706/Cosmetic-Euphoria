import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [productname,SetProductName] = useState('');
    const [category,SetCategory] = useState('');
    const [quantity,SetQuantity] = useState('');
    const [price,SetPrice] = useState('');
    const [image,SetImage] = useState('');
    const navigation = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://661cbf7ee7b95ad7fa6afd8d.mockapi.io/Cosmetic_Euphoria',{
          e_productName:productname ,
          e_category: category,
          e_quantity: quantity,
          e_price: price,
          e_image: image,
        })
        .then(()=>{
            navigation('/')
        })
    }
  return (
    <div>
      <form>
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" required onChange={(e)=>SetProductName(e.target.value)}/><br/><br/>
    
        <label for="category">Category:</label>
        <select id="category" name="category" onChange={(e)=>SetCategory(e.target.value)}>
            <option value="hair">Hair</option>
            <option value="skin">Skin</option>
            <option value="organic">Organic</option>
        </select><br/><br/>
        
        <label for="productImage">Product Image:</label>
        <input type="file" id="productImage" name="productImage" accept="image/*" required onChange={(e)=>SetImage(e.target.value)}/><br/><br/>
        
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" required onChange={(e)=>SetQuantity(e.target.value)}/><br/><br/>
        
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" min="0" step="0.01" required onChange={(e)=>SetPrice(e.target.value)}/><br/><br/>
        
        <input type="submit" value="Submit" onClick={handleSubmit}/>
    </form>
    </div>
  )
}

export default Create

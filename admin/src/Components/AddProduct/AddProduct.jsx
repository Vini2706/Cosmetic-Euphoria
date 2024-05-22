import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/cloud-computing.png'
import { useState } from 'react'

const AddProduct = () => {

  const [image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
    name:'',
    image:'',
    category:'hairs',
    new_price:'',
    old_price:''
  });

  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }
  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
  }

  const Add_Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers: {
        Accept: 'application/json',
      },
      body:formData,
  }).then((resp)=> resp.json().then((data)=>{responseData= data}))
  
  if(responseData.success)
  {
       product.image =responseData.image_url;
       console.log(product);
       await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(product),
       }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert('Successfully Product added'):alert('Failed to add product')
       })
  }

}




  return (
    <div className='add-product'>

      <div className='addproduct-itemfield'>
        <p>Product Title :</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Product Name'/>
      </div>

    <div className='addproduct-price'>
      <div className='addproduct-itemfield'>
        <p>Price :</p>
        <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Original price'/>
        </div>

        <div className='addproduct-itemfield'>
        <p>Offer Price : </p>
        <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Offer Price'/>
        </div>
    </div>

    <div className='addproduct-itemfield'>
        <p>Product Category : </p>
        <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector'>
          <option value='hair'>Hairs</option>
          <option value='skin'>Skin</option>
          <option value='organic'>Organic</option>
        </select>
    </div>

    <div className='addproduct-itemfield'>
       <label htmlFor='file-input'>
       {/* <i class="fa-solid fa-cloud-arrow-up"></i> */}
       <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' height={'60px'}/>
       </label>
       <input onChange={imageHandler} type='file' id='file-input' name='image' hidden/>
    </div>

    <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
  </div>
  )
}

export default AddProduct

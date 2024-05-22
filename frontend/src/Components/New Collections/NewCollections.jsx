import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/NewCollection'

const NewCollections = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
   .then((response)=>response.json())
   .then((data)=>setNew_collection(data));
  },[])
  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
    
      <div className='collections'>
        {new_collection.map((item,i) => (
          <div key={item.id}>
            <a href={`/product/${item.id}`}><img src={item.image} style={{ height: '200px', width: '200px' }} alt='image' /></a>
            <h4>{item.name}</h4>
            <h5>₹{item.new_price}</h5>
            <h5>₹{item.old_price}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewCollections
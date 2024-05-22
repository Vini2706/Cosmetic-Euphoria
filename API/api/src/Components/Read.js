import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Read() {
    const [data,SetData] = useState([])

    function MyFunction() {
        axios.get('https://661cbf7ee7b95ad7fa6afd8d.mockapi.io/Cosmetic_Euphoria')
        .then((response)=>{
            SetData(response.data)
        })
    }
    const handleDelete =(id)=>{
        axios.delete(`https://661cbf7ee7b95ad7fa6afd8d.mockapi.io/Cosmetic_Euphoria/${id}`)
        .then(()=>{
            MyFunction()
        })
    }

    useEffect(()=>{
        MyFunction()
    },[])

    const storeData = (id,productname,category,quantity,price,image)=>{
        localStorage.setItem('id',id)
        localStorage.setItem('productname',productname)
        localStorage.setItem('category',category)
        localStorage.setItem('quantity',quantity)
        localStorage.setItem('price',price)
        
    }
  return (
    <div>

      <Link to='/create'><button>Add New Data</button></Link>

<table>
  <thead>
      <tr>
          <th>Id</th>
          <th> Product Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Price</th>
          
          <th>Edit</th>
          <th>Delete</th>
      </tr>
  </thead>
  <tbody>
      {data.map((item)=>(
          <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.e_productName}</td>
              <td>{item.e_category}</td>
              <td>{item.e_quantity}</td>
              <td>{item.e_price}</td>
           
              <Link to='/Update'>
              <td><button onClick={()=>storeData(item.id,item.e_productName,item.e_category,item.e_quantity,item.e_price)}>Edit</button></td>
              </Link>
              <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
          </tr>
      ))}
  </tbody>
</table>
    </div>
  )
}

export default Read

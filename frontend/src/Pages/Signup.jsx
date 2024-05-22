import React from 'react'
import "./CSS/Signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div className='loginsignup'>
        <div className='loginsignup-container'>
          <h1>Sign Up</h1>
          <form method="post" action="/signin">
            <div className='loginsignup-fields'>
              <input type='text' placeholder='Enter Name'/>
              <input type='email' placeholder='Email Address'/>
              <input type='password' placeholder='Password'/>
            </div>
            <button>Continue</button>
            </form>
            <div className='loginsignup-agree'>
              <input type='checkbox' name='' id=''/>
              <span> I agree to the terms and conditions</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

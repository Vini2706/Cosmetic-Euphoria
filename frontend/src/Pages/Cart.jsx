import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51PAs1USIgNrHBg6fgAvN3aUSKOz9bUp4WKHe2TeKv6xXDs8BGgVDcLaFZWJGowa4Vs4Te2hc6RIwdx2Cn0Ub46BU00KYKLe5vI');


const Cart = () => {
  return (
    <div>
    
    <Elements stripe={stripePromise}>
    <CartItems/>
    </Elements>
     
    </div>
  )
}

export default Cart

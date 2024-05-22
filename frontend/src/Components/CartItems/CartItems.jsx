// import React, { useContext, useEffect, useState } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import { useHistory } from 'react-router-dom';
// import { useStripe } from '@stripe/react-stripe-js';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
//   const history = useHistory();

//   const handleIncrement = (productId) => {
//     addToCart(productId)
//   };

//   const handleDecrement = (productId) => {
//     removeFromCart(productId)
//   };

//   const handleCheckout = async () => {
//     try {
//       const response = await fetch('/api/create-checkout-session', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           totalprice: getTotalCartAmount(),
//           email: 'user@example.com', // Replace with actual email
//           publishableKey: 'pk_test_51PAs1USIgNrHBg6fgAvN3aUSKOz9bUp4WKHe2TeKv6zzzzxXDs8BGgVDcLaFZWJGowa4Vs4Te2hc6RIwdx2Cn0Ub46BU00KYKLe5vI', // Replace with your Stripe publishable key
//         }),
//       });
//       const session = await response.json();
//       if (session.url) {
//         window.location.href = session.url;
//       } else {
//         console.error('Error creating checkout session');
//       }
//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//     }
//   };

//   return (
//     <div className='cartitems'>
//       <div className='cartitems-format-main'>
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         return (
//           <div key={e.id}>
//             {cartItems[e.id] > 0 && (
//               <div className='cartitems-format cartitems-format-main'>
//                 <img src={e.image} alt='' className='carticon-product-icon' />
//                 <p>{e.name}</p>
//                 <p>₹{e.new_price}</p>
//                 <div>
//                   <button onClick={() => handleDecrement(e.id)}>-</button>
//                   <span className='cartitems-quantity'> {cartItems[e.id]} </span>
//                   <button onClick={() => handleIncrement(e.id)}>+</button>
//                 </div>
//                 <p>₹{e.new_price * cartItems[e.id]}</p>
//                 <i className="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => { removeFromCart(e.id) }}></i>
//               </div>
//             )}
//             <hr />
//           </div>
//         );
//       })}
//       <div className='cartitems-down'>
//         <div className='cartitems-total'>
//           <h1>Cart Totals</h1>
//           <div>
//             <div className='cartitems-total-item'>
//               <p>Subtotal</p>
//               <p>₹{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className='cartitems-total-item'>
//               <h3>Total</h3>
//               <h3>₹{getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <div className='proceed-to-checkout'>
//             <button onClick={handleCheckout}>Proceed To Checkout</button>
//           </div>
//         </div>
//         <div className='cartitems-promocode'>
//           <p>If you have a promo code, Enter it here</p>
//           <div className='cartitems-promobox'>
//             <input type='text' placeholder='Promo Code' />
//             <button>Apply</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;



import React, { useContext, useEffect, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';
import axios from 'axios'

const stripePromise = loadStripe('pk_test_51ONZYOSAJLtohZuHHWhLPDWQs0YPf5y3jm0LCiiUKNEEDsndfStwcKP83HR9yfXRogRKsA5AyjH8fSmcZDyLtSEg00WB0fVQK5');


const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();
  setIsPaymentLoading(true);

  const stripe = await stripePromise;

  // Call your backend API to create a payment intent
  const response = await fetch('/api/checkout-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: getTotalCartAmount() }),
  });

  const { clientSecret } = await response.json();

  // Use Stripe.js to confirm the payment on the client side
  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: 'Jenny Rosen',
      },
    },
  });

  if (result.error) {
    // Handle error
    console.error(result.error.message);
  } 
  else {
    // Payment successful
    console.log('Payment successful');
  }

  setIsPaymentLoading(false);
};
  // const buyfunction = async()=>{
  //   let response = await axios.post('http://localhost:5000/payment')
  //   if (response && response.status=== 200){

  //     window.location.href = response.data.url
  //     console.log(response.data)
  //   }
  // }

  const handleIncrement = (productId) => {
    addToCart(productId)
  };

  const handleDecrement = (productId) => {
    removeFromCart(productId)
  };

  const storeData = (id, name, image, new_price) => {
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('image', image)
    localStorage.setItem('new_price', new_price)
  }


return (
  <div className='cartitems'>
    <div className='cartitems-format-main'>
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e) => {
      <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.image}</td>
        <td>{e.new_price}</td>
      </tr>
      if (cartItems[e.id] > 0) {
        return <div>
          <div className='cartitems-format cartitems-format-main'>
            <img src={e.image} alt='' className='carticon-product-icon' />
            <p>{e.name}</p>

            <p>₹{e.new_price}</p>

            <div >
              <button onClick={() => handleDecrement(e.id)}>-</button>
              <span className='cartitems-quantity' > {cartItems[e.id]} </span>
              <button onClick={() => handleIncrement(e.id)}>+</button>
            </div>


            <p>₹{e.new_price * cartItems[e.id]}</p>
            <i className='cartitems-remove-icon' class="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => { removeFromCart(e.id) }}></i>
          </div>
          <hr />
        </div>
      }
      return null;
    })}

    <div className='cartitems-down'>
      <div className='cartitems-total'>
        <h1>Cart Totals</h1>
        <div>
          <div className='cartitems-total-item'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>₹{getTotalCartAmount()}</h3>
          </div>
        </div>

        <div className='proceed-to-checkout'>

          <form>
            <input type='hidden' name='total' value={getTotalCartAmount()} />
            <input type='hidden' name='email' value={localStorage.getItem('email')} />
            {/* <input type='hidden' name='publishablekey' value={publishableKey} /> */}
            <button >Proceed To Checkout</button>
          </form>
        </div>
        {/* <button>Proceed To Checkout</button> */}
      </div>
      <div className='cartitems-promocode'>
        <p>If you have promo code, Enter it here</p>
        <div className='cartitems-promobox'>
          <input type='text' placeholder='Promo Code' />
          <button>Apply</button>
        </div>
      </div>
    </div>

    <Elements stripe={stripePromise}>
        <CheckoutForm handlePayment={handlePayment} isLoading={isPaymentLoading} />
      </Elements>

  </div>
)
}

export default CartItems;
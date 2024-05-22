import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = ({ handlePayment, isLoading }) => {
    const stripe = useStripe();
  const elements = useElements();
 

  const handleSubmit = async (event) => {
    event.preventDefault();
   

    if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
  
     await handlePayment(event);
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
    </div>
  )
}

export default CheckoutForm

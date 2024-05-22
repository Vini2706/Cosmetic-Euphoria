import React from 'react';
import './FAQ.css';

const FAQs = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        <div className="accordion-item">
          <input type="checkbox" id="faq1" className="accordion-item-toggle" />
          <label htmlFor="faq1" className="accordion-item-title">What payment methods do you accept?</label>
          <div className="accordion-item-content">
            <p>We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal.</p>
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="faq2" className="accordion-item-toggle" />
          <label htmlFor="faq2" className="accordion-item-title">How long does shipping take?</label>
          <div className="accordion-item-content">
            <p>Shipping times vary depending on your location. Typically, orders are processed and shipped within 1-2 business days, and delivery can take anywhere from 3-7 business days.</p>
          </div>
        </div>
        <div className="accordion-item">
          <input type="checkbox" id="faq3" className="accordion-item-toggle" />
          <label htmlFor="faq3" className="accordion-item-title">Do you offer international shipping?</label>
          <div className="accordion-item-content">
            <p>Yes, we offer international shipping to most countries. However, shipping rates and delivery times may vary depending on the destination.</p>
          </div>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
}

export default FAQs;




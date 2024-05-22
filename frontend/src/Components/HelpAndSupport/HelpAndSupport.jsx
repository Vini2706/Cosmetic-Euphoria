import React from 'react'

const HelpAndSupport = () => {
  return (

    <div className="help-and-support-container" style={{maxWidth:"800px",margin:"0 auto"}}>
      <h1 style={{textAlign:"center"}}>Help & Support</h1>
      <p style={{textAlign:"center",color: "#555",lineheight: "1.6"}}>
        Welcome to Cosmetic Euphoria's Help & Support page! We're here to assist you with any questions or issues you may have regarding our products or services.
      </p>

      {/* <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Q: How can I track my order?</strong><br />
            A: You can easily track your order by logging into your account and navigating to the Order History section.
          </li>
          <li>
            <strong>Q: What should I do if I receive a damaged item?</strong><br />
            A: If you receive a damaged item, please contact our customer support team immediately with your order details and a photo of the damaged item.
          </li>
          <li>
            <strong>Q: How can I return or exchange a product?</strong><br />
            A: To initiate a return or exchange, please visit our Returns & Exchanges page for detailed instructions.
          </li>
        </ul>
      </div> */}

      <div className="contact-section" style={{textAlign:"center"}}>
        <h2>Contact Us</h2>
        <p style={{color:"#555"}}>If you still have questions or need further assistance, feel free to contact our customer support team:</p>
        <ul style={{listStyleType:"none",color:"#555"}}>
          <li>Email: support@cosmeticeuphoria.com</li>
          <li>Phone: (+91) 8001858815, (+91) 8745484620</li>
          <li>Office Address:  Alpha One Mall, Ground Floor, Unit No. G-35, Plot No-216, T.P Scheme-1, Vastrapur, Ahmedabad, Gujarat</li>
        </ul>
      </div>

    </div>
  );
}

export default HelpAndSupport
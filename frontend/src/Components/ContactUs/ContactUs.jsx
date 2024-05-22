// import React from 'react'
// import './ContactUs.css'

// const ContactUs = () => {
//   return (
//     <div className='contact-us-container'>
//       <h1>Contact Us</h1>
//       <p>If you have any questions or inquiries, please feel free to reach out to us using the form below:</p>
//       <form className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Your Name:</label>
//           <input type="text" id="name" name="name" placeholder="Enter your name" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Your Email:</label>
//           <input type="email" id="email" name="email" placeholder="Enter your email" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" placeholder="Enter your message"></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default ContactUs




import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to handle form submission, like sending an email
    console.log(formData);
    alert('Your message has been submitted!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            className='contact-input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='contact-btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
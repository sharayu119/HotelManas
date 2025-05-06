import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-container">
      <h1 className="title">Contact Us</h1>
      
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <h3>Address</h3>
            <p>Hotel Manas, Near Bus Stand,<br />Satara, Maharashtra 415001</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 9923887001</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@hotelmanas.in</p>
          </div>
          <div className="info-item">
            <h3>Hours</h3>
            <p>Monday - Sunday: 11:00 AM - 11:00 PM</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.5341839195454!2d74.0006013!3d17.6868454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23993a5ae8825%3A0x7025f0a8e2a91e2!2sSatara%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              title="Hotel Manas Location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
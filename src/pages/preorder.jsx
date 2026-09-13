import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/preorder.css";

const Preorder = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      city: e.target.city.value,
      postalCode: e.target.postalCode.value,
      storage: e.target.storage.value,
    };

    try {
      const res = await axios.post("https://ecommerce-backend-navy.vercel.app/preorder", formData);
      console.log(res.data);
      setSubmitted(true);
    } catch (err) {
      console.log("Error submitting preorder", err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="preorder-modal">
        <button className="close-btn" onClick={handleClose}>×</button>
        
        {!submitted ? (
          <>
            <h2>Pre-Order Vision Pro</h2>
            <p className="modal-sub">Secure your device for priority shipping and enter your details below.</p>
            
            <form onSubmit={handleSubmit} className="preorder-form">
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Harsh Yadav" required />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="harsh@example.com" required />
              </div>

              <div className="input-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
              </div>

              <div className="input-group">
                <label>Shipping Address</label>
                <input type="text" name="address" placeholder="Enter your full street address" required />
              </div>

              <div className="row-group">
                <div className="input-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="New Delhi" required />
                </div>
                <div className="input-group">
                  <label>Postal Code</label>
                  <input type="text" name="postalCode" placeholder="110001" required />
                </div>
              </div>

              <div className="input-group">
                <label>Storage Capacity</label>
                <select name="storage" required>
                  <option value="">Select Storage</option>
                  <option value="256gb">256GB</option>
                  <option value="512gb">512GB</option>
                  <option value="1tb">1TB</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Confirm Pre-Order</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for pre-ordering Vision Pro. We've sent your tracking and shipment details to your email.</p>
            <button className="submit-btn" onClick={handleClose}>Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Preorder;
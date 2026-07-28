import React from "react";
import "../index.css"; // Ensure this matches your CSS filename

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Open Account</h2>
          <p>Join FOREX and start trading today</p>
        </div>

        <form className="register-form">
          <div className="input-group">
            <label htmlFor="fullname">Full Name</label>
            <input 
              type="text" 
              id="fullname" 
              placeholder="John Doe" 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="name@gmail.com"
              autoComplete="off" 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login">Log in here</a></p>
        </div>
      </div>
    </div>
  );
}
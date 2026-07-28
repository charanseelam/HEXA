import React from "react";
import "../index.css"; // Ensure this matches your CSS filename

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access your trading account</p>
        </div>

        <form className="login-form">
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
              placeholder=" ********" 
              required 
            />
          </div>

          <div className="form-actions">
            <a href="#forgot" className="forgot-pass">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
}
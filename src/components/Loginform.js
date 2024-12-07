import React, { useState } from 'react';
import './Auth.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the API for authentication
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className="form-group">
          <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Register option */}
      <div className="register-option">
                <p>Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
            </div>
    </div>
  );
};

export default LoginForm;
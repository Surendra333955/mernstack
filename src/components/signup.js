import React, { useState } from 'react';
import './signup.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('surendra');
  const [email, setEmail] = useState('2300031885@gmail.com');
  const [password, setPassword] = useState('Mahesh@33');
  const [role, setRole] = useState('salesperson');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the API for registration
    console.log('Registering:', { username, email, password, role });
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="salesperson">Salesperson</option>
          <option value="manager">Manager</option>
          <option value="customer">Customer</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
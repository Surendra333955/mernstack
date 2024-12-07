// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a login process
        if (username === '2300031885' && password === 'password123') {
            alert('Login successful!');
            navigate('/'); // Redirect to the home page or any other route
        } else {
            setError('Invalid username or password');
        }
    };
    const goToLogin=() =>{
        navigate('/home');
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button onClick={goToLogin}type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to={RegisterForm} className="register-link">sign up</Link></p>

        </div>
    );
};

export default Login;
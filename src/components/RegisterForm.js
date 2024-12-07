// src/components/RegistrationForm.js
import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    return (
        <div className="centered-content">
            <form className="register-form">
                <h2>Register</h2>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <input type="number" placeholder="Mobile Number" required />

                <button type="submit">Register</button>
                
                <div className="or-divider">or</div> {/* Added 'or' with styling */}

                <div className="reset-password">Already have an account? <a href="/login">Login here!</a></div>
            </form>
        </div>
    );
};

export default RegisterForm;
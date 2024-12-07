import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Optional CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>CRM System</h2>
      </div>
      <ul className="nav-links">
      <li>
          <NavLink to="/login" activeClassName="active-link">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact="true" activeClassName="active-link">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active-link">
            Register
          </NavLink>
        </li>
    
        <li>
          <NavLink to="/customers" activeClassName="active-link">
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-customer" activeClassName="active-link">
            Add Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/leads" activeClassName="active-link">
            Leads
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-lead" activeClassName="active-link">
            Add Lead
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" activeClassName="active-link">
            Chatbot
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
//NavBar.js
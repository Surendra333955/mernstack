import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'; // Importing the NavBar component
import LoginForm from './components/Login';
import RegisterForm from './components/RegisterForm';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCust';
import LeadList from './components/LeadList';
import AddLead from './components/AddLead';
import Chatbot from './components/chatbot';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <div ClassName="App">
        <NavBar /> 
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/leads" element={<LeadList />} />
          <Route path="/add-lead" element={<AddLead />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
//app.js

/*Project Overview
Key Features:
Customer Management:

Add, edit, delete, and view customer details (name, contact, email, etc.).
Assign customers to sales representatives.
Contact Management:

Store customer communication details (emails, calls, meetings).
Schedule follow-ups and reminders.
Sales Pipeline:

Track leads and opportunities.
Visualize the sales pipeline with stages (Lead, Opportunity, Closed).
Task Management:

Assign tasks to team members.
Track deadlines and completion status.
Analytics & Dashboard:

Display metrics like total leads, conversion rate, revenue, etc.
Graphs for sales trends and customer interactions.
User Management:

Role-based access control (Admin, Manager, Sales Rep).
Secure login and logout functionality.
*/
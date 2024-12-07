import React, { useState } from 'react';
import axios from 'axios'; // npm install axios
import './Addcustomer.css';

const AddCustomer = () => {
  const [name, setName] = useState('surendra');
  const [email, setEmail] = useState('2300031885@kluniversity.in');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/customers', {
        name,
        email,
      });
      setMessage('Customer added successfully!');
      console.log('Response:', response.data);
      setName(''); // Clear the input fields after successful submission
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to add customer');
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-customer">
      <h1>Add Customer</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Customer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;

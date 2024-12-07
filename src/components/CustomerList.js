import React, { useState, useEffect } from 'react';
import axios from 'axios'; // npm install axios
import './Customer.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch customers from the backend
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/customers'); // Replace with your API endpoint
        setCustomers(response.data);
      } catch (err) {
        setError(err.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading customers...</p>;
  }

  return (
    <div className="customer-list">
      <h1>Customer List</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {customers.length > 0 ? (
            <ul>
              {customers.map((customer) => (
                <li key={customer._id}>
                  {customer.name} - {customer.email}
                </li>
              ))}
            </ul>
          ) : (
            <p>No customers available.</p>
          )}
        </>
      )}
    </div>
  );
};

export default CustomerList;

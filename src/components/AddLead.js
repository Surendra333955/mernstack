import React, { useState } from 'react';
import './AddLead.css';

const AddLead = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('New');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call API to add a new lead
    console.log('Adding lead:', { name, status });
  };

  return (
    <div className="add-lead">
      <h1>Add Lead</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Lead Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>
        <button type="submit">Add Lead</button>
      </form>
    </div>
  );
};

export default AddLead;
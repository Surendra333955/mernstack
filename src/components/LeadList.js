import React, { useState, useEffect } from 'react';
import './LeadList.css';

const LeadList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch leads from API
    const fetchLeads = async () => {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  return (
    <div className="lead-list">
      <h1>Lead List</h1>
      <ul>
        {leads.map((lead, index) => (
          <li key={index}>{lead.name} - {lead.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
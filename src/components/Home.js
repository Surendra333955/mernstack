import React, { useState, useEffect } from 'react';
import './Home.css'; // Optional: Style for the Home component

// Mock data for clients, activities, and tasks
const mockClients = [
  { id: 1, name: 'Client A', status: 'Active', lastContact: '2023-09-01' },
  { id: 2, name: 'Client B', status: 'Inactive', lastContact: '2023-08-15' },
  { id: 3, name: 'Client C', status: 'Pending', lastContact: '2023-09-10' },
];

const mockActivities = [
  { id: 1, type: 'Call', client: 'Client A', date: '2023-09-01' },
  { id: 2, type: 'Email', client: 'Client B', date: '2023-08-25' },
  { id: 3, type: 'Meeting', client: 'Client C', date: '2023-09-10' },
];

const mockTasks = [
  { id: 1, task: 'Follow-up with Client A', dueDate: '2023-09-15' },
  { id: 2, task: 'Send proposal to Client B', dueDate: '2023-09-12' },
];

const Home = () => {
  const [clients, setClients] = useState([]);
  const [activities, setActivities] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setClients(mockClients);
    setActivities(mockActivities);
    setTasks(mockTasks);
  }, []);

  return (
    <div className="home-container">
      <h1>CRM Dashboard</h1>

      {/* Client Overview Section */}
      <section className="client-overview">
        <h2>Client Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Status</th>
              <th>Last Contact</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.status}</td>
                <td>{client.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Recent Activities Section */}
      <section className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {activities.map(activity => (
            <li key={activity.id}>
              {activity.type} with {activity.client} on {activity.date}
            </li>
          ))}
        </ul>
      </section>

      {/* Upcoming Tasks Section */}
      <section className="upcoming-tasks">
        <h2>Upcoming Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.task} (Due: {task.dueDate})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './support.css';

const Support = () => {
  const [supportTickets, setSupportTickets] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      message: 'I have an issue with my account',
      status: 'Open'
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      message: 'I can\'t login to my account',
      status: 'Open'
    },
    {
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      message: 'I\'m having trouble accessing the website',
      status: 'Open'
    }
  ]);

  const handleTicketStatusChange = (index) => {
    const newSupportTickets = [...supportTickets];
    const ticket = newSupportTickets[index];
    ticket.status = ticket.status === 'Open' ? 'Closed' : 'Open';
    setSupportTickets(newSupportTickets);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">Admin Panel</div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar__nav">
          <li>
            <NavLink to="/Dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/Patients" activeClassName="active">
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink to="/Doctors" activeClassName="active">
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink to="/Settings" activeClassName="active">
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/Support" activeClassName="active">
              Support
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Support Tickets */}
      <div className="support-tickets-container">
        <h1>Support Tickets</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            {supportTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.name}</td>
                <td>{ticket.email}</td>
                <td>{ticket.message}</td>
                <td>{ticket.status}</td>
                <td>
                <button onClick={() => handleTicketStatusChange(index)} className="change-status-button">
                 {ticket.status === 'Open' ? 'Close' : 'Reopen'}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Support;

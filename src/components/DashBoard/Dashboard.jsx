import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

const AdminPanel = () => {

  const accessToken = localStorage.getItem('accessToken');
  const [counts, setCounts] = useState({});

  useEffect(() => {
    axios.get('https://appointmate.onrender.com/admin/total', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      setCounts(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [accessToken]);
  
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">
          Admin Panel
        </div>
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

      {/* Content */}
      <div className="content">
        <h2>Welcome to Dashboard</h2>
        <div className="boxes">
          <div className="box">
            <h3>Doctors</h3>
            <p className="count">{counts.doctors || 0}</p>
          </div>
          <div className="box">
            <h3>Patients</h3>
            <p className="count">{counts.patients || 0}</p>
          </div>
          <div className="box">
            <h3>Appointments</h3>
            <p className="count">{counts.appointments || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

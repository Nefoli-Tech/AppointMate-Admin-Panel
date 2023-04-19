import React from 'react';
import { NavLink } from 'react-router-dom';
import './patients.css';

const AdminPanel = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">

          Admin Panel</div>
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
        <h2>Welcome to Patients</h2>
        <div className="boxes">
          <div className="box">
            <h2>Total patients</h2>
            <p className="count">10</p>
          </div>
          <div className="box">
            <h2>Appointments History with Doctor</h2>
            <p className="count">active</p>
          </div>
          <div className="box">
            <h2>CRUD Patients</h2>
            <p className="count">100</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminPanel;


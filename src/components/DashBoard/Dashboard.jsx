import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';

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
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/Patients" activeClassName="active">
            Patients
            </NavLink>
          </li>
          <li>
            <NavLink to="/Support" activeClassName="active">
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/Setting" activeClassName="active">
              Setting
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" activeClassName="active">
              Doctors
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        <h2>Welcome to Dashboard</h2>
        <div className="boxes">
          <div className="box">
            <h3>Doctor</h3>
            <p className="count">10</p>
          </div>
          <div className="box">
            <h3>Patients</h3>
            <p className="count">50</p>
          </div>
          <div className="box">
            <h3>Appointment</h3>
            <p className="count">100</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminPanel;


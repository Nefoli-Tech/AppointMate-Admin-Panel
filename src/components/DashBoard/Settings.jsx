import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './setting.css';

const Setting = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to server for processing
    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
      fullName,
      avatar,
    });
  };

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

      {/* Main content */}
      <div className="settings-container">
        <form onSubmit={handleSubmit}>
          <h1>Settings</h1>
          <div className="form-group">
            <label htmlFor="current-password">Current Password:</label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="avatar">Avatar:</label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Setting;

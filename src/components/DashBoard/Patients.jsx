import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './patients.css';


const AdminPanel = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe' },
  
  ]);

  const appointments = [
    { patientId: 1, doctor: 'Dr. Smith', date: '05/10/2023' },
    
  ];

  const handleDeletePatient = (id) => {
    // Delete patient with the specified ID
    const newPatients = patients.filter(patient => patient.id !== id);
    setPatients(newPatients);
  };

  const handleCreatePatient = (name) => {
    // Create a new patient with the specified name
    const newPatient = { id: patients.length + 1, name: name };
    const newPatients = [...patients, newPatient];
    setPatients(newPatients);
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

      {/* Content */}
      <div className="content">
        <h2>Welcome to Patients</h2>
        <div className="boxes">
          <div className="box2">
            <h2>Appointments History</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Doctor</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{patients.find(patient => patient.id === appointment.patientId).name}</td>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="box">
            <h2>Patients Name</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleCreatePatient(e.target.elements.name.value); }}>
              {/* <input type="text" name="name" placeholder="Enter name" />
              <button type="submit">Add</button> */}
            </form>
            <ul>
              {patients.map((patient) => (
                <li key={patient.id}>

                  {patient.name}
                  <button onClick={() => handleDeletePatient(patient.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AdminPanel;

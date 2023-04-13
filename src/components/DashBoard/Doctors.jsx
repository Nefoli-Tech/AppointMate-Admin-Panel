import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './doctor.css';
const DoctorForm = ({ addDoctor }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newDoctor = { name, email, phone, specialization };
    addDoctor(newDoctor);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialization('');
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
        />
      </td>
      <td>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </td>
    </tr>
  );
};

const AdminPanel = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '555-1234', specialization: 'Cardiology' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com', phone: '555-5678', specialization: 'Pediatrics' },
    // Add more doctors here
  ]);

  const addDoctor = (doctor) => {
    setDoctors([...doctors, doctor]);
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  const updateDoctor = (updatedDoctor) => {
    setDoctors(
      doctors.map((doctor) => (doctor.id === updatedDoctor.id ? updatedDoctor : doctor))
    );
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

      {/* Content */}
      <div className="content">
        <h1>Doctors</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Specialization</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <DoctorRow
                key={doctor.id}
                doctor={doctor}
                deleteDoctor={deleteDoctor}
                updateDoctor={updateDoctor}
              />
            ))}
            <DoctorForm addDoctor={addDoctor} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DoctorRow = ({ doctor, deleteDoctor, updateDoctor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDoctor, setUpdatedDoctor] = useState(doctor);
  
  const handleDelete = () => {
  deleteDoctor(doctor.id);
  };
  
  const handleEdit = () => {
  setIsEditing(true);
  };
  
  const handleUpdate = () => {
  updateDoctor(updatedDoctor);
  setIsEditing(false);
  };
  
  const handleCancel = () => {
  setIsEditing(false);
  setUpdatedDoctor(doctor);
  };
  
  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUpdatedDoctor({ ...updatedDoctor, [name]: value });
  };
  
  if (isEditing) {
  return (
  <tr>
  <td>
  <input type="text" name="name" value={updatedDoctor.name} onChange={handleInputChange} />
  </td>
  <td>
  <input type="email" name="email" value={updatedDoctor.email} onChange={handleInputChange} />
  </td>
  <td>
  <input type="tel" name="phone" value={updatedDoctor.phone} onChange={handleInputChange} />
  </td>
  <td>
  <input type="text" name="specialization" value={updatedDoctor.specialization} onChange={handleInputChange} />
  </td>
  <td>
  <button onClick={handleUpdate}>Save</button>
  <button onClick={handleCancel}>Cancel</button>
  </td>
  </tr>
  );
  }
  
  return (
  <tr>
  <td>{doctor.name}</td>
  <td>{doctor.email}</td>
  <td>{doctor.phone}</td>
  <td>{doctor.specialization}</td>
  <td>
  <button onClick={handleEdit}>Edit</button>
  <button onClick={handleDelete}>Delete</button>
  </td>
  </tr>
  );
  };
  
  export default AdminPanel;

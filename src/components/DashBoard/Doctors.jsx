import React, { useState } from "react";
import { Table, Input, Button } from "antd";
import { NavLink } from 'react-router-dom';
import './doctor.css';

const { Column } = Table;

const DoctorPanel = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    description: "",
    degree: "",
    nmcNumber: "",
    category: "",
    experience: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const handleAddDoctor = () => {
    setDoctors([...doctors, newDoctor]);
    setNewDoctor({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      description: "",
      degree: "",
      nmcNumber: "",
      category: "",
      experience: "",
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

    <div className="main-content">
      <div style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Enter First Name"
          name="firstName"
          value={newDoctor.firstName}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "10px" }}
        />
        <Input
          placeholder="Enter Last Name"
          name="lastName"
          value={newDoctor.lastName}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Email"
          name="email"
          value={newDoctor.email}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Password"
          name="password"
          type="password"
          value={newDoctor.password}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Phone Number"
          name="phoneNumber"
          value={newDoctor.phoneNumber}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Description"
          name="description"
          value={newDoctor.description}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Degree"
          name="degree"
          value={newDoctor.degree}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter NMC Number"
          name="nmcNumber"
          value={newDoctor.nmcNumber}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Category"
          name="category"
          value={newDoctor.category}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Input
          placeholder="Enter Experience"
          name="experience"
          value={newDoctor.experience}
          onChange={handleInputChange}
          style={{ marginRight: "8px", marginBottom: "8px" }}
        />
        <Button type="primary" onClick={handleAddDoctor}>
          Add Doctor
        </Button>
      </div>
      <Table dataSource={doctors}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
    <Column title="Last Name" dataIndex="lastName" key="lastName" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Phone Number" dataIndex="phoneNumber" key="phoneNumber" />
    <Column title="Description" dataIndex="description" key="description" />
    <Column title="Degree" dataIndex="degree" key="degree" />
    <Column title="NMC Number" dataIndex="nmcNumber" key="nmcNumber" />
    <Column title="Category" dataIndex="category" key="category" />
    <Column title="Experience" dataIndex="experience" key="experience" />
  </Table>
</div>
</div>
);
};

export default DoctorPanel;

import React, { useState, useEffect} from "react";
import { Table, Input, Button } from "antd";
import { NavLink } from 'react-router-dom';
import { Spin } from 'antd';
import toast from "react-hot-toast";
import axios from "axios";
import './doctor.css';

const { Column } = Table;

const DoctorPanel = () => {

  const accessToken = localStorage.getItem('accessToken');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    handleLoading(true);
    axios.get('https://appointmate.onrender.com/doctors', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      handleLoading(false);
      setDoctors(response.data.doctors);
    })
    .catch(error => {
      handleLoading(false);
      console.log(error);
    })
  }, [accessToken]);



  const [loading, handleLoading] = useState(false);
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

  const handleAddDoctor = async ()  => {
    setDoctors([...doctors, newDoctor]);
    handleLoading(true);
    try {
      const response = await axios.post(
        "https://appointmate.onrender.com/doctor",
        {
          "firstName": newDoctor.firstName,
          "lastName": newDoctor.lastName,
          "email": newDoctor.email,
          "password": newDoctor.password,
          "avatarUrl":"https://i.stack.imgur.com/l60Hf.png",
          "phoneNumber": newDoctor.phoneNumber,
          "description": newDoctor.description,
          "experience": newDoctor.experience,
          "degree": newDoctor.degree,
          "nmcNumber":  newDoctor.nmcNumber,
          "category":[newDoctor.category],
          "avgRating": 0
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      }
      );
      handleLoading(false);
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Doctor Added Successfully");
      } else {
        toast.error("Authentication Error");
      }
    } catch (e) {
      handleLoading(false);
      try {
        toast.error(e.response.data.error);
      } catch (e) {
        toast.error("Something went wrong");
      }
  }
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
    
    loading?  <div className="loading">
    <Spin size="large" />
  </div> :
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

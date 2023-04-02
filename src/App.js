import React from "react";
import Auth from "./components/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dashboard";
import Patients from "./components/DashBoard/Patients";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        
        
      </Routes>
    </>
  );
};
export default App;


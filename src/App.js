import React from "react";
import Auth from "./components/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dashboard";
import Patients from "./components/DashBoard/Patients";
import Doctors from "./components/DashBoard/Doctors";
import Settings from "./components/DashBoard/Settings";
import Support from "./components/DashBoard/Support";





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        
      </Routes>
    </>
  );
};
export default App;


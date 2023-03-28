import React from "react";
import Auth from "./components/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dashboard";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;


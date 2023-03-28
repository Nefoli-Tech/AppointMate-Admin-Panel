import React from "react";



import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/DashBoard/Dashboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default App;

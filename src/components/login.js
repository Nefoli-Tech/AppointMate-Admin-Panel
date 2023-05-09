import "./Style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };

  function handleLoading(isLoading) {
    setIsLoading(isLoading);
  }
  async function login() {
    handleLoading(true);
    try {
      const response = await axios.post(
        "https://appointmate.onrender.com/users/login",
        { email: email, password: password }
      );
      handleLoading(false);
      if (response.data.role === "Admin") {
        navigate("/dashboard", { replace: true });
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
  }
  return (
    <>
      <div className="mainbox">
        <div className="wrapper">
          <div className="st">
            <img
              src="/image/light_logo.png"
              alt="Logo"
              style={{ height: "120px", width: "200px" }}
            />
          </div>
          <h1>Welcome back Admin</h1>
          <h2>Sign in to continue with Appointmate</h2>
          <form action="#">
            <input
              type="text"
              onChange={(e) => handleEmailChange(e)}
              placeholder="Email"
            ></input>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </form>
          <button onClick={!isLoading ? login : null}>
            {isLoading ? "Loading..." : "Login"}
          </button>
          <div>
            <Toaster position="top-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

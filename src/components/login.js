import React, { useState } from 'react'
import "./style.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const customToastStyle = {
    fontSize: '14px',
    padding: '8px 12px',
  };
 
  

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };
  async  function login() {
    
     try{
      const response = await axios.post('https://appointmate.onrender.com/users/login', { email:email, password:password});
      console.log(response.data);
      if(response.data.role==="Admin")
      {
        alert("Admin verified");
        localStorage.setItem("userInfo",response.data);
      }
      else{
        toast.error("Authentication failed")
      }  
     }
     catch(e)
     {
      toast.error(e.response.data.error,{
        style: customToastStyle,
        autoClose: 2000, 
        bodyStyle: { fontSize: '14px' },
        closeButton: false,
        
      })
     }
  }
  return (
    <>
      <div className="wrapper">

        <div className='st'>
        <img src="/image/light_logo.png" alt="Logo"  style={{ height: '120px', width: '200px'}} />
        </div>
        <h1>Welcome back Admin</h1>
        <h2>Sign in to continue with Appointmate</h2>
        <form action="#">
            <input type="text" onChange={(e)=>handleEmailChange(e)} placeholder='Email'></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='Password'></input>
        </form>
        <button onClick={
          login
        } >Login</button>
        <ToastContainer className="my-custom-toast-container" />

      </div>
    </>
  )
}

export default Login

import React, { useState } from 'react'
import "./style.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



  const customToastStyle = {
    fontSize: '14px',
    padding: '8px 12px',
  };
 
  

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading,setIsLoading]=useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value.toLowerCase());
  };

  function handleLoading(isLoading) {
    setIsLoading(isLoading);
  }
  async  function login() {
    handleLoading(true);
     try{
      const response = await axios.post('https://appointmate.onrender.com/users/login', { email:email, password:password});
      handleLoading(false);
      if(response.data.role==="Admin")
      {
        
        localStorage.setItem("userInfo",response.data);
        navigate("/dashboard", { replace: true });
      }
      else{
        toast.error("Authentication failed",{
          style: customToastStyle,
          autoClose: 2000, 
          bodyStyle: { fontSize: '14px' },
          closeButton: false,
          
        })
      }  
     }
     catch(e)
     
     {
      handleLoading(false);
      try{
      toast.error(e.response.data.error,{
        style: customToastStyle,
        autoClose: 2000, 
        bodyStyle: { fontSize: '14px' },
        closeButton: false,
        
      })
      
     }
     catch(e)
     {
      toast.error("Something went wrong",{
        style: customToastStyle,
        autoClose: 2000, 
        bodyStyle: { fontSize: '14px' },
        closeButton: false,
      })

     }
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
          !isLoading?login:null
        } >{isLoading?"Loading...":"Login"}</button>
        <ToastContainer className="my-custom-toast-container" />

      </div>
    </>
  )
}

export default Login

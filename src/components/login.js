import React from 'react'
import "./style.css";


const Login = () => {
  return (
    <>
      <div className="wrapper">
        <div className='st'>
        <img src="/image/light_logo.png" alt="Logo"  style={{ height: '120px', width: '200px'}} />
        </div>
      
        <h1>Login</h1>
        <form action="#">
            <input type="text" placeholder='Username'></input>
            <input type="password" placeholder='Password'></input>
        </form>
        <button>Login</button>

      </div>
    </>
  )
}

export default Login

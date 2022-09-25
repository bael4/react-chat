import React from 'react'
import '../styles/Auth.css'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>My Chat</span>
        <span className='title'>Login</span>
        <form>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Sign up</button>
        </form>
        <p>You do have an account? Register</p>
        </div>
    </div>
  )
}

export default Login
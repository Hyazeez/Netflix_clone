import React, { useState } from 'react'
import './Login.css';
import logo from '../../assets/netflex2.png';

const Login = () => {
  const[signState, setSignState] = useState("Sign In");
  return (
    <div className='login'>
      <img src={logo} alt="Netflix Logo" className='logo1' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <>
              <label htmlFor="username">Username : <input type="text" placeholder="Username" className='input' /></label>
              <label htmlFor="email">Email : <input type="email" placeholder="Email" className='input' /></label>
              <label htmlFor="password">Password : <input type="password" placeholder="Password" className='input' /></label>
              <button type="submit" className='setbutton'>Sign Up</button>
            </>
          ) : (
            <>
              <label htmlFor="email">Email : <input type="email" placeholder="Email" className='input' /></label>
              <label htmlFor="password">Password : <input type="password" placeholder="Password" className='input' /></label>
              <button type="submit" className='setbutton'>Login</button>
            </>
          )}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />&nbsp; &nbsp;
              <label htmlFor="remember" className='remember-label'>Remember me</label><br></br>
              <p className='form-help-text'>Need help?</p>
            </div>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <>
              <p>New to Netflex? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
            </>
          ) : (
            <>
              <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login;
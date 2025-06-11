import { useState } from 'react'
import './Login.css';
import logo from '../../assets/netflex2.png';
import {login, signup} from '../../firebase';

const Login = () => {
  const[signState, setSignState] = useState("Sign In");
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  }
  return (
    <div className='login'>
      <img src={logo} alt="Netflix Logo" className='logo1' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" ? (
            <>
              <label htmlFor="username">Username : <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" className='input' /></label>
              <label htmlFor="email">Email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='input' /></label>
              <label htmlFor="password">Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='input' /></label>
              <button type="submit" className='setbutton'>Sign Up</button>
            </>
          ) : (
            <>
              <label htmlFor="email">Email : <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='input' /></label>
              <label htmlFor="password">Password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='input' /></label>
              <button type="submit" className='setbutton'>{signState}</button>
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
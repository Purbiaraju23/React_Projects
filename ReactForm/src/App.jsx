import { useState } from 'react';
import './index.css'
function App() {

  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')


  const validatePassword = () => {
    const validPassword = /^(?=.*\d).{8,}$/;
    
    if(!validPassword.test(password))
    {
        alert("Password must have 8 characters and at least 1 digit !!");
    }
  }


  const handleLogin = (e) => {
    e.preventDefault()

    if(username === "Raju_Purbia")
    {
      alert("Login SuccessFull !!")
    }
    else
    {
      alert("Invlaid username or password! Please Try Again 😀")
    }
  }


  return (
    <>
      <div className="main">
      <form action="#" id="myform">
        <div className="items">
          <label htmlFor="username" className="form-label">Username:</label>
          <input 
          onChange={(e)=> setUsername(e.target.value)}
          type="username" className="form-control" id="username" placeholder="Enter username" name="username" required />
        </div>

        <div className="items">
          <label htmlFor="password" className="form-label">Password:</label>
          <input onChange={(e)=> setPassword(e.target.value)} 
          type="password" className="form-control" id="password" placeholder="Enter password" name="password" required />
        </div>

        <div className="items">
          <label htmlFor="city" className="form-label">City of employment:</label>
          <input type="city" className="form-control" id="city" placeholder="Enter city" name="city" />
        </div>

        <div className="items">
          <label htmlFor="webserver">Webserver</label>
          <select id="webserver" name="webserver">
            <option value="">-- Choose a Server --</option>
            <option value="apache">Apache HTTP Server</option>
            <option value="nginx">Nginx</option>
            <option value="IIS">Microsoft Internet Information Services</option>
            <option value="litespeed">LiteSpeed Web Server</option>
            <option value="caddy">Caddy</option>
          </select>
        </div>

        <div className="items">
          <label htmlFor="role">Please Specify your role:</label>

          <div className="radio-group">
            <span>
              <input type="radio" id="admin" name="your-role" value="admin" />
              <label htmlFor="admin">Admin</label>
            </span>

            <span>
              <input type="radio" id="Engineer" name="your-role" value="Engineer" />
              <label htmlFor="Engineer">Engineer</label>
            </span>

            <span>
              <input type="radio" id="Manager" name="your-role" value="Manager" />
              <label htmlFor="Manager">Manager</label>
            </span>

            <span>
              <input type="radio" id="Intern" name="your-role" value="Intern" />
              <label htmlFor="Intern">Intern</label>
            </span>
          </div>
        </div>

        <div className="items">
          <label htmlFor="signin">Single Sign-on to the following:</label>

          <div className="checkbox-group">
            <span>
              <input type="checkbox" id="Mail" name="sign-on" value="Mail" />
              <label htmlFor="Mail">Mail</label>
            </span>

            <span>
              <input type="checkbox" id="Payroll" name="sign-on" value="Payroll" />
              <label htmlFor="Payroll">Payroll</label>
            </span>

            <span>
              <input type="checkbox" id="Self-service" name="sign-on" value="Self-service" />
              <label htmlFor="Self-service">Self-service</label>
            </span>
          </div>
        </div>
        <br />

        <div className='button'>
          <input type="submit" value="Login" id='loginButton'
          onClick={validatePassword && handleLogin}/>
          <input type="reset" value="Reset" id='resetButton'
          />
        </div>
      </form>
    </div>
    </>
  )
}

export default App

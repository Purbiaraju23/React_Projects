import { useRef, useState } from "react";
import FormItem from "./components/FormItem";
import FormSelect from "./components/FormSelect";
import FormRadio from "./components/FormRadio";
import FormCheckBox from "./FormCheckBox";
import Button from "./components/Button";
import "./index.css";

function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    city: "",
  });

  const [selectedWebserver, setSelectedWebserver] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");

  const webserverOptions = [
    { value: "", label: "-- Choose a Server --" },
    { value: "apache", label: "Apache HTTP Server" },
    { value: "nginx", label: "Nginx" },
    { value: "IIS", label: "Microsoft Internet Information Services" },
    { value: "litespeed", label: "LiteSpeed Web Server" },
    { value: "caddy", label: "Caddy" },
  ];

  const roles = ["Admin", "Engineer", "Manager", "Intern"];
  const services = ["Mail", "Payroll", "Self-service"];
  const validPassword = /^(?=.*\d).{8,}$/;

  const validatePassword = () => {
    if (!validPassword.test(formState.password)) {
      setError("Password must have 8 characters and at least 1 digit!!");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (formState.username === "Raju-Purbia") {
      setLoginError("");
      if (validatePassword()) {
        alert("Login SuccessFull !!");
      }
    } else {
      setLoginError("**Invalid username ! Please Try Again ");
    }
  };

  const handleFormChange = (field, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
  };

  const handleReset = () => {
    setFormState({});
    setError("");
    setLoginError("");
  };

  return (
    <>
      <div className="main">
        <form action="#" id="myform">
          <div className="form-container">
            <FormItem
              Type={"text"}
              id={"username"}
              name={"username"}
              label="UserName"
              onChange={(e) => {
                handleFormChange("username", e.target.value);
                setLoginError("");
              }}
              placeholder="Enter username"
              value={formState.username}
            />
            {loginError !== "" && (
              <span className="login-error">{loginError}</span>
            )}
          </div>
          <div className="form-container">
            <FormItem
              Type={"password"}
              id={"password"}
              name={"password"}
              label="Password"
              onChange={(e) => {
                handleFormChange("password", e.target.value);
                validatePassword();
                setError("");
                setLoginError("");
              }}
              placeholder="Enter password"
              value={formState.password}
            />
            <div className="error-group">
              {error !== "" && <p className="password-error">{error}</p>}
            </div>
          </div>

          <FormItem
            Type={"text"}
            id={"city"}
            name={"city"}
            label="City of employment"
            placeholder="Enter city"
            onChange={(e) => handleFormChange("city", e.target.value)}
            value={formState.city}
          />

          <FormSelect
            label={"WebServer"}
            name={"webserver"}
            id={"webserver"}
            options={webserverOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            onChange={(e) => setSelectedWebserver(e.target.value)}
          />

          <FormRadio
            mainLabel={"Please Specify your Role"}
            radioItems={roles.map((role) => (
              <span key={role}>
                <input
                  type="radio"
                  id={role.toLowerCase()}
                  name="your-role"
                  value={role}
                  onChange={() => setSelectedRole(role)}
                />
                <label htmlFor={role.toLowerCase()}>{role}</label>
              </span>
            ))}
          />

          <FormCheckBox
            label="Single Sign-on to the following:"
            checkItems={services.map((service) => (
              <span key={service}>
                <input
                  type="checkbox"
                  id={service}
                  value={service}
                  onChange={() => {
                    const updatedServices = selectedServices.includes(service)
                      ? selectedServices.filter((item) => item !== service)
                      : [...selectedServices, service];

                    setSelectedServices(updatedServices);
                  }}
                />
                <label htmlFor={service}>{service}</label>
              </span>
            ))}
          />
          <br />
          <br />

          <div className="button">
            <Button
              type="submit"
              value="Submit"
              id="loginButton"
              onClick={(e) => {
                handleLogin(e);
                validatePassword();
              }}
            />
            <Button
              type="reset"
              value="Reset"
              id="resetButton"
              onClick={() => handleReset()}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;

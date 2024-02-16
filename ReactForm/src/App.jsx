import { useState } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import Radio from "./components/Radio";
import CheckBox from "./components/CheckBox";
import Button from "./components/Button";
import "./index.css";
import {
  VALIDPASSWORD,
  VALID_USERNAME_REGEX,
  WEBSERVER_OPTIONS,
  ROLES,
  SERVICES,
} from "./Utils/Utility";

function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    city: "",
  });

  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [errors, setErrors] = useState({
    password: "",
    username: "",
    login: "",
  });

  const validatePassword = () => {
    if (!VALIDPASSWORD.test(formState.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "**Password must have 8 characters and at least 1 digit!!",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      return true;
    }
  };

  const validateUsername = () => {
    if (!VALID_USERNAME_REGEX.test(formState.username)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "**Invalid username format! Please try again.",
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
      return true;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (formState.username === "Raju_Purbia" && validatePassword()) {
      setErrors((prevErrors) => ({ ...prevErrors, login: "" }));
      alert("Login Successful!!");
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        login: "**Invalid username or password! Please try again.",
      }));
    }
  };

  const handleFormChange = (field, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [field]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleReset = () => {
    setFormState({});
    setErrors({ password: "", username: "", login: "" });
  };
  return (
    <>
      <div className="main">
        <form action="#" id="myform">
          <div className="form-container">
            <Input
              Type={"text"}
              id={"username"}
              name={"username"}
              label="UserName"
              onChange={(e) => {
                handleFormChange("username", e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  username: "",
                  login: "",
                }));
              }}
              onBlur={validateUsername}
              placeholder="Enter username"
              value={formState.username}
            />
            {errors.username !== "" && (
              <span className="username-error">{errors.username}</span>
            )}
            {errors.login !== "" && (
              <span className="login-error">{errors.login}</span>
            )}
          </div>

          <div className="form-container">
            <Input
              Type={"password"}
              id={"password"}
              name={"password"}
              label="Password"
              onChange={(e) => {
                handleFormChange("password", e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  password: "",
                  login: "",
                }));
              }}
              onBlur={validatePassword}
              placeholder="Enter password"
              value={formState.password}
            />
            {errors.password !== "" && (
              <span className="password-error">{errors.password}</span>
            )}
            {errors.login !== "" && (
              <span className="login-error">{errors.login}</span>
            )}
          </div>

          <Input
            Type={"text"}
            id={"city"}
            name={"city"}
            label="City of employment"
            placeholder="Enter city"
            onChange={(e) => handleFormChange("city", e.target.value)}
            value={formState.city}
          />

          <Select
            label={"WebServer"}
            name={"webserver"}
            id={"webserver"}
            options={WEBSERVER_OPTIONS}
          />

          <Radio mainLabel={"Please Specify your Role"} radioItems={ROLES} />

          <CheckBox
            label="Single Sign-on to the following:"
            checkItems={SERVICES}
          />

          <div className="button">
            <Button
              type="submit"
              value="Submit"
              id="loginButton"
              onClick={(e) => {
                handleLogin(e);
                setErrors((prev) => ({
                  ...prev,
                  username: "",
                  password: "",
                }));
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

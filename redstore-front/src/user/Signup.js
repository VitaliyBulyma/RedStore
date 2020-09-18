import React, { useState } from "react";
import {Link } from 'react-router-dom';
import Menu from "../core/Menu";
import {signup} from '../auth';

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false});
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };
  const signupForm = () => (
    <div classNameName="account-page">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img src="images/image1.png" alt="" width="100%" />
          </div>
          <div className="col-2">
            <div className="form-container">
              <div className="form-btn">
                <span>Register</span>
                <hr id="Indicator" />
                <form id="RegForm">
                  <div></div>

                  <input
                    type="text"
                    onChange={handleChange("name")}
                    value={name}
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    onChange={handleChange("email")}
                    value={email}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    onChange={handleChange("password")}
                    value={password}
                    placeholder="Password"
                  />
                  <button type="submit" onClick={clickSubmit} className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const showError = () => (
    <div className="showError" style={{ display: error ? "" : "none" }}>
      <p className="message">{error}</p>
    </div>
  );
  const showSuccess = () => (
    <div className="showSuccess" style={{ display: success ? "" : "none" }}>
      <p className="message">New account is created. Please <Link to="/signin"> Sign-in here.</Link></p>
    </div>
  );
  return (
    <div classNameName="container">
      <Menu />
      {showSuccess()}
      {showError()}
      {signupForm()}      
    </div>
  );
};

export default Signup;

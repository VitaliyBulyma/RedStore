import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Menu from "../core/Menu";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
  const [values, setValues] = useState({
    email: "vitaliy_bulyma@yahoo.ca",
    password: "password1",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, error, loading, redirectToReferrer } = values;
  const {user} =isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, ()=>{
            setValues({
                ...values,
                redirectToReferrer: true,
              });
        })
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
                <span>Login</span>
                <hr id="Indicator" />
                <form id="RegForm">
                  <div></div>

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
                    Log-in
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
  const showLoading = () =>
    loading && (
      <div className="showSuccess">
        <p className="message">Loading...</p>
      </div>
    );

const redirectUser =()=>{
    if(redirectToReferrer){
        if(user && user.role === 1){
          return <Redirect to="/admin/dashboard" />
        }else {
          return <Redirect to="/user/dashboard" />
        }
        if(isAuthenticated()){
          return <Redirect to="/" />
        }
    }
}
  return (
    <div classNameName="container">
      <Menu />
      {showLoading()}
      {showError()}
      {signupForm()}
      {redirectUser()}
    </div>
  );
};

export default Signin;

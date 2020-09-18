import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

// active style
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff5a44" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => {
  // toggle menu
  const [toggle, setToggle] = useState("hide");
  const menuToggle = () => {
    if (toggle === "hide") {
      setToggle("show");
    } else {
      setToggle("hide");
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.png" width="125" />
        </div>
        <nav>
          <ul className={toggle}>
            <li>
              <Link to="/" style={isActive(history, "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/api/products"
                style={isActive(history, "/api/products")}
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/signin" style={isActive(history, "/signin")}>
                Signin
              </Link>
            </li>
            <li>
              <Link to="/signup" style={isActive(history, "/signup")}>
                Signup
              </Link>
            </li>

            <li>
              <a href="#">Account</a>
            </li>
          </ul>
          <img
            src="images/cart.png"
            style={{ width: "30px", height: "30px" }}
          />
          <img
            className="menu-icon"
            src="images/menu.png"
            onClick={menuToggle}
          />
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Menu);

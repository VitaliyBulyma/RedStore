import React, {  useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import {itemTotal} from '../core/cartHelpers';

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
  let user = "";
  if (isAuthenticated()) {
    user = isAuthenticated().user;
  }

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" width="125" />
        </Link>
          
        </div>
        <nav>
          <ul className={toggle}>
            <li>
              <Link to="/" style={isActive(history, "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" style={isActive(history, "/shop")}>
                Shop
              </Link>
            </li>
            {user.role === 0 && (
              <li>
                <Link
                  to="/user/dashboard"
                  style={isActive(history, "/user/dashboard")}
                >
                  Dashboard
                </Link>
              </li>
            )}
            {user.role === 1 && (
              <li>
                <Link
                  to="/admin/dashboard"
                  style={isActive(history, "/admin/dashboard")}
                >
                  Admin Dashboard
                </Link>
              </li>
            )}

            {!isAuthenticated() && (
              <>
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
              </>
            )}
            {isAuthenticated() && (
              <li>
                <span
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                  style={{ cursor: "pointer", color: "red" }}
                >
                  Sign out
                </span>
              </li>
            )}
            <li>
                  <Link to="/cart" style={isActive(history, "/cart")}>
                    Cart <sup><small>{itemTotal()}</small></sup>
                  </Link>
                </li>
          </ul>
          <img
            src="/images/cart.png"
            style={{ width: "30px", height: "30px" }}
          />
          <img
            className="menu-icon"
            src="/images/menu.png"
            onClick={menuToggle}
          />
        </nav>
      </div>
    </div>
  );
};

export default withRouter(Menu);

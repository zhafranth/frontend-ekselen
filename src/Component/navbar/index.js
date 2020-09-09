import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// Logo
import Logo from "Assets/Images/logo.png";

export default function index() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="btn btn-logo" to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="btn nav-link" type="Link">
                  Course Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn nav-link" type="Link">
                  Career Ready Program
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn nav-link" type="Link">
                  About
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  borderRadius: "40px",
                  height: "30px",
                  margin: "0 10px",
                }}
              />
            </form>
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="btn nav-link btn-login-navbar" to="/login">
                    Join
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn nav-link btn-register-navbar"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

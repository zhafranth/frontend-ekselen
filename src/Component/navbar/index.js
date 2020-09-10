import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// Logo
import Logo from "Assets/Images/logo.png";

export default function index() {
  return (
    <div className="nav-collapse container">
      <div className="logo-btn">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-btn">
        <Link className="navbar-btn-item">Category Course</Link>
        <Link className="navbar-btn-item">Career Category Program</Link>
        <Link className="navbar-btn-item">About</Link>
      </div>
      <div className="navbar-search">
        <input type="text" className="search-nav" placeholder="search" />
      </div>
      <div className="navbar-register">
        <Link className="btn-login">Login</Link>
        <Link className="btn-register">Register</Link>
      </div>
    </div>
  );
}

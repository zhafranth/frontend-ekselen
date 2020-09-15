import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

// Logo
import Logo from "Assets/Images/logo.png";

export default function index(props) {
  return (
    <div className="nav-collapse container">
      <div className="logo-btn">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-btn">
        <div className="navbar-btn-item item-btn-toogle">
          <Link className="navbar-btn-hover">Course Category</Link>
          <ul className="list-kategori-nav">
            {props.data.map((item, i) => {
              return (
                <li className="list-kategori-nav-item" key={`kategori-nav${i}`}>
                  <Link
                    className="list-kategori-link"
                    to={`/kategori/${item.id}`}
                  >
                    <img src={item.icon} alt="" /> {item.nama}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-btn-item">
          <Link className="navbar-btn-item" to="/kategori/career-ready-program">
            Career Category Program
          </Link>
        </div>
        <div className="navbar-btn-item">
          <Link className="navbar-btn-item" to="/about-ekselen">
            About
          </Link>
        </div>
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

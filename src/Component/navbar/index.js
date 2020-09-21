import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setKategori } from "Store/Action/kategoriAction";

// Logo
import Logo from "Assets/Images/logo.png";

function Navbar(props) {
  const handleClickKategori = (idSlug) => {
    props.setKategori(idSlug);
  };
  // console.log(kategoriSlug);
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
                    onClick={() => handleClickKategori(item.id)}
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
        <Link className="btn-login" to="/login">
          Login
        </Link>
        <Link className="btn-register">Register</Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    kategoriAktif: state.kategoriReducer.kategoriAktif,
  };
};

const mapStateToDispatch = {
  setKategori,
};

export default connect(mapStateToProps, mapStateToDispatch)(Navbar);

import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setKategori } from "Store/Action/kategoriAction";
import { useDispatch } from "react-redux";

// Icon
import { TiUser } from "react-icons/ti";
import { CgLogOut } from "react-icons/cg";

// Logo
import Logo from "Assets/Images/logo.png";

// Image
import ImageProfile from "Assets/Images/img-profile-navbar.png";

function Navbar(props) {
  const handleClickKategori = (idSlug) => {
    props.setKategori(idSlug);
  };
  // console.log(kategoriSlug);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({
      type: "SET_LOGIN_STATUS",
      payload: false,
    });
  };

  if (props.isMateriPage) {
    return (
      <header className="header">
        <div className="nav-collapse-materi-page">
          <div className="logo-btn">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <h3 className="title-navbar">{props.title}</h3>
        </div>
      </header>
    );
  }
  if (props.isLogin) {
    return (
      <div className="nav-collapse container">
        <div className="logo-btn">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-btn">
          <div className="navbar-btn-item item-btn-toogle">
            <button className="navbar-btn-hover">Course Category</button>
            <ul className="list-kategori-nav">
              {props.data.map((item, i) => {
                return (
                  <li
                    className="list-kategori-nav-item"
                    key={`kategori-nav${i}`}
                  >
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
            <Link
              className="navbar-btn-item"
              to="/kategori/career-ready-program"
            >
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
        <div className="navbar-profile">
          <Link
            to="/kelas-saya/progress/semua-kelas"
            className="kelas-saya-navbar"
          >
            Kelas Saya
          </Link>
          <button className="img-profile-navbar">
            <img src={ImageProfile} alt="" />
            <ul className="profile-navbar">
              <li className="profile-navbar-item">
                <Link
                  to="/profile/edit-profile"
                  className="profile-navbar-link"
                >
                  <TiUser /> Profile
                </Link>
              </li>
              <li className="profile-navbar-item">
                <Link
                  to="/"
                  className="profile-navbar-link"
                  onClick={handleClose}
                >
                  <CgLogOut /> Keluar
                </Link>
              </li>
            </ul>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="nav-collapse container">
      <div className="logo-btn">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-btn">
        <div className="navbar-btn-item item-btn-toogle">
          <button className="navbar-btn-hover">Course Category</button>
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
        <Link className="btn-register" to="/register">
          Register
        </Link>
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

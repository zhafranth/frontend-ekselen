import React from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import "./index.scss";

// Image
import ImageKelasKosong from "Assets/Images/kelas-kosong.png";

import CardProgressKelas from "./CardProgressKelas";

export default function KelasSaya(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="kelas-saya-page">
          <div className="sidebar-menu">
            <NavLink
              className="sidebar-menu-item "
              to="/kelas-saya/progress/semua-kelas"
              activeClassName="sidebar-menu-item-active"
            >
              Semua Kelas
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/progress/progress-kelas"
              activeClassName="sidebar-menu-item-active"
            >
              Progress
            </NavLink>
            <NavLink
              className="sidebar-menu-item"
              to="/kelas-saya/progress/lulus"
              activeClassName="sidebar-menu-item-active"
            >
              Lulus
            </NavLink>
          </div>
          <Switch>
            <Route path="/kelas-saya/progress/semua-kelas">
              <CardProgressKelas data={props.data} />
            </Route>
            <Route path="/kelas-saya/progress/progress-kelas">
              <CardProgressKelas data={props.data} />
            </Route>
            <Route path="/kelas-saya/progress/lulus">
              <div className="container kelas-kosong">
                <div className="row">
                  <div className="img-kelas-kosong">
                    <img src={ImageKelasKosong} alt="" />
                  </div>
                  <h3>Kamu belum memiliki kelas</h3>
                  <p>Silahkan kembali kehalaman kategori untuk membeli kelas</p>
                  <Link to="/" className="btn-kelas-kosong">
                    Kategori Kelas
                  </Link>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

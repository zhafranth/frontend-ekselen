import React, { Component } from "react";
import Layout from "Component/layout/index";
import { Switch, NavLink, Route } from "react-router-dom";

// Image
import ProfileImage from "Assets/Images/profile-page-image.png";

export default class ProfilePage extends Component {
  state = {
    title: "Profile",
  };
  render() {
    return (
      <Layout kelasSaya>
        <div className="section-profile">
          <div className="container edit-profil">
            <div className="card-profil">
              <h3 className="title-profil">Edit {this.state.title}</h3>
              <div className="button-profil">
                <NavLink
                  to="/profile/edit-profile"
                  className=" btn-profil-section"
                  onClick={() => this.setState({ title: "Profile" })}
                  activeClassName="active-class-profile"
                >
                  Profil
                </NavLink>
                <NavLink
                  to="/profile/edit-password"
                  className=" btn-profil-password"
                  onClick={() => this.setState({ title: "Kata Sandi" })}
                  activeClassName="active-class-profile"
                >
                  Password
                </NavLink>
              </div>
              <Switch>
                <Route path="/profile/edit-profile">
                  <div className="row mt-4">
                    <div className="col-2">
                      <div className="img-profil">
                        <img src={ProfileImage} alt="" />
                        <button className="btn btn-change-pic" type="button">
                          Ganti
                        </button>
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="form-edit-profil">
                        <form>
                          <div className="form-group row">
                            <label className="col-3">Nama Lengkap</label>
                            <input
                              type="text"
                              className="form-control col"
                              placeholder="Nama Lengkap"
                            />
                          </div>
                          <div className="form-group row">
                            <label className="col-3">Email</label>
                            <input
                              type="email"
                              className="form-control col"
                              placeholder="Email"
                            />
                          </div>
                          <div className="form-group row">
                            <label className="col-3"> Nomor Handphone</label>
                            <input
                              type="tel"
                              className="form-control col"
                              placeholder="Nomor Handphone"
                            />
                          </div>

                          <div className="form-group row">
                            <label className="col-3">Tanggal Lahir</label>
                            <input
                              type="date"
                              className="form-control col"
                              placeholder="Tanggal Lahir"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/profile/edit-password">
                  <div className="row mt-4 justify-content-center">
                    <div className="col-9">
                      <div className="form-edit-profil">
                        <form>
                          <div className="form-group row">
                            <label className="col-3">Kata Sandi Lama</label>
                            <input
                              type="password"
                              className="form-control col"
                              placeholder="Katasandi lama"
                            />
                          </div>
                          <div className="form-group row">
                            <label className="col-3">Kata Sandi Baru</label>
                            <input
                              type="password"
                              className="form-control col"
                              placeholder="Katasandi Baru"
                            />
                          </div>
                          <div className="form-group row">
                            <label className="col-3">
                              Konfirmasi Kata Sandi
                            </label>
                            <input
                              type="password"
                              className="form-control col"
                              placeholder="Konfirmasi Katasandi"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Route>
              </Switch>
              <div className="row justify-content-center mt-5">
                <button className="btn btn-simpan-edit" type="button">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

import React, { Component } from "react";
import Layout from "Component/layout";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";

export default class MateriKelasPage extends Component {
  render() {
    return (
      <div className="materi-kelas">
        <Navbar isMateriPage />
        <div className="materi-kelas-konten">
          <SideBar />
          <h1>Hello from materi Kelas Page</h1>
        </div>
      </div>
    );
  }
}

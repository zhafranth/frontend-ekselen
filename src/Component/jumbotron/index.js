import React from "react";
import "./index.scss";

// Images Jumbotron
import ImgJumbotron from "Assets/Images/Jumbotron.png";

export default function index() {
  return (
    <div className="container-fluid hero p-0">
      <img src={ImgJumbotron} alt="" className="img-fluid" />
      <div className="konten-hero">
        <h3 className="title-hero">Mulai Bangun Karir Profesional</h3>
        <p>
          Dengan Ekselen.id kembangkan diri anda dan skill untuk yang lebih baik
        </p>
        <button className="btn btn-hero" type="button">
          Mulai Belajar
        </button>
      </div>
    </div>
  );
}

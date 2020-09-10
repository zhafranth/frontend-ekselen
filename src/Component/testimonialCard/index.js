import React from "react";
import "./index.scss";

// img
import ImgTestimoniUser from "Assets/Images/user-testimoni.png";

export default function index() {
  return (
    <div className="card-testimoni">
      <div className="user-testimoni">
        <img src={ImgTestimoniUser} alt="" />
        <div className="user-info-testimoni">
          <h5>Dimas Dermawan</h5>
          <p>Mahasiswa</p>
        </div>
      </div>
      <div className="user-konten-testimoni">
        <p>Materi yang disajikan sangat interaktif dan mudah untuk dipahami</p>
      </div>
    </div>
  );
}

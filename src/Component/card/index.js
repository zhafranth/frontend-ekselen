import React from "react";
import "./index.scss";
import StarRatings from "react-star-ratings";

// Image Card
import ImgCard from "Assets/Images/card-image.png";
import ImgCardPhoto from "Assets/Images/card-foto.png";
import StackLessonIcon from "Assets/Images/icon-card-kelas.png";
import ClockIcon from "Assets/Images/icon2-card-kelas.png";

export default function index() {
  return (
    <div className="card card-product">
      <img className="card-img-top" src={ImgCard} alt="Card image cap" />
      <div className="card-body">
        <h4 className="kategori-kelas">Teknik</h4>
        <h2 className="judul-kelas">Keselamatan dan Kesehatan Kerja</h2>
        <div className="instruktur-kelas-card">
          <img
            src={ImgCardPhoto}
            alt="instruktur"
            className="foto-profil-card"
          />
          <div className="instruktur-kelas">
            <h5 className="nama-instruktur-kelas">Zhafran Tharif</h5>
            <p className="pekerjaan-instruktur-kelas">Data Analys</p>
          </div>
        </div>
        <div className="rating-kelas">
          <div className="star-kelas">
            <StarRatings
              numberOfStars={5}
              rating={4}
              starRatedColor="#FFCC47"
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <p className="nilai-kelas">5.0</p>
        </div>
        <div className="border" />
        <div className="info-detail-kelas">
          <div className=" info-detail-kelas-item">
            <img src={StackLessonIcon} alt="" />
            <span>10 Lessons</span>
          </div>
          <div className=" info-detail-kelas-item">
            <img src={ClockIcon} alt="" />
            <span>10 Hour</span>
          </div>
        </div>
        <div className="info-harga-kelas justify-content-between">
          <div>
            <h4 className="harga-kelas">Rp. 520.000</h4>
          </div>
          <div>
            <h4 className="harga-diskon-kelas">Rp. 250.000</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

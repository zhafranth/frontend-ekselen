import React from "react";
import "./index.scss";
import StarRatings from "react-star-ratings";

// Image
import ImgInstruktur from "Assets/Images/instruktur-profile-hero-detail.png";
import VideoOverview from "Assets/Images/video-overview.png";

export default function index() {
  return (
    <div className="section hero-detail">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
        <div className="row justify-content-between">
          <div className="col">
            <div className="konten-hero-detail">
              <h3>Practice For Great UI Design</h3>
              <p>
                Tingkatkan potensi penjualan dengan User Interface yang lebih
                menarik user.
              </p>
              <div className="row rating-kelas">
                <div className="col-3 star-kelas">
                  <StarRatings
                    numberOfStars={5}
                    rating={4}
                    starRatedColor="#FFCC47"
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
                <div className="col">
                  <h5>Marketing</h5>
                </div>
              </div>
              <div className="row instruktur-profil-detail-hero">
                <div className="col-1">
                  <img src={ImgInstruktur} alt="" />
                </div>
                <div className="col">
                  <h4>John Doe</h4>
                  <p>Product Designer at Ekselen.id</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <img src={VideoOverview} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

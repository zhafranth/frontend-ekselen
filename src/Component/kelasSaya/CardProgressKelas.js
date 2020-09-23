import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Progress from "react-progressbar";

// Image
import ImgCard from "Assets/Images/img-card-progress.png";
import VideoIcong from "Assets/Images/video-icon.svg";
import ListMateriIcon from "Assets/Images/list-materi-icon.svg";

export default function CardProgressKelas() {
  return (
    <div className="card-progress">
      <div className="img-card-progress">
        <img src={ImgCard} alt="" />
      </div>
      <div className="konten-card-progress">
        <h4 className="title-card-progress">Practive for Great UI Design</h4>
        <div className="progress-bar-item">
          <Progress completed={80} />
          <h5>80%</h5>
        </div>
        <div className="konten-card-progress-info">
          <div className="kontent-card-progress-info-item">
            <img src={VideoIcong} alt="" />
            <h5>10/10 Video Selesai</h5>
          </div>
          <div className="kontent-card-progress-info-item">
            <img src={ListMateriIcon} alt="" />
            <h5>3/5 Kuis Selesai</h5>
          </div>
          <div className="btn-progress">
            <Link to="/materi/marketing/materi-1" className="btn-progress-item">
              Lanjut Kelas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

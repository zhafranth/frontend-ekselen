import React from "react";
import "./index.scss";
import { Carousel, Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";

// Component
import Card from "Component/card";

export default function index() {
  return (
    <div className="section">
      <div className="container list-rekomendasi">
        <h2 className="title">
          Rekomendasi <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="btn-kategori-a">
          <Link className=" btn-kategori-item">Kelas Populer</Link>
          <Link className="btn-kategori-item btn-active">Kelas Terbaru</Link>
          <Link className=" btn-kategori-item">Career Ready Program</Link>
        </div>
        <Carousel slidesToShow={4} slidesToScroll={1} autoplay dots={false}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
}

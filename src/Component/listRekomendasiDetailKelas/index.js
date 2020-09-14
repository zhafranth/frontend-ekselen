import React from "react";
import "./index.scss";
import { Carousel } from "antd";
import Card from "Component/card";

export default function index() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title-detail-kelas">
          Rekomendasi <span>Kelas</span>
        </h3>
        <div className="border-title" />
        <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
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

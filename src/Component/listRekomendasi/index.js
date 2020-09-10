import React from "react";
import "./index.scss";
import { Carousel, Row, Col } from "antd";
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
        <div className="btn-kategori">
          <Link className="btn btn-kategori-item">Kelas Populer</Link>
          <Link className="btn btn-kategori-item btn-active">
            Kelas Terbaru
          </Link>
          <Link className="btn btn-kategori-item">Career Ready Program</Link>
        </div>
        <Row>
          <Carousel slidesToScroll={1} slidesToShow={4} dots={false}>
            <Col span={6} className="gutter-row">
              <Card />
            </Col>
            <Col span={6} className="gutter-row">
              <Card />
            </Col>
            <Col span={6} className="gutter-row">
              <Card />
            </Col>
            <Col span={6} className="gutter-row">
              <Card />
            </Col>
            <Col span={6} className="gutter-row">
              <Card />
            </Col>
          </Carousel>
        </Row>
      </div>
    </div>
  );
}

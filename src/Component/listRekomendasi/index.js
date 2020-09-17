import React from "react";
import "./index.scss";
import { Carousel, Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";

// Component
import Card from "Component/card";

export default function index(props) {
  return (
    <div className="section">
      <div className="container list-rekomendasi">
        <h2 className="title">
          Rekomendasi <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="btn-kategori-a">
          <Link className=" btn-kategori-item">Kelas Populer</Link>
          <Link className="btn-kategori-item ">Kelas Terbaru</Link>
          <Link className=" btn-kategori-item btn-active">
            Career Ready Program
          </Link>
        </div>
        <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
          {props.data.map((item, i) => {
            return (
              <Card
                key={`kelas-${i}`}
                judul={item.judul}
                instrukturPhoto={item.instruktur.photo}
                instrukturNama={item.instruktur.nama}
                instrukturRole={item.instruktur.role}
                rate={item.rate}
                jumMateri={item.totalMateri}
                jumJam={item.totalJam}
                harga={item.harga}
                diskon={item.diskon}
                benefit={item.benefit}
                cover={item.imgCover}
                kategori={item.kategori}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./index.scss";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

// Component
import Card from "Component/card";

export default function ListRekomendasi({ data }) {
  const [idButton, setIdButton] = useState("kelasPopuler");
  const [dataKelas, setDataKelas] = useState([]);

  const handleActiveClass = (idBtn) => {
    setIdButton(idBtn);
    if (idBtn === "kelasPopuler") {
      const kelasPopulerProduct = data.filter(
        (item) => item.kelasPopuler === true
      );
      setDataKelas(kelasPopulerProduct);
    } else if (idBtn === "kelasTerbaru") {
      const kelasTerbaruProduct = data.filter(
        (item) => item.kelasTerbaru === true
      );
      setDataKelas(kelasTerbaruProduct);
    } else if (idBtn === "careerReady") {
      const careerReadyProduct = data.filter(
        (item) => item.careerReady === true
      );
      setDataKelas(careerReadyProduct);
    }
  };
  const activeClass = (classActive) => {
    return idButton === classActive ? " btn-active" : "";
  };
  console.log(dataKelas.length);
  return (
    <div className="section">
      <div className="container list-rekomendasi">
        <h2 className="title">
          Rekomendasi <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="btn-kategori-a">
          <Link
            className={`btn-kategori-item ${activeClass("kelasPopuler")}`}
            onClick={() => handleActiveClass("kelasPopuler")}
          >
            Kelas Populer
          </Link>
          <Link
            className={`btn-kategori-item ${activeClass("kelasTerbaru")}`}
            onClick={() => handleActiveClass("kelasTerbaru")}
          >
            Kelas Terbaru
          </Link>
          <Link
            className={`btn-kategori-item ${activeClass("careerReady")}`}
            onClick={() => handleActiveClass("careerReady")}
          >
            Career Ready Program
          </Link>
        </div>
        <Carousel slidesToScroll={1} slidesToShow={4} autoplay dots={false}>
          {dataKelas.length === 0
            ? data
                .filter((item) => item.kelasPopuler === true)
                .map((itemindex0, i) => {
                  return (
                    <Card
                      key={`kelas-${i}`}
                      judul={itemindex0.judul}
                      instrukturPhoto={itemindex0.instruktur.photo}
                      instrukturNama={itemindex0.instruktur.nama}
                      instrukturRole={itemindex0.instruktur.role}
                      rate={itemindex0.rate}
                      jumMateri={itemindex0.totalMateri}
                      jumJam={itemindex0.totalJam}
                      harga={itemindex0.harga}
                      diskon={itemindex0.diskon}
                      benefit={itemindex0.benefit}
                      cover={itemindex0.imgCover}
                      kategori={itemindex0.kategori}
                      slug={itemindex0.slug}
                    />
                  );
                })
            : dataKelas.map((itemKelas, index) => {
                return (
                  <Card
                    key={`kelas-${index}`}
                    judul={itemKelas.judul}
                    instrukturPhoto={itemKelas.instruktur.photo}
                    instrukturNama={itemKelas.instruktur.nama}
                    instrukturRole={itemKelas.instruktur.role}
                    rate={itemKelas.rate}
                    jumMateri={itemKelas.totalMateri}
                    jumJam={itemKelas.totalJam}
                    harga={itemKelas.harga}
                    diskon={itemKelas.diskon}
                    benefit={itemKelas.benefit}
                    cover={itemKelas.imgCover}
                    kategori={itemKelas.kategori}
                    slug={itemKelas.slug}
                  />
                );
              })}
        </Carousel>
      </div>
    </div>
  );
}

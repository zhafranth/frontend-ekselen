import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroKategori from "Component/heroKategori";
import Card from "Component/card";
import PromoBanner from "Component/promoBanner";
import ListCategory from "Component/listKategori";

import DataKelas from "JSON/kelas.json";
import Data from "JSON/landingPage.json";

import { Link } from "react-router-dom";

export default class KategoriPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slugId,
    };
  }
  render() {
    console.log(this.state.slug);
    return (
      <Layout>
        <HeroKategori />
        <div className="container mb-5">
          <div className="row">
            {DataKelas.kelas.map((item, i) => {
              return (
                <div className="col-3" key={`col-rek-${i}`}>
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
                </div>
              );
            })}
          </div>
          <Link to={`/kategori/contoh`}>Contoh</Link>
        </div>
        <PromoBanner />
        <ListCategory data={Data.kategori} />
      </Layout>
    );
  }
}

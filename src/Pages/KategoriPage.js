import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroKategori from "Component/heroKategori";
import Card from "Component/card";

import DataKelas from "JSON/kelas.json";

import { connect } from "react-redux";

class KategoriPage extends Component {
  state = {
    slugId: this.props.match.params.slugKategori,
  };
  getProduct = (slug) => {
    if (slug === "") {
      const newData = DataKelas.kelas.filter(
        (item) => item.kategori === this.state.slugId
      );
      return newData;
    } else {
      const newData = DataKelas.kelas.filter((item) => item.kategori === slug);
      return newData;
    }
  };
  render() {
    const { kategoriAktif, isLogin } = this.props;
    const kelas = this.getProduct(kategoriAktif);
    console.log(isLogin);
    return (
      <Layout>
        <HeroKategori />
        <div className="container mb-5">
          <div className="row">
            {kelas.map((item, i) => {
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
                    slug={item.slug}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    kategoriAktif: state.kategoriReducer.kategoriAktif,
    isLogin: state.loginReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(KategoriPage);

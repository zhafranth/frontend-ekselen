import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";
import { connect } from "react-redux";

import DataKelas from "JSON/kelas.json";

class DetailPage extends Component {
  state = {
    slugDetailPage: this.props.match.params.slugDetailKelas,
  };
  getProductDetailKelas = (slugAktifKelas) => {
    if (slugAktifKelas === "") {
      const kelasTemp = DataKelas.kelas.filter(
        (item) => item.slug === this.state.slugDetailPage
      );
      const ObjectKelas = Object.assign({}, ...kelasTemp);
      return ObjectKelas;
    } else {
      const kelasTemp = DataKelas.kelas.filter(
        (item) => item.slug === slugAktifKelas
      );
      const ObjectKelas = Object.assign({}, ...kelasTemp);
      return ObjectKelas;
    }
  };
  render() {
    const { slugKelas } = this.props;
    const kelasDetail = this.getProductDetailKelas(slugKelas);
    console.log(kelasDetail.instruktur.nama);

    return (
      <Layout>
        <HeroDetail
          judul={kelasDetail.judul}
          rate={kelasDetail.rate}
          instrukturName={kelasDetail.instruktur.nama}
          instrukturRole={kelasDetail.instruktur.role}
          instrukturImg={kelasDetail.instruktur.photo}
        />
        <KontenDetail />
        <ListRekomendasiDetail data={DataKelas.kelas} />
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    slugKelas: state.kelasReducer.slugKelas,
  };
};

export default connect(mapStateToProps, null)(DetailPage);

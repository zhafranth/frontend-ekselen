import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";

export default class DetailPage extends Component {
  render() {
    return (
      <Layout>
        <HeroDetail />
        <KontenDetail />
        <ListRekomendasiDetail />
      </Layout>
    );
  }
}

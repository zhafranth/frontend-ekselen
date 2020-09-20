import React, { Component } from "react";
import Layout from "Component/layout/index";

// Data
import Data from "JSON/landingPage.json";
import DataKelas from "JSON/kelas.json";

// Component
import Jumbotron from "Component/jumbotron";
import ListRekomendasi from "Component/listRekomendasi/ListRekomendasi";
import ListKategori from "Component/listKategori";
import ListBenefit from "Component/listBenefit";
import PromoBanner from "Component/promoBanner";
import ListTetsimoni from "Component/listTestimoniCard";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron />
        <ListRekomendasi data={DataKelas.kelas} />
        <ListKategori data={Data.kategori} />
        <ListBenefit />
        <PromoBanner />
        <ListTetsimoni data={Data.testimoni} />
      </Layout>
    );
  }
}

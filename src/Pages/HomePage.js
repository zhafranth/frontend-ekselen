import React, { Component } from "react";
import Layout from "Component/layout/index";

// Data
import Data from "JSON/landingPage.json";

// Component
import Jumbotron from "Component/jumbotron";
import ListRekomendasi from "Component/listRekomendasi";
import ListKategori from "Component/listKategori";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron />
        <ListRekomendasi />
        <ListKategori data={Data.kategori} />
      </Layout>
    );
  }
}

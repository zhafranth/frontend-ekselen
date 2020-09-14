import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroKategori from "Component/heroKategori";
import Card from "Component/card";
import PromoBanner from "Component/promoBanner";

export default class KategoriPage extends Component {
  render() {
    return (
      <Layout>
        <HeroKategori />
        <div className="container mb-5">
          <div className="row">
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
          </div>
        </div>
        <PromoBanner />
      </Layout>
    );
  }
}

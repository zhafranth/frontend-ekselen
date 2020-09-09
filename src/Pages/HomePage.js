import React, { Component } from "react";
import Layout from "Component/layout/index";

// Component
import Jumbotron from "Component/jumbotron";
import ListRekomendasi from "Component/listRekomendasi";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron />
        <ListRekomendasi />
      </Layout>
    );
  }
}

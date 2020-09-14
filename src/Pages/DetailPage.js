import React, { Component } from "react";
import Layout from "Component/layout/index";
import HeroDetail from "Component/heroDetail";

export default class DetailPage extends Component {
  render() {
    return (
      <Layout>
        <HeroDetail />
      </Layout>
    );
  }
}

import React, { Component } from "react";
import Layout from "Component/layout/index";

// Component
import Jumbotron from "Component/jumbotron";

export default class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="section">
          <Jumbotron />
          <div className="container">
            <h1>Hello from Home Page</h1>
          </div>
        </div>
      </Layout>
    );
  }
}

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Row, Col } from "antd";
import Card from "Component/card";

// Data
import Data from "JSON/landingPage.json";

// Component Test
import Jumbotron from "Component/jumbotron"; /**Done */
import ExampleComp from "Component/example/example";
import CategoryBtn from "Component/kategoriButton";
import Navbar from "Component/navbar";
import Layout from "Component/layout";
import ListRekomendasi from "Component/listRekomendasi";
import ListKategori from "Component/listKategori";

export default class ExamplePage extends Component {
  render() {
    return (
      <div className="section-example">
        <div className="container">
          <ListKategori data={Data.kategori} />
        </div>
      </div>
    );
  }
}

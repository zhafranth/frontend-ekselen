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
import ListBenefit from "Component/listBenefit";
import PromoBanner from "Component/promoBanner";
import CardTestimoni from "Component/testimonialCard";
import ListTestimoniCard from "Component/listTestimoniCard";
import Footer from "Component/footer";

import HeroKategori from "Component/heroKategori";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";

export default class ExamplePage extends Component {
  render() {
    return (
      <>
        <HeroDetail />
        <KontenDetail />
        <ListRekomendasiDetail />
      </>
    );
  }
}

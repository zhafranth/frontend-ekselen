import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Row, Col } from "antd";
import Card from "Component/card";
import Layout from "Component/layout";

// Data
import Data from "JSON/landingPage.json";
import DataKelas from "JSON/kelas.json";

// Component Test
import Jumbotron from "Component/jumbotron"; /**Done */
import CategoryBtn from "Component/kategoriButton";
import Navbar from "Component/navbar";
import Layout1 from "Component/layout";
import ListRekomendasi from "Component/listRekomendasi/ListRekomendasi";
import ListKategori from "Component/listKategori";
import ListBenefit from "Component/listBenefit";
import PromoBanner from "Component/promoBanner";
import CardTestimoni from "Component/testimonialCard";
import ListTestimoniCard from "Component/listTestimoniCard";
import Footer1 from "Component/footer";
import ExampleComp from "Component/listMateri/ListMateri";

import HeroKategori from "Component/heroKategori";
import HeroDetail from "Component/heroDetail";
import KontenDetail from "Component/kontenKelasDetail";
import ListRekomendasiDetail from "Component/listRekomendasiDetailKelas";

import Dummy from "JSON/dummy.json";
import Kelas from "JSON/kelas.json";
// const { Header, Content, Footer } = Layout;
export default class ExamplePage extends Component {
  render() {
    return <Navbar isMateriPage />;
  }
}

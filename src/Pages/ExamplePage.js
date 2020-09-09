import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import Card from "Component/card";

// Component Test
import Jumbotron from "Component/jumbotron";

export default class ExamplePage extends Component {
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    );
  }
}

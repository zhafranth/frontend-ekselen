import React from "react";
import "./index.scss";
import TestimoniCard from "Component/testimonialCard";
import { Carousel } from "antd";

export default function index(props) {
  return (
    <div className="section">
      <div className="container list-testimoni">
        <h2 className="title">
          Cerita <span className="font-weight-bold">Pembelajar</span>
        </h2>
        <Carousel
          slidesPerRow={1}
          slidesToScroll={1}
          slidesToShow={2}
          infinite
          autoplay
          dots
          className="scroll"
        >
          {props.data.map((item, index) => {
            return (
              <TestimoniCard
                key={`card-testimoni-${index}`}
                img={item.img}
                nama={item.nama}
                role={item.role}
                testimoni={item.testimoni}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

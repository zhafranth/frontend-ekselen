import React from "react";
import "./index.scss";
import TestimoniCard from "Component/testimonialCard";
import { Carousel } from "antd";

// Arrow
import Next from "Assets/Images/next.png";
import Previous from "Assets/Images/previous.png";

function ArrowNext(props) {
  const { style, onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#2F3C80",
        borderRadius: "30px",
        width: "62px",
        height: "62px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <img src={Next} alt="" />
    </div>
  );
}
function ArrowPrev(props) {
  const { style, onClick, className } = props;
  return (
    <div
      className={className}
      style={{
        backgroundColor: "#2F3C80",
        borderRadius: "30px",
        width: "62px",
        height: "62px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "99",
      }}
      onClick={onClick}
    >
      <img src={Previous} alt="" />
    </div>
  );
}

export default function index(props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    className: "scroll",
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
  };
  return (
    <div className="section">
      <div className="container list-testimoni">
        <h2 className="title">
          Cerita <span className="font-weight-bold">Pembelajar</span>
        </h2>
        <Carousel {...settings} arrows>
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

import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import IconImg from "Assets/Images/kategori-icon1.svg";

export default function index(props) {
  return (
    <Link className="btn-kategori" to={`/kategori/${props.slug}`}>
      <img src={props.icon} alt="icon image" className="icon-img" />{" "}
      <span>{props.nama}</span>
    </Link>
  );
}

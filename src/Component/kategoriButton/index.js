import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function index(props) {
  return (
    <Link className="btn-kategori" to={`/kategori/${props.slug}`}>
      <img
        src={props.icon}
        alt={`kategori-${props.name}`}
        className="icon-img"
      />
      <span>{props.nama}</span>
    </Link>
  );
}

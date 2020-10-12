import React from "react";
import "./index.scss";

export default function index(props) {
  return (
    <div className="card-testimoni">
      <div className="user-testimoni">
        <img src={props.img} alt="" />
        <div className="user-info-testimoni">
          <h5>{props.nama}</h5>
          <p>{props.role}</p>
        </div>
      </div>
      <div className="user-konten-testimoni">
        <p>{props.testimoni}</p>
      </div>
    </div>
  );
}

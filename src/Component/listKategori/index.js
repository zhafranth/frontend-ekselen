import React from "react";
import KategoriBtn from "Component/kategoriButton";

import "./index.scss";
import { Kategori } from "Pages";

export default function index(props) {
  return (
    <div className="section">
      <div className="container list-kategori">
        <h2 className="title">
          Kategori <span className="font-weight-bold">Kelas</span>
        </h2>
        <div className="kategori">
          <div className="row">
            {props.data.map((item, index) => {
              return (
                <div className="col-2" key={`kategori-${index}`}>
                  <KategoriBtn
                    icon={item.icon}
                    nama={item.nama}
                    slug={item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

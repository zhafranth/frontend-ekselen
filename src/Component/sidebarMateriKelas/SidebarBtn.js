import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SidebarBtn(props) {
  const [idButton, setIdButton] = useState("");
  const { slugKelas } = useParams();

  const handleClikId = () => {
    return setIdButton(idButton === "" ? "sidebar-isopen" : "");
  };

  const { title, materi } = props;

  console.log(slugKelas);
  return (
    <div className="sidebar-bab">
      <button className="sidebar-bab-btn" type="button" onClick={handleClikId}>
        {title}
      </button>
      <ul className={`sidebar-subbab ${idButton}`}>
        {materi.map((item, i) => {
          return (
            <li className="sidebar-subbab-item" key={`list-materi-kelas-${i}`}>
              <Link
                className="sidebar-subbab-link"
                to={`/materi/${slugKelas}/${item.slugMateriKelas}`}
              >
                {item.titleSubBab}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

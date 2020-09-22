import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function SidebarBtn() {
  const [idButton, setIdButton] = useState("");

  const handleClikId = () => {
    return setIdButton(idButton === "" ? "sidebar-isopen" : "");
  };
  return (
    <div className="sidebar-bab">
      <button className="sidebar-bab-btn" type="button" onClick={handleClikId}>
        Pendahuluan
      </button>
      <ul className={`sidebar-subbab ${idButton}`}>
        <li className="sidebar-subbab-item">
          <Link className="sidebar-subbab-link">Introduction</Link>
        </li>
        <li className="sidebar-subbab-item">
          <Link className="sidebar-subbab-link">Introduction</Link>
        </li>
        <li className="sidebar-subbab-item">
          <Link className="sidebar-subbab-link">Introduction</Link>
        </li>
      </ul>
    </div>
  );
}

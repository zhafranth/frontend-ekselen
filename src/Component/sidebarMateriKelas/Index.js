import React, { useState } from "react";
import "./index.scss";
import SidebarBtn from "./SidebarBtn";

export default function Index() {
  return (
    <div className="sidebar-materi-kelas">
      <h2 className="title-sidebar">Konten Kelas</h2>
      <SidebarBtn />
      <SidebarBtn />
      <SidebarBtn />
      <SidebarBtn />
    </div>
  );
}

import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";
import { connect } from "react-redux";
import VideoDummy from "Assets/Images/5.mp4";

// Data
import DataKelas from "JSON/kelasSaya.json";

function MateriKelasPage(props) {
  const { slugKelas, slugMateri } = useParams();
  const { slugMateriKelas } = props;
  console.log(slugKelas);

  const Data = Object.assign({}, ...DataKelas.kelas);
  return (
    <div className="materi-kelas">
      <Navbar isMateriPage title={Data.judul} />
      <div className="materi-kelas-konten">
        <SideBar data={Data} />
        <div className="konten-materi-kelas">
          <Switch>
            <Route path={`/materi/${slugKelas}/${slugMateri}`}>
              {/* <h1>{slugMateri}</h1> */}
              <video src={VideoDummy} controls />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    slugMateriKelas: state.materiReducer.slugMateriKelas,
  };
};

export default connect(mapStateToProps, null)(MateriKelasPage);

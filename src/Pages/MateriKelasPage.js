import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";
import { connect } from "react-redux";
import Kuis from "Component/kuis/Kuis";
import VideoDummy from "Assets/Images/5.mp4";

// Data
import DataKelas from "JSON/kelasSaya.json";

function MateriKelasPage(props) {
  const { slugKelas, slugMateri } = useParams();
  const { slugMateriKelas, type } = props;

  const Data = Object.assign({}, ...DataKelas.kelas);

  const getVideo = (slugK) => {
    // const videoTemp = {};
    for (let i = 0; i < Data.bab.length; i++) {
      for (let j = 0; j < Data.bab[i].materi.length; j++) {
        if (slugK === Data.bab[i].materi[j].slugMateriKelas) {
          return { ...Data.bab[i].materi[j] };
        }
      }
    }
  };
  const videoTemp = getVideo(slugMateri);
  console.log(videoTemp);
  return (
    <div className="materi-kelas">
      <Navbar isMateriPage title={Data.judul} />
      <div className="materi-kelas-konten">
        <SideBar data={Data} />
        <div className="konten-materi-kelas">
          <Switch>
            <Route path={`/materi/${slugKelas}/${slugMateri}`}>
              {/* <h1>{slugMateri}</h1> */}
              <video src={videoTemp.video} controls />
              {/* {type === "video" ? (
                <video src={videoTemp.video} controls />
              ) : (
                // <Kuis data={videoTemp.kuis} />
                ""
              )} */}
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
    type: state.materiReducer.type,
  };
};

export default connect(mapStateToProps, null)(MateriKelasPage);

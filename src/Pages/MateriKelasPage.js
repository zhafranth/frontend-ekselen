import React, { useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";
import { connect } from "react-redux";
import Kuis from "Component/kuis/Kuis";
import { setTypeMateri } from "Store/Action/materiAction";
import VideoPlayer from "Component/videoPlayer/VideoPlayer";

// Data
import DataKelas from "JSON/kelasSaya.json";

function MateriKelasPage(props) {
  const [typeMateri, setTypeMateri] = useState("");
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
  const activeSlug = () => {
    if (slugMateriKelas === "") {
      return slugMateri;
    } else {
      return slugMateriKelas;
    }
  };
  const videoTemp = getVideo(slugMateri);
  // setTypeMateri(type);

  const handleType = () => {
    return type;
  };
  console.log(type);
  return (
    <div className="materi-kelas">
      <Navbar isMateriPage title={Data.judul} />
      <div className="materi-kelas-konten">
        <SideBar data={Data} />
        <div className="konten-materi-kelas">
          <Switch>
            <Route path={`/materi/${slugKelas}/${activeSlug()}`}>
              {/* <h1>{slugMateri}</h1> */}
              {/* <video src={videoTemp.video} controls /> */}
              {handleType() === "kuis" ? (
                <Kuis data={videoTemp.kuis} />
              ) : (
                <VideoPlayer video={videoTemp.video} />
                // ""
              )}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MateriKelasPage);

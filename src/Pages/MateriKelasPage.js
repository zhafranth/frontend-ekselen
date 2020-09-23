import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Navbar from "Component/navbar";
import SideBar from "Component/sidebarMateriKelas/Index";
import { connect } from "react-redux";

function MateriKelasPage(props) {
  const { slugKelas, slugMateri } = useParams();
  const { slugMateriKelas } = props;
  console.log(slugMateriKelas);
  return (
    <div className="materi-kelas">
      <Navbar isMateriPage />
      <div className="materi-kelas-konten">
        <SideBar />
        <Switch>
          <Route path={`/materi/${slugKelas}/${slugMateri}`}>
            <h1>{slugMateri}</h1>
          </Route>
        </Switch>
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

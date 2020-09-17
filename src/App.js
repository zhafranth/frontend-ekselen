import React from "react";
import { Switch, Route } from "react-router-dom";
// import {
//   Home,
//   Detail,
//   Kategori,
//   Error,
//   Login,
//   Register,
//   Example,
//   About,
// } from "Pages";

import HomeComp from "Pages/HomePage";
import DetailComp from "Pages/DetailPage";
import ErrorComp from "Pages/ErrorPage";
import LoginComp from "Pages/LoginPage";
import RegisterComp from "Pages/RegisterPage";
import ExampleComp from "Pages/ExamplePage";
import AboutComp from "Pages/AboutPage";
import KategoriComp from "Pages/KategoriPage";

// Style Global
import "Assets/Scss/style.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomeComp} />
        <Route exact path="/kategori/:slugId" component={KategoriComp}></Route>
        <Route
          exact
          path="/kelas-detail/:slugDetailKelas"
          component={DetailComp}
        ></Route>
        <Route path="/login" component={LoginComp}></Route>
        <Route path="/register" component={RegisterComp}></Route>
        <Route path="/about-ekselen" component={AboutComp}></Route>
        <Route path="/example/:sampleSlug" component={ExampleComp}></Route>
        <Route component={ErrorComp}></Route>
      </Switch>
    </>
  );
}

export default App;

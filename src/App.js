import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Detail,
  Kategori,
  Error,
  Login,
  Register,
  Example,
  About,
} from "Pages";

// Style Global
import "Assets/Scss/style.scss";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/kategori/:slugKategori"
          component={Kategori}
        ></Route>
        <Route
          exact
          path="/kelas-detail/:slugDetailKelas"
          component={Detail}
        ></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/about-ekselen" component={About}></Route>
        <Route path="/example" component={Example}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;

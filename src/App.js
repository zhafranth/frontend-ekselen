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
        <Route path="/kategori/:slugKategori" component={Kategori} />
        <Route path="/kelas-detail/:slugDetailKelas" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about-ekselen" component={About} />
        <Route path="/example" component={Example} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

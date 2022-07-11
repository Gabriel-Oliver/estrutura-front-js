import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import CadastroUsuarios from "./pages/CadastroUsuarios";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/cadastroUsuarios" exact>
        <CadastroUsuarios />
      </Route>
    </Switch>
  );
}

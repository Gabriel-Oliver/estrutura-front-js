import React from "react";
import { HashRouter } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <HashRouter basename="/">
      <Routes />
    </HashRouter>
  );
}

export default App;

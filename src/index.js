import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";

import App from "./App";

ReactDOM.render(
  <SnackbarProvider
    maxSnack={3}
    anchorOrigin={{ horizontal: "bottom", vertical: "left" }}
    autoHideDuration={2500}
  >
    <App />
  </SnackbarProvider>,
  document.getElementById("root")
);

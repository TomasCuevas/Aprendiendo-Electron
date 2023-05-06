import React from "react";
import ReactDOM from "react-dom/client";

//* component *//
import { App } from "./App";

//* styles *//
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");

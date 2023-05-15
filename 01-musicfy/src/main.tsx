import React from "react";
import ReactDOM from "react-dom/client";

//* component *//
import { App } from "./App";

//* styles *//
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/scss/global.scss";

//* firebase *//
import "@/utils/firebase";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

postMessage({ payload: "removeLoading" }, "*");

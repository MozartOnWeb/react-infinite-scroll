import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ImagesProvider } from "./ImageContext";

ReactDOM.render(
  <ImagesProvider>
    <App />
  </ImagesProvider>,
  document.getElementById("root"),
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CountryProvider } from "./context";
import "./index.scss";

const mount = (el) => {
    ReactDOM.render( <React.StrictMode>
        <CountryProvider>
          <App />
        </CountryProvider>
      </React.StrictMode>, el);
  };

if (process.env.NODE_ENV === "development") {
    const rootNode = document.querySelector("#root");
    if (rootNode) {
        mount(rootNode);
    }
}
export { mount };

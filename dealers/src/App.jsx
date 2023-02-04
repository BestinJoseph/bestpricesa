import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Routers from "./Routers";

const App = () => (
  <div>
    <Routers />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

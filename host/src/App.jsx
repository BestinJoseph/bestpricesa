import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Routers from "./Routers";

const App = () => (
    <div className="container">
        <Routers />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

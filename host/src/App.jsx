import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Routers from "./Routers";

// welcome

const App = () => (
    <div className="container">
        <Routers />
    </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

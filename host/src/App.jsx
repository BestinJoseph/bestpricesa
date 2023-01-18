import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/lib/integration/react'

import "./index.css";

import Routers from "./Routers"
import {persistor, store} from './Store'
import Loading from './components/Loading'

const App = () => (
    <div className="container">
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <Routers />
            </PersistGate>
        </Provider>
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

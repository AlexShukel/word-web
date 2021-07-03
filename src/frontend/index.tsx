import React from "react";
import { render } from "react-dom";

import "./global.g.scss";

import { App } from "./components/App";
import { Electron } from "../shared/Electron";

declare global {
    interface Window {
        electron: Electron;
    }
}

render(<App />, document.getElementById("root"));

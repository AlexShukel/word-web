import React from "react";
import { render } from "react-dom";

import "./global.g.scss";

import { App } from "./components/App";
import { Api } from "../shared/Api";

declare global {
    interface Window {
        api: Api;
    }
}

render(<App />, document.getElementById("root"));

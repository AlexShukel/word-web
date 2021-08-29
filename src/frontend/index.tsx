import React from "react";
import { render } from "react-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createPluginArray, FormPlugins } from "@reactive-forms/core";
import { domPlugin } from "@reactive-forms/dom";

import "./global.g.scss";

import { App } from "./components/App";
import { PopupsController } from "./components/popups/PopupsContext";
import { WordsContextController } from "./components/WordsContext";
import { theme } from "./theme";
import { Api } from "../shared/Api";

declare global {
    interface Window {
        api: Api;
    }
}

const plugins = createPluginArray(domPlugin);

render(
    <FormPlugins plugins={plugins}>
        <ChakraProvider theme={extendTheme(theme)}>
            <PopupsController>
                <WordsContextController>
                    <App />
                </WordsContextController>
            </PopupsController>
        </ChakraProvider>
    </FormPlugins>,
    document.getElementById("root")
);

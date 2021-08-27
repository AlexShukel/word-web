import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createPluginArray, FormPlugins } from "@reactive-forms/core";
import { domPlugin } from "@reactive-forms/dom";

import { NewWordDefButton } from "./NewWordDefButton";
import { WordsContextController } from "./WordsContext";
import { theme } from "../theme";

const plugins = createPluginArray(domPlugin);

export const App = () => {
    return (
        <FormPlugins plugins={plugins}>
            <ChakraProvider theme={extendTheme(theme)}>
                <WordsContextController>
                    <div>
                        <NewWordDefButton />
                    </div>
                </WordsContextController>
            </ChakraProvider>
        </FormPlugins>
    );
};

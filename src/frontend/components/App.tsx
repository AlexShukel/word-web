import React from "react";

import { Button, ChakraProvider, extendTheme } from "@chakra-ui/react";

import { WordWebFormPopup } from "./popups/WordWebFormPopup";
import { WordsContextLoader } from "./WordsContext";
import { theme } from "../theme";

export const App = () => {
    return (
        <ChakraProvider theme={extendTheme(theme)}>
            <WordsContextLoader>
                <div>
                    <WordWebFormPopup
                        onSubmit={(values) => console.log(values)}
                        toggler={(onOpen) => (
                            <Button onClick={onOpen}>ADD NEW WORD-WEB</Button>
                        )}
                    />
                </div>
            </WordsContextLoader>
        </ChakraProvider>
    );
};

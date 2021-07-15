import React from "react";

import { Button, ChakraProvider, extendTheme } from "@chakra-ui/react";

import { WordWebForm } from "./forms/WordWebForm";
import { FormPopup } from "./popups/FormPopup";
import { WordsContextLoader } from "./WordsContext";
import { WordDef } from "../../shared/WordDef";
import { theme } from "../theme";

export const App = () => {
    return (
        <ChakraProvider theme={extendTheme(theme)}>
            <WordsContextLoader>
                <div>
                    <FormPopup<WordDef>
                        initialValues={{
                            word: "",
                            definition: "",
                            synonyms: [],
                            antonyms: [],
                            idioms: [],
                        }}
                        onSubmit={(values) => console.log(values)}
                        chakraPopupProps={{
                            // eslint-disable-next-line react/display-name
                            toggler: (onOpen) => (
                                <Button onClick={onOpen}>
                                    ADD NEW WORD-WEB
                                </Button>
                            ),
                            title: "Word-Web component form",
                        }}
                    >
                        <WordWebForm />
                    </FormPopup>
                </div>
            </WordsContextLoader>
        </ChakraProvider>
    );
};

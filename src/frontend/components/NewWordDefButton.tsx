import React from "react";

import { Button } from "@chakra-ui/react";

import { WordWebForm } from "./forms/WordWebForm";
import { FormPopup } from "./popups/FormPopup";
import { WordDef } from "../../shared/WordDef";
import { useWordsContext } from "../hooks/useWordsContext";
import { getUniqueId } from "../utils/getUniqueId";

export const NewWordDefButton = () => {
    const {
        appData: { words },
    } = useWordsContext();

    return (
        <FormPopup<WordDef>
            initialValues={{
                id: getUniqueId(words),
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
                    <Button onClick={onOpen}>ADD NEW WORD-WEB</Button>
                ),
                title: "Word-Web component form",
            }}
        >
            <WordWebForm />
        </FormPopup>
    );
};

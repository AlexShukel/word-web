import React from "react";

import { Button } from "@chakra-ui/react";

import { WordWebForm } from "./forms/WordWebForm";
import { Popup } from "./Popup";
import { useFormPopup } from "../hooks/useFormPopup";
import { useWordsContext } from "../hooks/useWordsContext";
import { getUniqueId } from "../utils/getUniqueId";

export const App = () => {
    const {
        appData: { words },
    } = useWordsContext();

    const [openForm] = useFormPopup({
        children: <WordWebForm />,
        title: "Word-Web component form",
        initialValues: {
            id: getUniqueId(words),
            word: "",
            definition: "",
            synonyms: [],
            antonyms: [],
            idioms: [],
        },
        onSubmit: () => {
            // TODO
        },
    });

    return (
        <React.Fragment>
            <div>
                <Button onClick={openForm}>ADD NEW WORD-WEB</Button>
            </div>

            <Popup />
        </React.Fragment>
    );
};

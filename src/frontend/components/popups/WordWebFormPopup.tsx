import React, { useRef } from "react";

import { FormikPopup, FormikPopupProps } from "./FormikPopup";
import { WordDef } from "../../types/WordDef";
import { WordWebForm } from "../forms/WordWebForm";

export const WordWebFormPopup = (
    props: Omit<
        FormikPopupProps<WordDef>,
        "title" | "initialValues" | "initialFocusRef"
    >
) => {
    const initialFocusRef = useRef<HTMLInputElement | null>(null);

    return (
        <FormikPopup<WordDef>
            initialValues={{
                word: "",
                definition: "",
                synonyms: [],
                antonyms: [],
                idioms: [],
            }}
            title="Word-Web component form"
            {...props}
            initialFocusRef={initialFocusRef}
        >
            <WordWebForm initialFocusRef={initialFocusRef} />
        </FormikPopup>
    );
};

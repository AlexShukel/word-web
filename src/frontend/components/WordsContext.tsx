import React, { createContext } from "react";

import { useWordsController } from "../hooks/useWordsController";
import { WordsController } from "../types/WordsController";

export const WordsContext = createContext<WordsController | undefined>(
    undefined
);

type WordsContextControllerProps = {
    children: React.ReactNode;
};

export const WordsContextController = ({
    children,
}: WordsContextControllerProps) => {
    const wordsController = useWordsController();

    return (
        <WordsContext.Provider value={wordsController}>
            {children}
        </WordsContext.Provider>
    );
};

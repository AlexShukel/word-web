import React, { createContext } from "react";

import { Progress } from "@chakra-ui/react";

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

    return wordsController ? (
        <WordsContext.Provider value={wordsController}>
            {children}
        </WordsContext.Provider>
    ) : (
        <Progress size="xs" isIndeterminate />
    );
};

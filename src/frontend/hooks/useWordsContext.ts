import { useContext } from "react";

import invariant from "invariant";

import { WordsContext } from "../components/WordsContext";

export const useWordsContext = () => {
    const context = useContext(WordsContext);

    invariant(context, "WordsContext was not provided");

    return context;
};

import React, { createContext, useEffect, useState } from "react";

import { AppData } from "../types/AppData";

type WordsContextType = AppData;

export const WordsContext = createContext<WordsContextType | undefined>(
    undefined
);

type WordsContextLoaderProps = {
    children: React.ReactNode;
};

export const WordsContextLoader = ({ children }: WordsContextLoaderProps) => {
    const [data, setData] = useState<AppData | undefined>();

    // TODO create a function to get data from electron
    useEffect(() => {
        setData({ words: [] });
    }, []);

    return (
        <React.Fragment>
            {data && (
                <WordsContext.Provider value={data}>
                    {children}
                </WordsContext.Provider>
            )}
        </React.Fragment>
    );
};

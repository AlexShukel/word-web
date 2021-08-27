import { useCallback, useEffect, useState } from "react";

import { AppData } from "../../shared/AppData";
import { WordDef } from "../../shared/WordDef";
import { WordsController } from "../types/WordsController";

const defaultData: AppData = {
    words: [],
};

export const useWordsController = (): WordsController | null => {
    const [data, setData] = useState<AppData | undefined>(undefined);

    const addWordDef = useCallback((wordDef: WordDef) => {
        setData((values = { words: [] }) => {
            values.words.push(wordDef);
            window.api.writeData(values);
            return values;
        });
    }, []);

    const removeWordDef = useCallback((index: number) => {
        setData((values) => {
            if (values && index >= 0 && index < values.words.length) {
                values.words.splice(index, 1);
                window.api.writeData(values);
            }

            return values;
        });
    }, []);

    useEffect(() => {
        window.api.getData().then((value) => setData(value ?? defaultData));
    }, []);

    return data
        ? {
              addWordDef,
              removeWordDef,
              appData: data,
          }
        : null;
};

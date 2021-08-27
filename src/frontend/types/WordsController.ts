import { AppData } from "../../shared/AppData";
import { WordDef } from "../../shared/WordDef";

export type WordsController = {
    addWordDef: (wordDef: WordDef) => void;
    removeWordDef: (index: number) => void;
    appData: AppData;
};

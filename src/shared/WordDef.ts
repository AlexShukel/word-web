import { Idiom } from "./Idiom";

export type WordDef = {
    word: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    idioms: Idiom[];
};

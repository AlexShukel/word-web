import { Idiom } from "./Idiom";

export type WordDef = {
    id: number;
    word: string;
    definition: string;
    synonyms: string[];
    antonyms: string[];
    idioms: Idiom[];
};

import { AppData } from "./AppData";

export type Api = {
    writeData: (data: AppData) => void;
    getData: () => void;
};

import { contextBridge, ipcRenderer } from "electron";

import { Api } from "../shared/Api";

const electron: Api = {
    test: () => {
        ipcRenderer.send("test");
    },
};

contextBridge.exposeInMainWorld("electron", electron);
